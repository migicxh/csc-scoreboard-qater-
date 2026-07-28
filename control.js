
// CSC Scoreboard Control V3

let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || {
    homeTeam: "HOME",
    awayTeam: "AWAY",
    homeScore: 0,
    awayScore: 0,
    timer: "00:00",
    status: "1ST HALF",
    goal: false
};

let seconds = 0;
let timerRunning = false;
let timerInterval = null;

function save() {
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}

function updateTimer() {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    scoreboard.timer = `${mins}:${secs}`;
    save();
}

window.startTimer = function () {
    if (timerRunning) return;

    timerRunning = true;

    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
};

window.pauseTimer = function () {
    timerRunning = false;
    clearInterval(timerInterval);
};

window.resetTimer = function () {
    timerRunning = false;
    clearInterval(timerInterval);

    seconds = 0;
    updateTimer();
};

window.updateTeams = function () {
    scoreboard.homeTeam = document.getElementById("homeTeam").value || "HOME";
    scoreboard.awayTeam = document.getElementById("awayTeam").value || "AWAY";
    save();
};

window.homePlus = function () {
    scoreboard.homeScore++;
    save();
};

window.homeMinus = function () {
    if (scoreboard.homeScore > 0) scoreboard.homeScore--;
    save();
};

window.awayPlus = function () {
    scoreboard.awayScore++;
    save();
};

window.awayMinus = function () {
    if (scoreboard.awayScore > 0) scoreboard.awayScore--;
    save();
};

window.setStatus = function(status) {
    scoreboard.status = status;
    save();
};

window.showGoal = function () {
    scoreboard.goal = true;
    save();

    setTimeout(() => {
        scoreboard.goal = false;
        save();
    }, 3000);
};

save();
