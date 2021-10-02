const dataArray = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let timeframe = dataArray.timeframe;

var daily_btn = document.getElementById("daily1");
var weekly_btn = document.getElementById("weekly");
var monthly_btn = document.getElementById("monthly");

var work_time = document.getElementById("work-time");
var last_work = document.getElementById("work-last-week");
var play_time = document.getElementById("play-time");
var last_play = document.getElementById("play-last-week");
var study_time = document.getElementById("study-time");
var last_study = document.getElementById("study-last-week");
var exercise_time = document.getElementById("exercise-time");
var last_exercise = document.getElementById("exercise-last-week");
var social_time = document.getElementById("social-time");
var last_social = document.getElementById("social-last-week");
var selfcare_time = document.getElementById("selfcare-time");
var last_selfcare = document.getElementById("selfcare-last-week");

daily_btn.addEventListener("click", dailyFunct);

function dailyFunct() {
  daily_btn.classList.add("active");

  weekly_btn.classList.remove("active");
  monthly_btn.classList.remove("active");

  var workCurrent = dataArray[0].timeframes.daily.current;
  var workPrevious = dataArray[0].timeframes.daily.previous;

  work_time.textContent = `${workCurrent + "hrs"}`;
  last_work.textContent = `Yesterday - ${workPrevious}hrs`;

  var playCurrent = dataArray[1].timeframes.daily.current;
  var playPrevious = dataArray[1].timeframes.daily.previous;

  play_time.textContent = `${playCurrent + "hrs"}`;
  last_play.textContent = `Yesterday - ${playPrevious}hrs`;

  var studyCurrent = dataArray[2].timeframes.daily.current;
  var studyPrevious = dataArray[2].timeframes.daily.previous;

  study_time.textContent = `${studyCurrent + "hrs"}`;
  last_study.textContent = `Yesterday - ${studyPrevious}hrs`;

  var exerciseCurrent = dataArray[3].timeframes.daily.current;
  var exercisePrevious = dataArray[3].timeframes.daily.previous;

  exercise_time.textContent = `${exerciseCurrent + "hrs"}`;
  last_exercise.textContent = `Yesterday - ${exercisePrevious}hrs`;

  var socialCurrent = dataArray[4].timeframes.daily.current;
  var socialPrevious = dataArray[4].timeframes.daily.previous;

  social_time.textContent = `${socialCurrent + "hrs"}`;
  last_social.textContent = `Yesterday - ${socialPrevious}hrs`;

  var selfcareCurrent = dataArray[5].timeframes.daily.current;
  var selfcarePrevious = dataArray[5].timeframes.daily.previous;

  selfcare_time.textContent = `${selfcareCurrent + "hrs"}`;
  last_selfcare.textContent = `Yesterday - ${selfcarePrevious}hrs`;
}

weekly_btn.addEventListener("click", weeklyFunct);

function weeklyFunct() {
  weekly_btn.classList.add("active");
  monthly_btn.classList.remove("active");
  daily_btn.classList.remove("active");

  var workCurrent = dataArray[0].timeframes.weekly.current;
  var workPrevious = dataArray[0].timeframes.weekly.previous;

  work_time.textContent = `${workCurrent + "hrs"}`;
  last_work.textContent = `Last Week - ${workPrevious}hrs`;

  var playCurrent = dataArray[1].timeframes.weekly.current;
  var playPrevious = dataArray[1].timeframes.weekly.previous;

  play_time.textContent = `${playCurrent + "hrs"}`;
  last_play.textContent = `Last Week - ${playPrevious}hrs`;

  var studyCurrent = dataArray[2].timeframes.weekly.current;
  var studyPrevious = dataArray[2].timeframes.weekly.previous;

  study_time.textContent = `${studyCurrent + "hrs"}`;
  last_study.textContent = `Last Week - ${studyPrevious}hrs`;

  var exerciseCurrent = dataArray[3].timeframes.weekly.current;
  var exercisePrevious = dataArray[3].timeframes.weekly.previous;

  exercise_time.textContent = `${exerciseCurrent + "hrs"}`;
  last_exercise.textContent = `Last Week - ${exercisePrevious}hrs`;

  var socialCurrent = dataArray[4].timeframes.weekly.current;
  var socialPrevious = dataArray[4].timeframes.weekly.previous;

  social_time.textContent = `${socialCurrent + "hrs"}`;
  last_social.textContent = `Last Week - ${socialPrevious}hrs`;

  var selfcareCurrent = dataArray[5].timeframes.weekly.current;
  var selfcarePrevious = dataArray[5].timeframes.weekly.previous;

  selfcare_time.textContent = `${selfcareCurrent + "hrs"}`;
  last_selfcare.textContent = `Last Week - ${selfcarePrevious}hrs`;
}

monthly_btn.addEventListener("click", monthlyFunct);

function monthlyFunct() {
  monthly_btn.classList.add("active");
  daily_btn.classList.remove("active");
  weekly_btn.classList.remove("active");

  var workCurrent = dataArray[0].timeframes.monthly.current;
  var workPrevious = dataArray[0].timeframes.monthly.previous;

  work_time.textContent = `${workCurrent + "hrs"}`;
  last_work.textContent = `Last Month - ${workPrevious}hrs`;

  var playCurrent = dataArray[1].timeframes.monthly.current;
  var playPrevious = dataArray[1].timeframes.monthly.previous;

  play_time.textContent = `${playCurrent + "hrs"}`;
  last_play.textContent = `Last Month - ${playPrevious}hrs`;

  var studyCurrent = dataArray[2].timeframes.monthly.current;
  var studyPrevious = dataArray[2].timeframes.monthly.previous;

  study_time.textContent = `${studyCurrent + "hrs"}`;
  last_study.textContent = `Last Month - ${studyPrevious}hrs`;

  var exerciseCurrent = dataArray[3].timeframes.monthly.current;
  var exercisePrevious = dataArray[3].timeframes.monthly.previous;

  exercise_time.textContent = `${exerciseCurrent + "hrs"}`;
  last_exercise.textContent = `Last Month - ${exercisePrevious}hrs`;

  var socialCurrent = dataArray[4].timeframes.monthly.current;
  var socialPrevious = dataArray[4].timeframes.monthly.previous;

  social_time.textContent = `${socialCurrent + "hrs"}`;
  last_social.textContent = `Last Month - ${socialPrevious}hrs`;

  var selfcareCurrent = dataArray[5].timeframes.monthly.current;
  var selfcarePrevious = dataArray[5].timeframes.monthly.previous;

  selfcare_time.textContent = `${selfcareCurrent + "hrs"}`;
  last_selfcare.textContent = `Last Month - ${selfcarePrevious}hrs`;
}
