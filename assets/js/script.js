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
  let intro = document.getElementById("intro");
  intro.style.display = "none";

  let feelingToday = document.getElementById("feeling-today");
  feelingToday.style.display = "block";
 
  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[0].innerHTML = nameRepeat;

  console.log("Changing funtion based on what the user clicks");
}

/**The initial of chat
 * user enter their name
 */
function displayChat() {

}

function checkSelectedButton() {

}

function awesome() {
  

}

function terrible() {

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

