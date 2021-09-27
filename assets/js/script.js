//Wait for the DOM to finish loading before running
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

}

