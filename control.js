
// CSC Scoreboard Control V1

let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || {
    homeTeam: "HOME",
    awayTeam: "AWAY",
    homeScore: 0,
    awayScore: 0,
    timer: "00:00",
    status: "1ST HALF"
};

function updateDisplay() {
    document.getElementById("homeScore").textContent = scoreboard.homeScore;
    document.getElementById("awayScore").textContent = scoreboard.awayScore;
}

function save() {
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    updateDisplay();
}

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
    if (scoreboard.homeScore > 0) {
        scoreboard.homeScore--;
    }
    save();
};

window.awayPlus = function () {
    scoreboard.awayScore++;
    save();
};

window.awayMinus = function () {
    if (scoreboard.awayScore > 0) {
        scoreboard.awayScore--;
    }
    save();
};

window.setStatus = function(status) {
    scoreboard.status = status;
    save();
};

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});
