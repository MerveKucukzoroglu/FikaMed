/** The main function that runs first*/
function initial() {
  
  let intro = document.getElementById("intro");
  intro.style.display = "block";
    
  document.getElementById("user-name").value = "";
  document.getElementById("user-name").focus();
  
  document.getElementById("submit-button").addEventListener("mousedown", function() {
    let nameValue = document.getElementById("user-name").value;
    if (nameValue == "" || nameValue == null) {
      alert("Please enter your name!");
        return false;
      }
      document.getElementById("submit-button").addEventListener("click", runChat);
  });

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

/**The chat loop
 * after user's name response
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

/**Runs when user clicks 'Awesome' button */
function awesome() {
  
  console.log("You clicked awesome button!");
  
  document.getElementById("feeling-today").style.display = "none";
  document.getElementById("awesome-options").style.display = "block";

  var nameRepeat = document.getElementById("user-name").value;
  document.getElementsByClassName("name-repeat")[1].innerHTML = nameRepeat;

  document.getElementById("choose").addEventListener("click", complete);
}

/**Runs when user clicks 'Terrible' button */
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

/**Displays suggestions when user clicks 'angry' button */
function angry() {
  
  console.log("You feel angry");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-angry").style.display = "block";

  document.getElementById("timer").addEventListener("click", timeCounter);

  document.getElementsByClassName("okay")[0].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'sad' button */
function sad() {
  
  console.log("You feel sad");
  
  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-angry").style.display = "none";
  document.getElementById("feeling-sad").style.display = "block";

  document.getElementsByClassName("okay")[1].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'tired' button */
function tired() {
  
  console.log("You feel tired");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-sad").style.display = "none";
  document.getElementById("feeling-tired").style.display = "block";

  document.getElementsByClassName("okay")[2].addEventListener("click", complete);

}

/**Displays suggestions when user clicks 'worthless' button */
function worthless() {
 
  console.log("You feel worthless");

  document.getElementById("terrible-options").style.display = "none";
  document.getElementById("feeling-tired").style.display = "none";
  document.getElementById("feeling-worthless").style.display = "block";
  
  document.getElementsByClassName("okay")[3].addEventListener("click", complete);

}

/**Displays last message when user completes their session
 * sends the user to feedback form after they are done with complete function
 */
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

/**displays feedback form once they complete all the other stages of their session */
function feedback() {

  console.log("Feedback");

  document.getElementById("complete").style.display = "none";
  document.getElementById("feedback").style.display = "block";
  
}

/**Timer function of 10 seconds
 * 5 seconds Inhale
 * 5 seconds Exhale
 */
function timeCounter() {
  const timer = 0;
  const x = setInterval(function(){
    document.getElementById("inhale-exhale").innerHTML = "Inhale... " + timer;
    timer++;

    if(timer>5) {
      clearInterval(x);
      const y= setInterval(function() {
        document.getElementById("inhale-exhale").innerHTML = "Exhale... " + timer;
        timer++;

        if(timer>10){
          clearInterval(y);
        }

      }, 1000)
    }
  }, 1000);

}

