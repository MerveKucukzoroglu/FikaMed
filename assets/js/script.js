//Wait for the DOM to finish loading before running
//Prepare the focus and enter key function for the user
document.getElementById("user-name").value = "";
document.getElementById("user-name").focus();


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
    if (intro.style.display === "block") {
      intro.style.display = "none";
    } else {
      intro.style.display = "block";
    }
      

}

  
/**The main chat loop, when the script is loaded
 * and after user's response
 */
function runChat() {
  
  console.log("Begin talking with user!");
  
  let intro = document.getElementById("intro");
  let feelingToday = document.getElementById("feeling-today");
  let awesomeOptions = document.getElementById("awesome-options");
  let terribleOptions = document.getElementById("terrible-options");
  let feelingAngry = document.getElementById("feeling-angry");
  let feelingSad = document.getElementById("feeling-sad");
  let feelingTired = document.getElementById("feeling-tired");
  let feelingWorthless = document.getElementById("feeling-worthless");
  let complete = document.getElementById("feedback");
  
    if (intro.style.display === "none") {
      feelingToday.style.display = "block";
    } else {
      feelingToday.style.display = "none"; 
      awesomeOptions.style.display = "none";
      terribleOptions.style.display = "none";

    }
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

