//I learnt this through this link
//https://www.youtube.com/watch?v=uU5YPIvJ24Y&t=929s 

var
//variables given to each element
COLS = 26,
ROWS = 26,
EMPTY = 0,
SNAKE = 6,
FRUIT = 5,
LEFT  = 1,
UP    = 2,
RIGHT = 3,
DOWN  = 4,
KEY_LEFT  = 37,
KEY_UP    = 38,
KEY_RIGHT = 39,
KEY_DOWN  = 40,
//objects within the game
canvas,	   //the body to put it on
ctx,	   //render the canvas
keystate,  //keyboard listener
frames,    //animations for the objects
score;	  

//this grid is to determine the boundaries of the snake
grid = {
	width: null,  //coloums
	height: null, //rows
	_grid: null,  // store a value in a memory location
	init: function(d, c, r) {
		this.width = c;
		this.height = r;
		this._grid = [];
		for (var x=0; x < c; x++) {
			this._grid.push([]);
			for (var y=0; y < r; y++) {
				this._grid[x].push(d);
			}
		}
	},//the grid will be x, y the snake will not be able to pass through the boundaries
	set: function(val, x, y) {
		this._grid[x][y] = val;
	},
	get: function(x, y) {
		return this._grid[x][y];
	}
}
//snake is the object that has no orders and put on the same line everytime
snake = {
	direction: null,
	last: null,		 
	_queue: null,	 

	init: function(d, x, y) {
		this.direction = d;
		this._queue = [];
		this.insert(x, y);
	},//starts the position

	insert: function(x, y) {
		this._queue.unshift({x:x, y:y});
		this.last = this._queue[0];
	},//add an element to array

	remove: function() {
		return this._queue.pop();
	}
};

function setFood() {
	var empty = [];
	for (var x=0; x < grid.width; x++) {
		for (var y=0; y < grid.height; y++) {
			if (grid.get(x, y) === EMPTY) {
				empty.push({x:x, y:y});
			}}} //find empty grid to put food down
			
	var randpos = empty[Math.round(Math.random()*(empty.length - 2))];
	grid.set(FRUIT, randpos.x, randpos.y); //food gets place randomly
}
//game start
function main() {
	// canvas reset
	canvas = document.createElement("canvas");
	canvas.width = COLS*20;
	canvas.height = ROWS*20;
	ctx = canvas.getContext("2d");
	// canvas is connected to the body
	document.body.appendChild(canvas);
	// font for score
	ctx.font = "12px Helvetica";
	frames = 0;
	keystate = {};
	// listen for keyboard instruction
	document.addEventListener("keydown", function(event) {
		keystate[event.keyCode] = true;
	});
	document.addEventListener("keyup", function(event) {
		delete keystate[event.keyCode];
	});
	// intatiate game objects and starts the game loop
	init();
	loop();
}

//resets 
function init() {
	score = 0;
	grid.init(EMPTY, COLS, ROWS);
	var sp = {x:Math.floor(COLS/3), y:ROWS-1};
	snake.init(UP, sp.x, sp.y);
	grid.set(SNAKE, sp.x, sp.y);
	setFood();
}

//starts the game looping
function loop() {
	update();
	draw();
	window.requestAnimationFrame(loop, canvas);
}
// game gets updated every action
function update() {
	frames++;
	// button press determins the snake direction
	if (keystate[KEY_LEFT] && snake.direction !== RIGHT) {snake.direction = LEFT;}
	if (keystate[KEY_UP] && snake.direction !== DOWN) {snake.direction = UP;}
	if (keystate[KEY_RIGHT] && snake.direction !== LEFT) {snake.direction = RIGHT;}
	if (keystate[KEY_DOWN] && snake.direction !== UP) {snake.direction = DOWN;}
	// speed of snake
	if (frames%6 === 0) {
	var nx = snake.last.x;
	var ny = snake.last.y;
		switch (snake.direction) {
			case LEFT:
				nx--;
				break;
			case UP:
				ny--;
				break;
			case RIGHT:
				nx++;
				break;
			case DOWN:
				ny++;
				break;
		}
		// if snake dies the game will repeat
		if (0 > nx || nx > grid.width-1  ||
			0 > ny || ny > grid.height-1 ||
			grid.get(nx, ny) === SNAKE
		) {
			return init();
		}//fruit and object are put together
		if (grid.get(nx, ny) === FRUIT) {
			score++;
			setFood(); //food eaten new fruit lay down
		} else {
			var tail = snake.remove();
			grid.set(EMPTY, tail.x, tail.y);//snake bites tail it resets
		}
		grid.set(SNAKE, nx, ny);
		snake.insert(nx, ny); 
	}
}
//canvas 
function draw() {
	var tw = canvas.width/grid.width;
	var th = canvas.height/grid.height;
	for (var x=0; x < grid.width; x++) {
	for (var y=0; y < grid.height; y++) {
		switch (grid.get(x, y)) {
			case EMPTY:
				ctx.fillStyle = "#fff";
				break;
			case SNAKE:
				ctx.fillStyle = "#0ff";
				break;
			case FRUIT:
				ctx.fillStyle = "#f00";
				break;
			}
			ctx.fillRect(x*tw, y*th, tw, th);
		}
	}
	//records the score
	ctx.fillStyle = "#000"; //score colour
	ctx.fillText("SCORE: " + score, 10, canvas.height-10);
}
// repeat game when death
main();