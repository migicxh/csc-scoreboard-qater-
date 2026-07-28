
// CSC Scoreboard Overlay V3

let goalShowing = false;

function loadScoreboard() {

    const data = JSON.parse(localStorage.getItem("scoreboard"));

    if (!data) return;

    document.getElementById("homeTeam").textContent = data.homeTeam || "HOME";
    document.getElementById("awayTeam").textContent = data.awayTeam || "AWAY";

    document.getElementById("homeScore").textContent = data.homeScore ?? 0;
    document.getElementById("awayScore").textContent = data.awayScore ?? 0;

    document.getElementById("timer").textContent = data.timer || "00:00";

    document.getElementById("matchStatus").textContent = data.status || "1ST HALF";

    const banner = document.getElementById("goalBanner");

    if (data.goal && !goalShowing) {
        goalShowing = true;
        banner.style.display = "block";
        banner.style.opacity = "1";
    }

    if (!data.goal && goalShowing) {
        goalShowing = false;
        banner.style.opacity = "0";

        setTimeout(() => {
            banner.style.display = "none";
        }, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("goalBanner");

    banner.style.display = "none";
    banner.style.opacity = "0";
    banner.style.transition = "opacity 0.3s ease";

    loadScoreboard();

    setInterval(loadScoreboard, 100);

});
