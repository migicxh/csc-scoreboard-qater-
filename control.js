
// ===============================
// VRFS WORLD CUP CONTROL
// control.js
// ===============================

let timerInterval = null;
let seconds = 0;

let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || {

    competition: "VRFS WORLD CUP",

    homeTeam: "HOME",
    awayTeam: "AWAY",

    homeScore: 0,
    awayScore: 0,

    timer: "00:00",

    status: "1ST HALF",

    addedTime: "+0",

    goal: false,

    tournamentLogo: "vrfs-logo.png",

    homeLogo: "vrfs-logo.png",

    awayLogo: "vrfs-logo.png"

};

// Restore timer if it already has a value
if (scoreboard.timer) {

    const parts = scoreboard.timer.split(":");

    if (parts.length === 2) {

        seconds =
            (parseInt(parts[0]) || 0) * 60 +
            (parseInt(parts[1]) || 0);

    }

}

function save(){

    localStorage.setItem(
        "scoreboard",
        JSON.stringify(scoreboard)
    );

}

function formatTime(){

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    scoreboard.timer =
        String(mins).padStart(2,"0") +
        ":" +
        String(secs).padStart(2,"0");

    save();

}

// ===================
// TIMER
// ===================

function startTimer(){

    if(timerInterval) return;

    timerInterval = setInterval(()=>{

        seconds++;

        formatTime();

    },1000);

}

function pauseTimer(){

    clearInterval(timerInterval);

    timerInterval = null;

}

function resetTimer(){

    pauseTimer();

    seconds = 0;

    formatTime();

}

// ===================
// COMPETITION
// ===================

function updateCompetition(){

    const input =
        document.getElementById("competition");

    if(input){

        scoreboard.competition = input.value;

        save();

    }

}

// ===================
// TEAMS
// ===================

function updateTeams(){

    const home =
        document.getElementById("homeTeam");

    const away =
        document.getElementById("awayTeam");

    if(home)
        scoreboard.homeTeam = home.value;

    if(away)
        scoreboard.awayTeam = away.value;

    save();

}

// ===================
// HOME SCORE
// ===================

function homePlus(){

    scoreboard.homeScore++;

    save();

}

function homeMinus(){

    if(scoreboard.homeScore>0)
        scoreboard.homeScore--;

    save();

}

// ===================
// AWAY SCORE
// ===================

function awayPlus(){

    scoreboard.awayScore++;

    save();

}

function awayMinus(){

    if(scoreboard.awayScore>0)
        scoreboard.awayScore--;

    save();

}

// ===================
// MATCH STATUS
// ===================

function setStatus(status){

    scoreboard.status = status;

    save();

}

// ===================
// GOAL
// ===================

function showGoal(){

    scoreboard.goal = true;

    save();

    setTimeout(()=>{

        scoreboard.goal = false;

        save();

    },3000);

}

// ===================

window.onload=()=>{

    formatTime();

    save();

};
