
// ===============================
// VRFS WORLD CUP CONTROL
// control.js
// ===============================

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

function save(){

    localStorage.setItem(
        "scoreboard",
        JSON.stringify(scoreboard)
    );

}

function updateCompetition(){

    const input =
        document.getElementById("competition");

    if(input){

        scoreboard.competition = input.value;

        save();

    }

}

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

function homePlus(){

    scoreboard.homeScore++;

    save();

}

function homeMinus(){

    if(scoreboard.homeScore>0)
        scoreboard.homeScore--;

    save();

}

function awayPlus(){

    scoreboard.awayScore++;

    save();

}

function awayMinus(){

    if(scoreboard.awayScore>0)
        scoreboard.awayScore--;

    save();

}

function setStatus(status){

    scoreboard.status = status;

    save();

}

function showGoal(){

    scoreboard.goal = true;

    save();

    setTimeout(()=>{

        scoreboard.goal = false;

        save();

    },3000);

}

window.onload=()=>{

    save();

};
