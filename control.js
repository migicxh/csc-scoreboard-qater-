
// CSC Scoreboard Control V4

let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || {
    competition: "CSC PREMIER LEAGUE",
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

// Save to localStorage
function save() {
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}

// Timer
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

// Competition
window.updateCompetition = function () {
    scoreboard.competition =
        document.getElementById("competition").value || "CSC PREMIER LEAGUE";
    save();
};

// Teams
window.updateTeams = function () {
    scoreboard.homeTeam =
        document.getElementById("homeTeam").value || "HOME";

    scoreboard.awayTeam =
        document.getElementById("awayTeam").value || "AWAY";

    save();
};

// Score
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

// Match Status
window.setStatus = function(status) {
    scoreboard.status = status;
    save();
};

// Goal Animation
window.showGoal = function () {
    scoreboard.goal = true;
    save();

    setTimeout(() => {
        scoreboard.goal = false;
        save();
    }, 3000);
};

// Initialize
save();
