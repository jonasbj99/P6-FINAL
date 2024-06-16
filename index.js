const classSection = document.getElementById("course-section");
const overviewSection = document.getElementById("overview-section");
const homeworkSection = document.getElementById("homework-section");
const selectEl1 = document.getElementById("type-class1");
const selectEl2 = document.getElementById("type-class2");
let selectedCourse = 0;

let courseName = document.getElementById("course-name");

let homeTitle = document.getElementById("homeTitle");
let homeDesc = document.getElementById("homeDesc");
let homeAmount = document.getElementById("homeAmount");
let homeType = document.getElementById("homeType");
let homeDate = document.getElementById("homeDate");

let wpmEl = document.getElementById("wpm");

let monTime = document.getElementById("monTime");
let tueTime = document.getElementById("tueTime");
let wedTime = document.getElementById("wedTime");
let thuTime = document.getElementById("thuTime");
let friTime = document.getElementById("friTime");
let satTime = document.getElementById("satTime");
let sunTime = document.getElementById("sunTime");

const scheduleConfirm = document.getElementById("schedule-confirmation");

const weekdayArr = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

// ----------------
// On Load Function
// ----------------
function AllOnLoadFunctions() {
  generateAllCourses();
  courseOnLoad();
  showUsername();
  loadTimeSchedule();
  loadWPM();
}

// -------
// Courses
// -------
function generateAllCourses() {
  for (let i = 0; i < courseArr.length; i++) {
    generateCourse(courseArr[i]);
  }
}

// TILFØJ ONCLICK TIL CLASSPAGE
function generateCourse(course) {
  const aEl = document.createElement("a");
  aEl.setAttribute("onclick", "activateCoursePage('" + course.name + "')");

  const divEl = document.createElement("div");
  divEl.setAttribute("class", "classes-name");

  const pEl = document.createElement("p");
  pEl.innerHTML = course.name;

  divEl.appendChild(pEl);
  aEl.appendChild(divEl);
  classSection.appendChild(aEl);
}

function CheckAddCourse() {
  const courseReq = courseName.value != "";
  const alreadyUsed = CheckCourseNames(courseName.value);

  if (courseReq && !alreadyUsed) {
    addCourse();
  } else if (alreadyUsed) {
    alert("Course name already exists");
  } else if (!courseReq) {
    alert("You need to give the course a name");
  }
}

function CheckCourseNames(name) {
  let alreadyUsed = false;
  for (let i = 0; i < courseArr.length; i++) {
    if (name === courseArr[i].name) {
      alreadyUsed = true;
      break;
    }
  }
  return alreadyUsed;
}

function addCourse() {
  const newName = courseName.value;
  const newCourse = courseArr.push({
    name: newName,
    homeworkArr: [],
  });
  generateCourse(courseArr[newCourse - 1]);
  activatePage(indexMain);
  generateSelectOptions1(courseArr);
  generateSelectOptions2(courseArr);
  courseName.value = "";
  console.log(courseArr);
}

// --------
// Overview
// --------
function refreshOverviewButton() {
  createOverviewArr(courseArr);
  clearSection(overviewSection);
  generateUrgent(profileArr[0].urgentArr);
  generateAllDays(profileArr[0].overviewArr);
}

function generateUrgent(arr) {
  const aEl = document.createElement("a");

  const divEl1 = document.createElement("div");
  divEl1.setAttribute("class", "overview-name");

  const divEl2 = document.createElement("div");
  divEl2.setAttribute("class", "overview-name-small-header");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p1.innerHTML = " ";
  p2.innerHTML = "URGENT HOMEWORK";
  p3.innerHTML = "Total: " + calculateTotalTime(arr) + " hours";
  p1.setAttribute("class", "overview-name-small-header-date");
  p2.setAttribute("class", "overview-name-small-header-day");
  p3.setAttribute("class", "overview-name-small-header-total");

  divEl2.appendChild(p1);
  divEl2.appendChild(p2);
  divEl2.appendChild(p3);
  divEl1.appendChild(divEl2);
  aEl.appendChild(divEl1);
  overviewSection.appendChild(aEl);

  const funcArr = arr;
  for (let i = 0; i < funcArr.length; i++) {
    const newEL = generateDayHomework(funcArr[i]);
    divEl1.appendChild(newEL);
  }
  console.log(funcArr);
}

