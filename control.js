
// ========================================
// VRFS WORLD CUP CONTROL
// Complete control.js
// ========================================

let timerInterval = null;
let seconds = 0;

let scoreboard = JSON.parse(localStorage.getItem("scoreboard"));

if (!scoreboard) {

    scoreboard = {
        competition: "VRFS WORLD CUP",

        homeTeam: "HOME",
        awayTeam: "AWAY",

        homeScore: 0,
        awayScore: 0,

        timer: "00:00",
        status: "1ST HALF",

        addedTime: "",

        goal: false,

        tournamentLogo: "",
        homeLogo: "",
        awayLogo: ""
    };

}

if (scoreboard.timer) {

    let parts = scoreboard.timer.split(":");

    if (parts.length === 2) {

        seconds =
            (parseInt(parts[0]) * 60) +
            parseInt(parts[1]);

    }

}

function save() {

    localStorage.setItem(
        "scoreboard",
        JSON.stringify(scoreboard)
    );

}

function updateDisplayTime() {

    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    scoreboard.timer =
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0");

    save();

}

// ========================
// TIMER
// ========================

function startTimer() {

    if (timerInterval) return;

    timerInterval = setInterval(function () {

        seconds++;

        updateDisplayTime();

    }, 1000);

}

function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

}

function resetTimer() {

    pauseTimer();

    seconds = 0;

    updateDisplayTime();

}

// ========================
// COMPETITION
// ========================

function updateCompetition() {

    scoreboard.competition =
        document.getElementById("competition").value;

    save();

}

// ========================
// TEAMS
// ========================

function updateTeams() {

    scoreboard.homeTeam =
        document.getElementById("homeTeam").value;

    scoreboard.awayTeam =
        document.getElementById("awayTeam").value;

    save();

}

// ========================
// SCORES
// ========================

function homePlus() {

    scoreboard.homeScore++;

    save();

}

function homeMinus() {

    if (scoreboard.homeScore > 0)
        scoreboard.homeScore--;

    save();

}

function awayPlus() {

    scoreboard.awayScore++;

    save();

}

function awayMinus() {

    if (scoreboard.awayScore > 0)
        scoreboard.awayScore--;

    save();

}

// ========================
// MATCH STATUS
// ========================

function setStatus(status) {

    scoreboard.status = status;

    save();

}

// ========================
// GOAL
// ========================

function showGoal() {

    scoreboard.goal = true;

    save();

    setTimeout(function () {

        scoreboard.goal = false;

        save();

    }, 3000);

}

// ========================
// ADDED TIME
// ========================

function updateAddedTime() {

    const input = document.getElementById("addedTime");

    if (input) {

        scoreboard.addedTime = input.value;

        save();

    }

}

// ========================
// LOGOS
// ========================

function updateTournamentLogo() {

    const input = document.getElementById("tournamentLogo");

    if (input) {

        scoreboard.tournamentLogo = input.value;

        save();

    }

}

function updateHomeLogo() {

    const input = document.getElementById("homeLogo");

    if (input) {

        scoreboard.homeLogo = input.value;

        save();

    }

}

function updateAwayLogo() {

    const input = document.getElementById("awayLogo");

    if (input) {

        scoreboard.awayLogo = input.value;

        save();

    }

}

// ========================

window.onload = function () {

    updateDisplayTime();

    save();

};
