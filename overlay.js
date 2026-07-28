
// CSC Broadcast Overlay V5

let goalVisible = false;

function loadScoreboard() {

    const data = JSON.parse(localStorage.getItem("scoreboard"));

    if (!data) return;

    // Competition Title
    document.getElementById("competitionTitle").textContent =
        data.competition || "CSC PREMIER LEAGUE";

    // Teams
    document.getElementById("homeTeam").textContent =
        data.homeTeam || "HOME";

    document.getElementById("awayTeam").textContent =
        data.awayTeam || "AWAY";

    // Score
    document.getElementById("homeScore").textContent =
        data.homeScore ?? 0;

    document.getElementById("awayScore").textContent =
        data.awayScore ?? 0;

    // Timer
    document.getElementById("timer").textContent =
        data.timer || "00:00";

    // Match Status
    document.getElementById("matchStatus").textContent =
        data.status || "1ST HALF";

    // Goal Banner
    const goalBanner = document.getElementById("goalBanner");

    if (data.goal === true && !goalVisible) {

        goalVisible = true;

        goalBanner.style.display = "block";
        goalBanner.style.opacity = "1";

    }

    if (data.goal === false && goalVisible) {

        goalVisible = false;

        goalBanner.style.opacity = "0";

        setTimeout(() => {
            goalBanner.style.display = "none";
        }, 300);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    const goalBanner = document.getElementById("goalBanner");

    goalBanner.style.display = "none";
    goalBanner.style.opacity = "0";
    goalBanner.style.transition = "opacity .3s ease";

    loadScoreboard();

    setInterval(loadScoreboard, 100);

});