function calculateTotalTime(arr) {
  const funcArr = arr;
  let totalTime = 0;

  for (let i = 0; i < funcArr.length; i++) {
    homeTime = funcArr[i].time;
    totalTime += homeTime;
  }

  return totalTime;
}

function generateAllDays(arr) {
  for (let i = 0; i < arr.length; i++) {
    generateDay(arr[i]);
  }
}

function generateDay(day) {
  const aEl = document.createElement("a");

  const divEl1 = document.createElement("div");
  divEl1.setAttribute("class", "overview-name");

  const divEl2 = document.createElement("div");
  divEl2.setAttribute("class", "overview-name-small-header");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p1.innerHTML = formatDate(day.date);
  p2.innerHTML = weekdayArr[day.weekday];
  p3.innerHTML = "Total: " + day.totalTime + " hours";
  p1.setAttribute("class", "overview-name-small-header-date");
  p2.setAttribute("class", "overview-name-small-header-day");
  p3.setAttribute("class", "overview-name-small-header-total");

  divEl2.appendChild(p1);
  divEl2.appendChild(p2);
  divEl2.appendChild(p3);
  divEl1.appendChild(divEl2);
  aEl.appendChild(divEl1);
  overviewSection.appendChild(aEl);

  const funcArr = day.homework;
  for (let i = 0; i < funcArr.length; i++) {
    const newEL = generateDayHomework(funcArr[i]);
    divEl1.appendChild(newEL);
  }
}

function generateDayHomework(homework) {
  const divEl1 = document.createElement("div");
  divEl1.setAttribute("class", "overview-name-small-info");

  const divEl2 = generateCheckBox();

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  p1.innerHTML = homework.title;
  p2.innerHTML = homework.course;
  p3.innerHTML = homework.time + " hours";

  divEl1.appendChild(divEl2);
  divEl1.appendChild(p1);
  divEl1.appendChild(p2);
  divEl1.appendChild(p3);
  divEl1.appendChild(p4);

  return divEl1;
}

function generateCheckBox() {
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "CheckoffButton");

  const img1 = document.createElement("img");
  img1.src = "img/Buttons/CheckOffButton.png";

  const img2 = document.createElement("img");
  img2.src = "img/Buttons/CheckOffButton-hover.png";
  img2.setAttribute("class", "CheckoffButton-hover");

  const img3 = document.createElement("img");
  img3.src = "img/Buttons/CheckOffButton - Green.png";
  img3.setAttribute("class", "CheckoffButton-green");

  divEl.appendChild(img1);
  divEl.appendChild(img2);
  divEl.appendChild(img3);

  return divEl;
}

function createOverviewArr(arr) {
  let someArr = calculateDates(arr);
  findWeekday(someArr);
  assignTime(someArr);
  assignHomeWork(someArr);
  console.log(someArr);
  profileArr[0].overviewArr = someArr;
}

