/*control navigation scrolling + jQuery*/

$(".nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 1500); /* timer */
});

/* fade effect java + jQuery*/ 

$(window).scroll(function(){
    $(".info1, .info2, .info3, .info4, .info5").css
	("opacity", 0 + $(window).scrollTop() / 950); /* fade start 950 heigt of page */
  });

  $(window).scroll(function(){
    $(".t1").css
	("opacity", 0 + $(window).scrollTop() / 800); /* fade start 950 heigt of page */
  });
  
 /* responsive design */
 function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}