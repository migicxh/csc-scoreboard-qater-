
// ===============================
// VRFS WORLD CUP OVERLAY
// Complete Replacement - overlay.js
// ===============================

let goalVisible = false;

function loadScoreboard() {

    const data = JSON.parse(localStorage.getItem("scoreboard"));

    if (!data) return;

    // Tournament
    document.getElementById("competitionTitle").textContent =
        data.competition || "VRFS WORLD CUP";

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

    // Added Time
    const addedTime = document.getElementById("addedTime");

    if (addedTime) {
        addedTime.textContent = data.addedTime || "+0";
    }

    // Team Logos (future support)
    const homeLogo = document.getElementById("homeLogo");
    const awayLogo = document.getElementById("awayLogo");

    if (homeLogo && data.homeLogo) {
        homeLogo.src = data.homeLogo;
    }

    if (awayLogo && data.awayLogo) {
        awayLogo.src = data.awayLogo;
    }

    // Tournament Logo (future support)
    const vrfsLogo = document.getElementById("vrfsLogo");

    if (vrfsLogo && data.tournamentLogo) {
        vrfsLogo.src = data.tournamentLogo;
    }

    // Goal Banner
    const goalBanner = document.getElementById("goalBanner");

    if (goalBanner) {

        if (data.goal === true && !goalVisible) {

            goalVisible = true;

            goalBanner.style.display = "block";

            requestAnimationFrame(() => {
                goalBanner.style.opacity = "1";
                goalBanner.style.transform =
                    "translateX(-50%) translateY(0)";
            });

        }

        if (data.goal === false && goalVisible) {

            goalVisible = false;

            goalBanner.style.opacity = "0";
            goalBanner.style.transform =
                "translateX(-50%) translateY(-20px)";

            setTimeout(() => {
                goalBanner.style.display = "none";
            }, 300);

        }

    }

}

document.addEventListener("DOMContentLoaded", () => {

    const goalBanner = document.getElementById("goalBanner");

    if (goalBanner) {

        goalBanner.style.display = "none";
        goalBanner.style.opacity = "0";
        goalBanner.style.transform =
            "translateX(-50%) translateY(-20px)";
        goalBanner.style.transition =
            "opacity .3s ease, transform .3s ease";

    }

    loadScoreboard();

    setInterval(loadScoreboard, 100);

});
