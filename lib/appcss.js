/* pop up effect image */
      var modal = document.getElementById('myModal');
	  
	  var img= document.getElementById('teleimg');
	  var modalImg = document.getElementById("imgtele");
	  var captionText = document.getElementById("caption");
	    img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() { 
        modal.style.display = "none";
      }
	  
/* pop up effect image1 */
      var modal = document.getElementById('myModal');
	  
	  var img= document.getElementById('teleimg1');
	  var modalImg = document.getElementById("imgtele");
	  var captionText = document.getElementById("caption");
	    img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() { 
        modal.style.display = "none";
      }
/* pop up effect image2 */
      var modal = document.getElementById('myModal');
	  
	  var img= document.getElementById('teleimg2');
	  var modalImg = document.getElementById("imgtele");
	  var captionText = document.getElementById("caption");
	    img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() { 
        modal.style.display = "none";
      }
	  
/* pop up effect image3 */
      var modal = document.getElementById('myModal');
	  
	  var img= document.getElementById('teleimg3');
	  var modalImg = document.getElementById("imgtele");
	  var captionText = document.getElementById("caption");
	    img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() { 
        modal.style.display = "none";
      }
	  
/* pop up effect image4 */
      var modal = document.getElementById('myModal');
	  
	  var img= document.getElementById('teleimg4');
	  var modalImg = document.getElementById("imgtele");
	  var captionText = document.getElementById("caption");
	    img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() { 
        modal.style.display = "none";
      }

	  
/* form validation for JOT.html */

function validateForm() {
    var x = document.forms["signUp"]["firstname"].value;
    if (x == "") {
        alert("Username should not be left empty");
        return false;
    }
	
	var z = document.forms["hobbi"]["hobbie"].value;
    if (z == "") {
        alert("Interest should not be left empty");
        return false;
    }
	
	var y = document.forms["E-mail"]["email"].value;
    if (y == "") {
        alert("E-mail should not be left empty");
        return false;
    }
}
	  
    