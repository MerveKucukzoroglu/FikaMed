//Wait for the DOM to finish loading before running
//Prepare the focus and enter key function for the user



// let feelingToday = document.getElementById("feeling-today");
// let awesomeOptions = document.getElementById("awesome-options");
// let terribleOptions = document.getElementById("terrible-options");
// let feelingAngry = document.getElementById("feeling-angry");
// let feelingSad = document.getElementById("feeling-sad");
// let feelingTired = document.getElementById("feeling-tired");
// let feelingWorthless = document.getElementById("feeling-worthless");
// let complete = document.getElementById("feedback");
  
// const vars = [intro, feelingToday, awesomeOptions, terribleOptions, 
//   feelingAngry, feelingSad, feelingTired, feelingWorthless, complete]

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
}

function terrible() {

  console.log("You clicked terrible button!");
  
  document.getElementById("feeling-today").style.display = "none";

  document.getElementById("awesome-options").style.display = "none";

  document.getElementById("terrible-options").style.display = "block";

  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[1].innerHTML = nameRepeat;

}

function reasons() {

}

function angry() {

}

function sad() {

}

function tired() {

}

function worthless() {

}

function feedback() {
console.log("Feedback");
}

