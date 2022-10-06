const strikeButton=document.getElementById('strike');
const resetButton=document.getElementById('reset');
const $team1Score=document.getElementById('score-team1');
const $team1Wickets=document.getElementById('wickets-team1');
const $team2score=document.getElementById('score-team2');
const $team2Wickets=document.getElementById('wickets-team2')

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");
const possibleOutcomes=[0,1,2,3,4,5,6,'W'];

var team1Score=0;
var team1Wickets=0;
var team2score=0;
var team2Wickets=0;
var team1BallsFaced=0;
var team2BallsFaced=0;
var turn=1;
async function gameOver(){
    gameOverAudio.play();
    if(team1Score>team2score){
    alert('India Wins');}
    if(team2score>team1Score){
    alert('Pakistan Wins');}
    if(team1Score===team2score){
    alert('Play Again');}


}

async function updatescore(){
    $team1Score.textContent=team1Score;
    $team1Wickets.textContent=team1Wickets;
    $team2score.textContent=team2score;
    $team2Wickets.textContent=team2Wickets;

}

resetButton.onclick=()=>{
    window.location.reload();
};
strikeButton.onclick=async ()=>{
    strikeAudio.pause();
    strikeAudio.currentTime;
    strikeAudio.play();
    const randomElement=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]


if(turn===2)
{
    team2BallsFaced++;
    document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`).textContent=randomElement;
    console.log(randomElement);
    if(randomElement==='W'){
        team2Wickets++;
    }
    else{
        team2score+=randomElement;
    }
    if(team2BallsFaced===6 || team2Wickets===2 || team2score>team1Score){
        document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`).textContent=randomElement;
        turn=3;
    }

    }
if(turn===1)
{
    team1BallsFaced++;
    document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`).textContent=randomElement;
    if(randomElement==='W'){
        team1Wickets++;
    }
    else{
        team1Score+=randomElement;
    }
    if(team1BallsFaced===6 || team1Wickets===2 ){
        turn=2;
    }
    
    

}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
updatescore();

    if(turn===3){
        await sleep(500);
    gameOver();}
}