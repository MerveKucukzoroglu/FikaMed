
function initial() {
  
  let intro = document.getElementById("intro");
  intro.style.display = "block";
    
  document.getElementById("user-name").value = "";
  document.getElementById("user-name").focus();

  document.getElementById("user-name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      let nameValue = document.getElementById("user-name").value;
      if (nameValue == "" || nameValue == null) {
        alert("Please enter your name!");
        return false;
      }
      document.getElementById("submit-button").click();
    }
  });
    
  document.getElementById("submit-button").addEventListener("click", runChat);

}

  
/**The main chat loop, when the script is loaded
 * and after user's response
 */
function runChat() {
  
  console.log("Begin talking with user!");
  document.getElementById("intro").style.display = "none";

  document.getElementById("feeling-today").style.display = "block";
 
  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[0].innerHTML = nameRepeat;

  console.log("Changing funtion based on what the user clicks");
  
  document.getElementById("awesome-button").addEventListener("click", awesome);

  document.getElementById("terrible-button").addEventListener("click", terrible);
  
}

/**The initial of chat
 * user enter their name
 */
function displayChat() {

 
}

function checkSelectedButton() {

}

function awesome() {
  
  console.log("You clicked awesome button!");
  
  document.getElementById("feeling-today").style.display = "none";

  document.getElementById("awesome-options").style.display = "block";

  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[1].innerHTML = nameRepeat;

  document.getElementById("choose").addEventListener("click", complete);
}

function terrible() {

  console.log("You clicked terrible button!");
  
  document.getElementById("feeling-today").style.display = "none";

  document.getElementById("awesome-options").style.display = "none";

  document.getElementById("terrible-options").style.display = "block";

  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[2].innerHTML = nameRepeat;

  document.getElementById("angry").addEventListener("click", angry);
  document.getElementById("sad").addEventListener("click", sad);
  document.getElementById("tired").addEventListener("click", tired);
  document.getElementById("worthless").addEventListener("click", worthless);

}

function reasons() {

}

function angry() {
  console.log("You feel angry");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-angry").style.display = "block";

  document.getElementsByClassName("okay")[0].addEventListener("click", complete);
}

function sad() {
  console.log("You feel sad");
  
  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-angry").style.display = "none";
  document.getElementById("feeling-sad").style.display = "block";

  document.getElementsByClassName("okay")[1].addEventListener("click", complete);

}

function tired() {
  console.log("You feel tired");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-sad").style.display = "none";
  document.getElementById("feeling-tired").style.display = "block";

  document.getElementsByClassName("okay")[2].addEventListener("click", complete);

}

function worthless() {
  console.log("You feel worthless");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-tired").style.display = "none";
  document.getElementById("feeling-worthless").style.display = "block";
  
  document.getElementsByClassName("okay")[3].addEventListener("click", complete);
}

function complete() {
  console.log("You are at complete stage!");

  document.getElementById("awesome-options").style.display = "none";
  document.getElementById("feeling-angry").style.display = "none";
  document.getElementById("feeling-sad").style.display = "none";
  document.getElementById("feeling-tired").style.display = "none";
  document.getElementById("feeling-worthless").style.display = "none";

  document.getElementById("complete").style.display = "block";

  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[3].innerHTML = nameRepeat;
  
  document.getElementById("complete-button").addEventListener("click", feedback);
  
}

function feedback() {
console.log("Feedback");

document.getElementById("complete").style.display = "none";
document.getElementById("feedback").style.display = "block";
}

