//Wait for the DOM to finish loading before running
//Prepare the focus and enter key function for the user
document.getElementById("user-name").value = "";
document.getElementById("user-name").focus();

document.getElementById("user-name").addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-button").click();
    }
});

/**The main chat loop, when the script is loaded
 * and after user's response
 */
function runChat() {
  
  console.log("Begin talking with user!");
  
  let name = document.getElementById("user-name").value;
  document.getElementById("text-area").innerHTML = `<p>Hey ${name}, how are you feeling today?</p>`;
  
  console.log(name);

  let twoButtons = document.getElementById("buttons-area");
  twoButtons.innerHTML.remove;
  twoButtons.innerHTML = 
  `<button id="awesome-button" onclick="awesome();">Awesome</button>
  <button id="terrible-button" onclick="terrible();">Terrible</button>
  `
  
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

  console.log("You feel awesome!");
  let feelAwesome = document.getElementById("text-area");
  feelAwesome.innerHTML = `
    <p>That's great! What makes you feel awesome?</p>
    
    <input type = "radio" name = "choice" id="school-work">
    <label for="school-work" class="radio-input">School/Work</label>
    
    <input type = "radio" name = "choice" id="nature-hobbies">
    <label for="nature-hobbies" class="radio-input">Nature/hobbies</label>
    
    <input type = "radio" name = "choice" id="family-friends">
    <label for="family-friends" class="radio-input">Family/Friends</label>
    
    <input type = "radio" name = "choice" id="fikamed" checked>
    <label for="fikamed" class="radio-input">FikaMed</label>
    `
    let done = document.getElementById("buttons-area");
    done.innerHTML.remove;
    done.innerHTML = `<button id="done" onclick="feedback();">Done</button>`

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

