
// CSC Scoreboard Overlay V1

function loadScoreboard() {

    const data = JSON.parse(localStorage.getItem("scoreboard"));

    if (!data) return;

    document.getElementById("homeTeam").textContent = data.homeTeam || "HOME";
    document.getElementById("awayTeam").textContent = data.awayTeam || "AWAY";

    document.getElementById("homeScore").textContent = data.homeScore || 0;
    document.getElementById("awayScore").textContent = data.awayScore || 0;

    document.getElementById("timer").textContent = data.timer || "00:00";

    document.getElementById("matchStatus").textContent = data.status || "1ST HALF";

}

document.addEventListener("DOMContentLoaded", () => {

    loadScoreboard();

    setInterval(loadScoreboard, 100);

});