function assignHomeWork(arr) {
  const conversion = 1000 * 3600 * 24;
  let sortedArr = sortHomework(courseArr);
  calculateHomeworkTime(sortedArr);
  let funcArr = arr;

  for (let i = funcArr.length - 1; i >= 0; i--) {
    funcArr[i].homework = [];
    let timeLeft = funcArr[i].availableTime - funcArr[i].totalTime;

    if (timeLeft <= 0) {
      continue;
    } else if (timeLeft > 0) {
      for (let n = sortedArr.length - 1; n >= 0; n--) {
        const lastHomework = sortedArr[n];

        const deadline = lastHomework.deadline;
        const deadlineTime = deadline.getTime();
        const date = funcArr[i].date;
        const dateTime = date.getTime();
        const deadlineBool = deadlineTime - dateTime >= conversion;

        if (!deadlineBool) {
          continue;
        } else if (timeLeft < 0.25) {
          break;
        }

        if (lastHomework.time <= timeLeft && deadlineBool) {
          funcArr[i].homework.unshift({
            title: lastHomework.title,
            course: lastHomework.course,
            time: lastHomework.time,
          });
          sortedArr.pop();
          funcArr[i].totalTime += lastHomework.time;
          timeLeft -= lastHomework.time;
          continue;
        } else if (lastHomework.time > timeLeft && deadlineBool) {
          funcArr[i].homework.unshift({
            title: lastHomework.title,
            course: lastHomework.course,
            time: timeLeft,
          });
          funcArr[i].totalTime += timeLeft;
          lastHomework.time -= timeLeft;
          timeLeft = 0;
          break;
        } else {
          timeLeft = 0;
          break;
        }
      }
    }
  }

  profileArr[0].urgentArr = sortedArr;
  return funcArr;
}

function calculateHomeworkTime(arr) {
  let funcArr = arr;

  for (let i = 0; i < funcArr.length; i++) {
    const homeworkAmount = funcArr[i].amount;
    const wpm = profileArr[0].wpm;

    switch (funcArr[i].type) {
      case "pages":
        funcArr[i].time = (homeworkAmount * 400) / wpm / 60; // Pages to hours, 400 should be changed to fit amount of words pr page
        break;
      case "words":
        funcArr[i].time = homeworkAmount / wpm / 60; // Words to hours
        break;
      case "minutes":
        funcArr[i].time = homeworkAmount / 60; // Minutes to hours
        break;
      default:
        funcArr[i].time = 0;
        console.log(
          "assignHomework() SWITCH PROBLEM, time set to: " + funcArr[i].time
        );
    }

    timeDecimal = funcArr[i].time - Math.floor(funcArr[i].time);
    funcArr[i].time -= timeDecimal;
    if (timeDecimal > 0 && timeDecimal <= 0.25) {
      timeDecimal = 0.25;
    } else if (timeDecimal > 0.25 && timeDecimal <= 0.5) {
      timeDecimal = 0.5;
    } else if (timeDecimal > 0.5 && timeDecimal <= 0.75) {
      timeDecimal = 0.75;
    } else if (timeDecimal > 0.75 && timeDecimal <= 1) {
      timeDecimal = 1;
    }

    funcArr[i].time += timeDecimal;
  }
  return funcArr;
}

function assignTime(arr) {
  const schedule = profileArr[0].timeSchedule;
  let funcArr = arr;

  for (let i = 0; i < funcArr.length; i++) {
    switch (funcArr[i].weekday) {
      case 0:
        funcArr[i].availableTime = schedule.fri;
        break;
      case 1:
        funcArr[i].availableTime = schedule.sat;
        break;
      case 2:
        funcArr[i].availableTime = schedule.sun;
        break;
      case 3:
        funcArr[i].availableTime = schedule.mon;
        break;
      case 4:
        funcArr[i].availableTime = schedule.tue;
        break;
      case 5:
        funcArr[i].availableTime = schedule.wed;
        break;
      case 6:
        funcArr[i].availableTime = schedule.thu;
        break;
      default:
        console.log("assignTime() SWITCH PROBLEM!!!");
    }
    funcArr[i].totalTime = 0;
  }

  return funcArr;
}

function findWeekday(arr) {
  const funcArr = arr;
  for (let i = 0; i < funcArr.length; i++) {
    const day = funcArr[i].date.getDay();
    funcArr[i].weekday = day;
  }

  return funcArr;
}

function calculateDates(arr) {
  const conversion = 1000 * 3600 * 24;
  const funcArr = [];

  for (let i = 1; i <= calculateDays(arr); i++) {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const newDay = todayDate.getDate();
    const newMonth = todayDate.getMonth() + 1;
    const newYear = todayDate.getFullYear();
    const today = new Date(newYear, newMonth, newDay);
    const todayTime = today.getTime();

    const newDate = new Date(todayTime + conversion * i);

    funcArr.push({ date: newDate });
  }
  return funcArr;
}

