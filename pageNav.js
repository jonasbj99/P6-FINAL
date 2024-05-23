const loginMain = document.getElementById("loginMain");
const signupMain = document.getElementById("signupMain");
const indexMain = document.getElementById("indexMain");
const createCourseMain = document.getElementById("createCourseMain");
const coursePageMain = document.getElementById("coursePageMain");
const createHomeworkMain = document.getElementById("createHomeworkMain");
const profilePageMain = document.getElementById("profilePageMain");
const readtest1Main = document.getElementById("readtest1Main");
const readtest2Main = document.getElementById("readtest2Main");
const readtest3Main = document.getElementById("readtest3Main");

let InputParagraph = document.getElementById("wrongInput");

let loginUserName = document.getElementById("loginUsernameID");
let loginPassword = document.getElementById("loginPasswordID");

let signUpUsername = document.getElementById("signUpUsernameID");
let signUpPassword = document.getElementById("signUpPasswordID");

const loginError = document.getElementById("login-error");
const signupError = document.getElementById("signup-error");

let loginBool = false;

const readTime = document.getElementById("stop-timer");
const counterElement = document.getElementById("counter");

let secondCount = 0;
let wpm = 0;
let intervalId;

let pages = [
  loginMain,
  signupMain,
  indexMain,
  createCourseMain,
  coursePageMain,
  createHomeworkMain,
  profilePageMain,
  readtest1Main,
  readtest2Main,
  readtest3Main,
];

// --nav function--
function hideAll() {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i]) {
      pages[i].hidden = true;
    } else {
      console.log(pages[i] + " does not exist!");
    }
  }
}

function activatePage(main) {
  hideAll();
  loginError.innerText = "";
  signupError.innerText = "";
  scheduleConfirm.innerText = "";
  main.hidden = false;
}
// --nav function--

// --login/signup function--
function LogInUser() {
  CheckLoginDetails();
  if (loginBool === true) {
    console.log("logged in");
  }
}

function SignUpUser() {
  if (signUpUsername.value.length >= 4 && signUpPassword.value.length >= 4) {
    profileArr[0].name = signUpUsername.value;
    profileArr[0].pass = signUpPassword.value;
    profileArr[0].wpm = 0;
    profileArr[0].timeSchedule.mon = 0;
    profileArr[0].timeSchedule.tue = 0;
    profileArr[0].timeSchedule.wed = 0;
    profileArr[0].timeSchedule.thu = 0;
    profileArr[0].timeSchedule.fri = 0;
    profileArr[0].timeSchedule.sat = 0;
    profileArr[0].timeSchedule.sun = 0;

    showUsername();
    loadTimeSchedule();
    loadWPM();
    activatePage(profilePageMain);
  } else {
    signupError.innerText =
      "Username and password must be longer than 4 characters";
  }
}

function GoToSignUp() {
  signUpUsername.value = "";
  signUpPassword.value = "";
  activatePage(signupMain);
}

function CheckLoginDetails() {
  if (
    loginUserName.value === profileArr[0].name &&
    loginPassword.value === profileArr[0].pass
  ) {
    activatePage(indexMain);
    loginUserName.value = "";
    loginPassword.value = "";
  } else if (loginUserName.value === "" && loginPassword.value === "") {
    loginError.innerText = "Please fill in your credentials";
  } else {
    loginError.innerText = "Incorrect login details";
  }
}
// --login/signup function--

// --readtest function--
function StartTest() {
  activatePage(readtest2Main);
  incrementSeconds();
}

function StopTest() {
  activatePage(readtest3Main);
  stopTimer();
  stopCounter();
}

function incrementSeconds() {
  secondCount = 0;
  // Update the counter every second
  intervalId = setInterval(function () {
    // Increment the seconds
    secondCount++;

    // Update the counter element with the new value
    // counterElement.textContent = seconds;
  }, 1000); // Update every 1000 milliseconds (1 second)
}

function stopTimer() {
  wpm = Math.trunc(145 / (secondCount / 60));
  readTime.innerText = "Your reading speed is " + wpm + " words per minute";
  profileArr[0].wpm = wpm;
  loadWPM();
}

function stopCounter() {
  clearInterval(intervalId);
}
// --readtest function--
