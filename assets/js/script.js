/** The main function that runs first*/
function initial() {
  
  controlDisplay([], ["intro"]);

  document.getElementById("user-name").value = "";
  document.getElementById("user-name").focus();
  
  document.getElementById("submit-button").addEventListener("mousedown", function() {
    let nameValue = document.getElementById("user-name").value;
    if (nameValue == "" || nameValue == null) {
      alert("Please enter your name!");
        return false;
      } else if (nameValue.trim() !== "") {
        document.getElementById("submit-button").addEventListener("click", runChat);
      } else {
        alert("Lets be friends, please enter your name.");
      }
  });

  document.getElementById("user-name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      let nameValue = document.getElementById("user-name").value;
      if (nameValue == "" || nameValue == null) {
        alert("Please enter your name!");
        return false;
      } else if (nameValue.trim() !== "") {
        document.getElementById("submit-button").click();
      } else {
        alert("Lets be friends, please enter your name.");
      }
      
    }
  });
  
  document.getElementById("submit-button").addEventListener("click", runChat);
  
}

/**Define username value entered, 
 * and display the value when called*/
function userName(repeat) {
  repeatUserName("name1", "name2", "name3", "name4")

  repeat.map((el) => {
    repeatUserName(el);
  })
}

function repeatUserName(el){
  var repeat = document.getElementById("user-name").value;
  document.getElementById(el).innerHTML = repeat; 
}

/**The chat loop
 * after user's name response
 */
function runChat() {
  
  controlDisplay(["intro"], ["feeling-today"]);

  userName(["name1"]);
  
  document.getElementById("awesome-button").addEventListener("click", awesome);
  document.getElementById("terrible-button").addEventListener("click", terrible);
  
}

/**Runs when user clicks 'Awesome' button */
function awesome() {
  
  controlDisplay([ "intro", "feeling-today"], ["awesome-options"]);

  userName(["name2"]);

  document.getElementById("choose").addEventListener("click", complete);

}

/**Runs when user clicks 'Terrible' button */
function terrible() {

  controlDisplay(["intro", "feeling-today", "awesome-options"], ["terrible-options"]);

  userName(["name3"]);

  document.getElementById("angry").addEventListener("click", angry);
  document.getElementById("sad").addEventListener("click", sad);
  document.getElementById("tired").addEventListener("click", tired);
  document.getElementById("worthless").addEventListener("click", worthless);

}

/**Displays suggestions when user clicks 'angry' button */
function angry() {
  
  controlDisplay(["intro", "terrible-options"], ["feeling-angry"]);
  
  document.getElementById("timer").addEventListener("click", timeCounter);

  document.getElementsByClassName("okay")[0].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'sad' button */
function sad() {
  
  controlDisplay(["intro", "terrible-options", "feeling-angry"], ["feeling-sad"]);

  document.getElementsByClassName("okay")[1].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'tired' button */
function tired() {
  
  controlDisplay(["intro", "terrible-options", "feeling-sad"], ["feeling-tired"]);

  document.getElementsByClassName("okay")[2].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'worthless' button */
function worthless() {
 
  controlDisplay(["intro", "terrible-options", "feeling-tired"], ["feeling-worthless"]);
  
  document.getElementsByClassName("okay")[3].addEventListener("click", complete);

}

/**Displays last message when user completes their session
 * sends the user to feedback form after they are done with complete function
 */
function complete() {
  
  controlDisplay(["intro", "awesome-options","feeling-angry", "feeling-sad", "feeling-tired", "feeling-worthless"], ["complete"]);

  userName(["name4"]);
  
  document.getElementById("complete-button").addEventListener("click", feedback);
  
}

/**displays feedback form once they complete all the other stages of their session */
function feedback() {

  controlDisplay(["intro", "complete"], ["feedback"]);

}

/**Timer 60 seconds */
function timeCounter() {
  var timer = 60;
  var x = setInterval(function(){
    document.getElementById("inhale-exhale").innerHTML =  timer;
    timer--;

    if(timer<0) {
      clearInterval(x);
      document.getElementById("inhale-exhale").innerHTML = "Click the button again to repeat the exercise";
    }
  }, 1000);

}


/**Control display of elements */
function controlDisplay(hiddenEl, shownEl) {
  hideElement("intro", "feeling-today", "awesome-options", "terrible-options", "feeling-angry", 
  "feeling-sad", "feeling-tired", "feeling-worthless",  "complete", "feedback")

  showElement("intro", "feeling-today", "awesome-options", "terrible-options", "feeling-angry", 
  "feeling-sad", "feeling-tired", "feeling-worthless",  "complete", "feedback")

  hiddenEl.map((el) => {
    hideElement(el);
  })

  shownEl.map((el) => {
    showElement(el);
  })
}

function hideElement(el) {
document.getElementById(el).style.display = "none";
}

function showElement(el) {
  document.getElementById(el).style.display = "block";
}