function calculateDays(arr) {
  const sortedArr = sortHomework(arr);
  const conversion = 1000 * 3600 * 24;

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const newDay = todayDate.getDate();
  const newMonth = todayDate.getMonth() + 1;
  const newYear = todayDate.getFullYear();
  const today = new Date(newYear, newMonth, newDay);
  const todayTime = today.getTime();
  const finalDate = sortedArr[sortedArr.length - 1].deadline;
  const finalTime = finalDate.getTime();

  timeDiff = finalTime - todayTime;
  dayDiff = Math.ceil(timeDiff / conversion) - 1;

  return dayDiff;
}

function sortHomework(arr) {
  const tempArr = collectHomework(arr);

  const timeArr = findTime(tempArr);

  const sortedArr = timeArr.toSorted(function (a, b) {
    return a - b;
  });

  return rearrangeHomework(tempArr, timeArr, sortedArr);
}

function collectHomework(arr) {
  const funcArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentArr = arr[i].homeworkArr;
    for (let n = 0; n < currentArr.length; n++) {
      currentArr[n].course = arr[i].name;
      funcArr.push(currentArr[n]);
    }
  }
  return funcArr;
}

function findTime(arr) {
  let funcArr = [];
  for (let i = 0; i < arr.length; i++) {
    funcArr.push(arr[i].deadline.getTime());
  }
  return funcArr;
}

function rearrangeHomework(arr, timed, sorted) {
  const funcArr = [];
  for (let i = 0; i < sorted.length; i++) {
    for (let n = 0; n < timed.length; n++) {
      if (sorted[i] === timed[n]) {
        const arrValue = arr[n];
        timed[n] = null;
        funcArr.push(arrValue);
      }
    }
  }
  return funcArr;
}

// --------
// Homework
// --------
function courseOnLoad() {
  generateSelectOptions1(courseArr);
  generateSelectOptions2(courseArr);
  selectCourse1();
  selectCourse2();
}

function activateCoursePage(courseName) {
  const selectIndex = courseArr.findIndex((el) => el.name === courseName);
  selectedCourse = courseArr[selectIndex];
  generateAllHomework(courseArr[selectIndex]);
  selectEl1.selectedIndex = selectIndex;
  selectEl2.selectedIndex = selectIndex;
  activatePage(coursePageMain);
}

function selectCourse1() {
  selectedCourse = courseArr[selectEl1.selectedIndex];
  selectEl2.selectedIndex = selectEl1.selectedIndex;
  generateAllHomework(selectedCourse);
}

function generateSelectOptions1(arr) {
  clearSection(selectEl1);
  for (let i = 0; i < arr.length; i++) {
    const opt = document.createElement("option");
    opt.value = arr[i].name;
    opt.innerHTML = arr[i].name;
    selectEl1.appendChild(opt);
  }
}

function selectCourse2() {
  selectedCourse = courseArr[selectEl2.selectedIndex];
  selectEl1.selectedIndex = selectEl2.selectedIndex;
  generateAllHomework(selectedCourse);
}

function generateSelectOptions2(arr) {
  clearSection(selectEl2);
  for (let i = 0; i < arr.length; i++) {
    const opt = document.createElement("option");
    opt.value = arr[i].name;
    opt.innerHTML = arr[i].name;
    selectEl2.appendChild(opt);
  }
}

function generateAllHomework(course) {
  clearSection(homeworkSection);
  const newArr = sortCourse(course.homeworkArr);
  for (let i = 0; i < newArr.length; i++) {
    generateHomework(newArr[i]);
  }
}

function clearSection(el) {
  while (el.firstChild) {
    el.firstChild.remove();
  }
}

function generateHomework(homework) {
  const aEle = document.createElement("a");

  const divEle = document.createElement("div");
  divEle.setAttribute("class", "scroll-name");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");

  p1.innerHTML = homework.title;
  p2.innerHTML = homework.desc;
  p3.innerHTML = homework.amount + " " + homework.type;
  p4.innerHTML = formatDate(homework.deadline);

  divEle.appendChild(p1);
  divEle.appendChild(p2);
  divEle.appendChild(p3);
  divEle.appendChild(p4);
  aEle.appendChild(divEle);
  homeworkSection.appendChild(aEle);
}

function CheckAddHomework() {
  const informationFilled =
    homeTitle.value != "" &&
    homeDesc.value != "" &&
    homeAmount.value != "" &&
    homeType.value != "missing" &&
    homeDate.value != "";

  if (informationFilled) {
    addHomework();
  } else if (!informationFilled) {
    alert("You have to fill in all the information");
  }
}

function addHomework() {
  const arr = selectedCourse.homeworkArr;
  const newTitle = homeTitle.value;
  const newDesc = homeDesc.value;
  const newAmount = Number(homeAmount.value);
  const newType = homeType.value;
  const loadedDate = new Date(homeDate.value);
  const newDay = loadedDate.getDate();
  const newMonth = loadedDate.getMonth() + 1;
  const newYear = loadedDate.getFullYear();
  const newDate = new Date(newYear, newMonth, newDay);

  const newHomework = {
    title: newTitle,
    desc: newDesc,
    amount: newAmount,
    type: newType,
    deadline: newDate,
  };
  arr.push(newHomework);
  console.log(arr);
  generateAllHomework(selectedCourse);
  addHomeworkClear();
  activatePage(coursePageMain);
}

function addHomeworkClear() {
  homeTitle.value = "";
  homeDesc.value = "";
  homeAmount.value = "";
  homeType.selectedIndex = 0;
  homeDate.value = "";
}

function formatDate(date) {
  const newDay = date.getDate();
  const newMonth = date.getMonth();
  const newYear = date.getFullYear();
  const newDate = `${newDay} / ${newMonth} - ${newYear}`;
  return newDate;
}

function sortCourse(arr) {
  const timeArr = findTime(arr);

  const sortedArr = timeArr.toSorted(function (a, b) {
    return a - b;
  });

  return rearrangeHomework(arr, timeArr, sortedArr);
}

// -------
// Profile
// -------
function showUsername() {
  const username = document.getElementById("prof-username");
  username.innerHTML = profileArr[0].name;
}

function loadWPM() {
  const profileWPM = profileArr[0].wpm;

  wpmEl.innerHTML = profileWPM;
}

function storeTimeSchedule() {
  const profileTime = profileArr[0].timeSchedule;

  profileTime.mon = monTime.value;
  profileTime.tue = tueTime.value;
  profileTime.wed = wedTime.value;
  profileTime.thu = thuTime.value;
  profileTime.fri = friTime.value;
  profileTime.sat = satTime.value;
  profileTime.sun = sunTime.value;

  monTime.value = "";
  tueTime.value = "";
  wedTime.value = "";
  thuTime.value = "";
  friTime.value = "";
  satTime.value = "";
  sunTime.value = "";

  loadTimeSchedule();
}

function loadTimeSchedule() {
  const profileTime = profileArr[0].timeSchedule;

  monTime.placeholder = profileTime.mon;
  tueTime.placeholder = profileTime.tue;
  wedTime.placeholder = profileTime.wed;
  thuTime.placeholder = profileTime.thu;
  friTime.placeholder = profileTime.fri;
  satTime.placeholder = profileTime.sat;
  sunTime.placeholder = profileTime.sun;
}

function CheckSchedule() {
  const scheduleFilled =
    monTime.value != "" &&
    tueTime.value != "" &&
    wedTime.value != "" &&
    thuTime.value != "" &&
    friTime.value != "" &&
    satTime.value != "" &&
    sunTime.value != "";

  if (scheduleFilled) {
    scheduleConfirm.innerText = "Schedule successfully filled";
    storeTimeSchedule();
  } else if (!scheduleFilled) {
    scheduleConfirm.innerText = "Please fill out all fields";
  }
}
