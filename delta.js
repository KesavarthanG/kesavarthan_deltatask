
const initialTime = 5 * 60; // 5 minutes in seconds
let blueTime = initialTime;
let redTime = initialTime;
let currentPlayer = 'blue';
let timerInterval;
let isGameOver = false;
let isPaused = false;
let remainingTime = initialTime;

const timerBlueElement = document.getElementById('timer_blue');
const timerRedElement = document.getElementById('timer_red');

function updateTimer() {
    if (isGameOver) return;

    if (currentPlayer === 'blue') {
        blueTime--;
        if (blueTime <= 0) {
            alert('Red wins!');
            isGameOver = true;
            clearInterval(timerInterval);
        }
    } else {
        redTime--;
        if (redTime <= 0) {
            alert('Blue wins!');
            isGameOver = true;
            clearInterval(timerInterval);
        }
    }
    

    timerBlueElement.innerHTML = `<span style="color:blue;
    font-weight: bold;
    font-family: "Roboto Mono";">Blue: <span style="color:black;">${formatTime(blueTime)}</span></span>`;
    timerRedElement.innerHTML = `<span style="color:red;
    font-weight: bold;
    font-family: "Roboto Mono";">Red: <span style="color:black;">${formatTime(redTime)}</span></span>`;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}



function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}
function pauseTimer() {
    removeEventListenersForPlayer(currentPlayer);
    const gr=document.querySelectorAll('.highlight');
   
    if(gr){
        console.log("confirm");
        gr.forEach(sq=>
        {
        leftButton.removeEventListener('click',change_blue);
        rightButton.removeEventListener('click',change_blue);
        leftButton.removeEventListener('click',rot_left);
        rightButton.removeEventListener('click',rot_right);
        sq.removeEventListener('click', frustration_semi_r);
        sq.removeEventListener('click', frustration_semi_b);
        sq.removeEventListener('click',frustration_tank_opp);
        sq.removeEventListener('click',frustration_red);
        sq.removeEventListener('click', frustration_canon_r)
        sq.removeEventListener('click',frustration_rich_red);
        sq.removeEventListener('click',frustration_tank_side);
        sq.removeEventListener('click',frustration);
        sq.removeEventListener('click',frustration_rich_blue);
        sq.removeEventListener('click', frustration_canon_b);
        });
    }
    removeHighlights();
    clearInterval(timerInterval);
    isPaused = true;
    remainingTime = currentPlayer === 'blue' ? blueTime : redTime;
}

function resumeTimer() {
    if(isPaused){
        addEventListenersForPlayer(currentPlayer);
        currentPlayer === 'blue' ? blueTime = remainingTime : redTime = remainingTime;
        startTimer();
        isPaused = false;
    }
}/*
*/

playButton.addEventListener('click', function() {
    if (isGameOver) {
        // Reset the game state
        blueTime = initialTime;
        redTime = initialTime;
        currentPlayer = 'blue';
        isGameOver = false;
    }
    if(currentPlayer==="blue"){
        document.querySelector('.turn').innerHTML=` <strong>Turn:</strong><span style="color:blue;
        font-family:Roboto Mono;
        font-weight:bold;
        text-transform: uppercase;">${currentPlayer}</span>`;
    }
    else{
        document.querySelector('.turn').innerHTML=` <strong>Turn:</strong><span style="color:red; 
        font-weight:bold;
        text-transform: uppercase;
        ">${currentPlayer}</span>`;
    }
    isPaused=false;
    startTimer();
    addEventListenersForPlayer(currentPlayer);
});
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
function resetGame() {
    location.reload();
}
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);



let i=0;
let text='';
for(i=0;i<64;i++){
    text=text+`<div class="square sq${i}"></div>`;
}
let firstrow_canonindex;
let lastrow_canonindex;
document.querySelector('.board').innerHTML=text;
document.querySelector('.mo').innerHTML=`<button class="leftButton button-dir">LEFT</button>
<button class="rightButton button-dir">RIGHT</button>`;
firstrow_canonindex=Math.floor(Math.random()*8);
lastrow_canonindex=Math.floor(Math.random()*8)+56;
let canon_red=document.querySelector('.'+`sq${firstrow_canonindex}`);
let canon_blue=document.querySelector('.'+`sq${lastrow_canonindex}`);
canon_red.classList.add('canon');
canon_red.innerHTML="Canon";
canon_blue.classList.add('canon');
canon_blue.innerHTML="Canon";
function clickgreen_canon_red(pieceindex){
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_red);
            rightButton.removeEventListener('click',change_red);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_r);
            green.removeEventListener('click',frustration_rich_red);
            green.removeEventListener('click',frustration_tank_opp);
            green.removeEventListener('click',frustration_red);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
 
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click', frustration_semi_r);
        green.removeEventListener('click', frustration_semi_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click', frustration_canon_b);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click',frustration_rich_red);
        green.addEventListener('click', frustration_canon_r);
    });

}
function clickgreen_canon_blue(pieceindex){
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_blue);
            rightButton.removeEventListener('click',change_blue);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_b);
            green.removeEventListener('click',frustration);
            green.removeEventListener('click',frustration_tank_side);
            green.removeEventListener('click',frustration_rich_blue);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
 
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click', frustration_semi_r);
        green.removeEventListener('click', frustration_semi_b);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click', frustration_canon_r)
        green.removeEventListener('click',frustration_rich_red);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click',frustration_rich_blue);
        green.addEventListener('click', frustration_canon_b);
    });

}
function removeEventListeners_r_canon(){
    if (old_position) {
        old_position.removeEventListener('click', canon_r);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_canon_r);
        });
    }
}
function removeEventListeners_b_canon(){

    if (old_position) {
        old_position.removeEventListener('click', canon_b);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_canon_b);
        });
    }
}
function frustration_canon_r(event){

    firstrow_canonindex = parseInt(event.currentTarget.classList[1].slice(2));
    canon_red = document.querySelector('.sq' +firstrow_canonindex);
    canon_red.classList.add(`${old_position.classList[2]}`);
    canon_red.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_r_canon();
    removeHighlights();
    shootBullet_red();
}
function frustration_canon_b(event){

    lastrow_canonindex = parseInt(event.currentTarget.classList[1].slice(2));
    canon_blue = document.querySelector('.sq' +lastrow_canonindex);
    canon_blue.classList.add(`${old_position.classList[2]}`);
    canon_blue.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_b_canon();
    removeHighlights();
    shootBullet_blue();
}

function canon_r(){
    if(!isPaused){
        check_r=0;
        showValidMoves_canon(firstrow_canonindex);
        clickgreen_canon_red(firstrow_canonindex);
    }
   
}
function canon_b(){
    if(!isPaused){
        check_b=0;
    showValidMoves_canon(lastrow_canonindex);
    clickgreen_canon_blue(lastrow_canonindex);
    }
    
}
let tankOpponentIndex;
let tankmySideIndex;
// Ensure tank indices are not the same as canon indices
do {
    tankOpponentIndex = Math.floor(Math.random() * 32); // 0-31
} while (tankOpponentIndex === firstrow_canonindex|| tankOpponentIndex === lastrow_canonindex);

do {
    tankmySideIndex = Math.floor(Math.random() * 32) + 32; // 32-63
} while (tankmySideIndex === firstrow_canonindex || tankmySideIndex === lastrow_canonindex);

// Select the squares for Tanks
let tankOpponent = document.querySelector('.sq' + tankOpponentIndex);
let tankmySide = document.querySelector('.sq' + tankmySideIndex);

tankOpponent.classList.add('tank_opponent');
tankOpponent.textContent = "Tank";
tankmySide.classList.add('tank_myside');
tankmySide.textContent = "Tank";

function clickgreen_tank_opp(pieceindex) {
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_red);
            rightButton.removeEventListener('click',change_red);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_r);
            green.removeEventListener('click',frustration_rich_red);
            green.removeEventListener('click',frustration_canon_r);
            green.removeEventListener('click',frustration_red);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
 
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click', frustration_semi_b);
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_rich_red);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click', frustration_tank_side);
        green.removeEventListener('click', frustration_semi_r);
        green.addEventListener('click', frustration_tank_opp);
    });
}
function clickgreen_tank_side(pieceindex) {
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_blue);
            rightButton.removeEventListener('click',change_blue);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_b);
            green.removeEventListener('click',frustration_canon_b);
            green.removeEventListener('click',frustration);
            green.removeEventListener('click',frustration_rich_blue);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
 
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_rich_red);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click', frustration_semi_r);
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click', frustration_tank_opp);
        green.removeEventListener('click', frustration_semi_b);
        green.addEventListener('click', frustration_tank_side);
     
    });
}
function frustration_tank_opp(event) {
    tankOpponentIndex = parseInt(event.currentTarget.classList[1].slice(2));
    tankOpponent = document.querySelector('.sq' +tankOpponentIndex);
    tankOpponent.classList.add(`${old_position.classList[2]}`);
    tankOpponent.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    
    removeEventListeners_tank_opp();
    removeHighlights();
    shootBullet_red();
}
function frustration_tank_side(event) {
    tankmySideIndex = parseInt(event.currentTarget.classList[1].slice(2));
    tankmySide = document.querySelector('.sq' + tankmySideIndex);
    tankmySide.classList.add(`${old_position.classList[2]}`);
    tankmySide.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_tank_side();
    removeHighlights();
    shootBullet_blue();
}
function removeEventListeners_tank_opp() {
    if (old_position) {
        old_position.removeEventListener('click', tank_opp);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_tank_opp);
        });
    }
}
function removeEventListeners_tank_side() {
    if (old_position) {
        old_position.removeEventListener('click', tank_side);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_tank_side);
        });
    }
}
function tank_opp(){
    if(!isPaused){
        check_r=0;
    showValidMoves(tankOpponentIndex);
    clickgreen_tank_opp(tankOpponentIndex);
    }
    
}
function tank_side(){
    if(!isPaused){
        check_b=0;
    showValidMoves(tankmySideIndex);
    clickgreen_tank_side(tankmySideIndex);
    }
    
}
let titan_myside;
let titan_opponent;
do {
    titan_opponent = Math.floor(Math.random() * 16); // 0-16
} while (titan_opponent === firstrow_canonindex|| titan_opponent === lastrow_canonindex||titan_opponent%8===lastrow_canonindex%8||titan_opponent===tankOpponentIndex||titan_opponent%8-1===lastrow_canonindex%8||titan_opponent%8+1===lastrow_canonindex%8);
do {
    titan_myside = Math.floor(Math.random() * 16) + 48; // 48-63
} while (titan_myside === firstrow_canonindex || titan_myside === lastrow_canonindex||titan_myside%8===firstrow_canonindex%8||titan_myside===tankmySideIndex||titan_myside%8+1===firstrow_canonindex%8||titan_myside%8-1===firstrow_canonindex%8);
let titan_blue = document.querySelector('.sq' + titan_myside);
let titan_red = document.querySelector('.sq' + titan_opponent);
titan_blue.classList.add('titan_blue');
titan_blue.innerHTML = "Titan";
titan_red.classList.add('titan_red');
titan_red.innerHTML = "Titan";
let new_titan;
let old_position;
let greens;
function removeEventListeners() {
    if (old_position) {
        old_position.removeEventListener('click', baba_titan);
    }
    if (greens) {
        console.log("yes");
        greens.forEach(green => {
            green.removeEventListener('click', frustration);
        });
    }
}
function frustration(event) {
    titan_myside = parseInt(event.currentTarget.classList[1].slice(2));
    titan_blue = document.querySelector('.sq' + titan_myside);
    titan_blue.classList.add(`${old_position.classList[2]}`);
    titan_blue.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners();
    removeHighlights();
    shootBullet_blue();
}
function baba_titan() {
    if(!isPaused){
        check_b=0;
        showValidMoves(titan_myside);
        clickgreen(titan_myside);
    }
   
}
function clickgreen(pieceindex) {
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_blue);
            rightButton.removeEventListener('click',change_blue);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_b);
            green.removeEventListener('click',frustration_canon_b);
            green.removeEventListener('click',frustration_tank_side);
            green.removeEventListener('click',frustration_rich_blue);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
    greens = document.querySelectorAll('.highlight');
    
    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click',frustration_semi_b);
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_semi_r);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click',frustration_rich_red);
        green.addEventListener('click', frustration);
        console.log("gotcha");
    });
}
function baba_titan_opp() {
    check_r=0;
    showValidMoves(titan_opponent);
    clickgreen_red(titan_opponent);
}
function frustration_red(event) {
    titan_opponent = parseInt(event.currentTarget.classList[1].slice(2));
    titan_red = document.querySelector('.sq' + titan_opponent);
    titan_red.classList.add(`${old_position.classList[2]}`);
    titan_red.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_red();
    removeHighlights();
    shootBullet_red();
}
function clickgreen_red(pieceindex) {
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_red);
            rightButton.removeEventListener('click',change_red);
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_r);
            green.removeEventListener('click',frustration_tank_opp);
            green.removeEventListener('click',frustration_canon_r);
            green.removeEventListener('click',frustration_rich_red);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
 
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click',frustration_semi_b);
        green.removeEventListener('click',frustration_semi_r);
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_rich_red);
        green.removeEventListener('click', frustration);
        green.addEventListener('click', frustration_red);
    });
}
function removeEventListeners_red() {
    if (old_position) {
        old_position.removeEventListener('click', baba_titan_opp);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_red);
        });
    }
}
let richotte_blue;
let richotte_red;
do {
    richotte_red = Math.floor(Math.random() * 24); // 0-23
} while (richotte_red === firstrow_canonindex|| richotte_red=== lastrow_canonindex||richotte_red===tankOpponentIndex||richotte_red===titan_opponent);
do {
    richotte_blue = Math.floor(Math.random() * 24) + 40; // 40-63
} while ( richotte_blue === lastrow_canonindex||richotte_blue===tankmySideIndex||richotte_blue===titan_myside);
let richotte_myside=document.querySelector('.sq'+richotte_blue);
let richotte_opponent=document.querySelector('.sq'+richotte_red);
let richotte_myside_image=['richotte_left_blue.png','richotte_right_blue.png'];
let richotte_opp_image=['richotte_left.png','richotte_right.png'];
let richotte_myside_direction = getRandomItemFromArray(richotte_myside_image);
let richotte_opp_direction = getRandomItemFromArray(richotte_opp_image);
richotte_myside.classList.add('richo_blue');
richotte_myside.innerHTML=`<img src="${richotte_myside_direction}">`;
richotte_opponent.classList.add('richo_red');
richotte_opponent.innerHTML=`<img src="${richotte_opp_direction}">`;
function rich_red(){
    if(!isPaused){
        check_r=0;
    showValidMoves(richotte_red);
    clickgreen_rich_red(richotte_red);
    }
    
}
function rich_blue(){
    const touched="rich_blue";
    if(!isPaused){
        check_b=0
        showValidMoves(richotte_blue);
    clickgreen_rich_blue(richotte_blue);
    }
    
}
function frustration_rich_red(event){
    richotte_red = parseInt(event.currentTarget.classList[1].slice(2));
    richotte_opponent = document.querySelector('.sq' + richotte_red);
    richotte_opponent.classList.add(`${old_position.classList[2]}`);
    richotte_opponent.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_rich_red();
    removeHighlights();
    shootBullet_red();
}
function change_red(){
    const changer=document.querySelector(`.sq${richotte_red}`);
    if(changer.querySelector('img').src.includes("richotte_left.png")){
        richotte_opponent.innerHTML=`<img src="richotte_right.png">`;
        removeEventListeners_rich_red();
        removeHighlights();
        shootBullet_red();
        
    }
    else if(changer.querySelector('img').src.includes("richotte_right.png")){
        removeEventListeners_rich_red();
        removeHighlights();
        shootBullet_red();
        richotte_opponent.innerHTML=`<img src="richotte_left.png">`;
    }
}
function clickgreen_rich_red(pieceindex){
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_r);
            green.removeEventListener('click',frustration_tank_opp);
            green.removeEventListener('click',frustration_canon_r);
            green.removeEventListener('click',frustration_red);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);

    leftButton.addEventListener('click',change_red);
    rightButton.addEventListener('click',change_red);
    greens = document.querySelectorAll('.highlight');

    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click',frustration_rich_blue);
        green.removeEventListener('click',frustration_semi_b)
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click',frustration_semi_r);
        green.addEventListener('click', frustration_rich_red);
    });
}
function removeEventListeners_rich_red(){
    if (old_position) {
        old_position.removeEventListener('click', rich_red);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_rich_red);
        });
    }
    leftButton.removeEventListener('click',change_red);
    rightButton.removeEventListener('click',change_red);
}
function frustration_rich_blue(event){
    richotte_blue = parseInt(event.currentTarget.classList[1].slice(2));
    richotte_myside = document.querySelector('.sq' + richotte_blue);
    richotte_myside.classList.add(`${old_position.classList[2]}`);
    richotte_myside.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    removeEventListeners_rich_blue();
    removeHighlights();
    shootBullet_blue();
}
function change_blue(){
    const changer=document.querySelector(`.sq${richotte_blue}`);
    if(changer.querySelector('img').src.includes("richotte_left_blue.png")){
        richotte_myside.innerHTML=`<img src="richotte_right_blue.png">`;
        console.log(richotte_myside.innerHTML);
        removeEventListeners_rich_blue();
        removeHighlights();
        shootBullet_blue();
        
    }
    else if(changer.querySelector('img').src.includes("richotte_right_blue.png")){
        removeEventListeners_rich_blue();
        removeHighlights();
        shootBullet_blue();
        richotte_myside.innerHTML=`<img src="richotte_left_blue.png">`;
        console.log(richotte_myside.innerHTML);
    }
}
function clickgreen_rich_blue(pieceindex){
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',rot_left);
            rightButton.removeEventListener('click',rot_right);
            green.removeEventListener('click', frustration_semi_b);
            green.removeEventListener('click',frustration_canon_b);
            green.removeEventListener('click',frustration_tank_side);
            green.removeEventListener('click',frustration);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
    greens = document.querySelectorAll('.highlight');
    leftButton.addEventListener('click',change_blue);
    rightButton.addEventListener('click',change_blue);
    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click',frustration_semi_b);
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_semi_r);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click',frustration_rich_red);
        green.addEventListener('click', frustration_rich_blue);
    });
}
function removeEventListeners_rich_blue(){
    if (old_position) {
        old_position.removeEventListener('click', rich_blue);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_rich_blue);
        });
    }
    leftButton.removeEventListener('click',change_blue);
    rightButton.removeEventListener('click',change_blue);
}
function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
let arr;
let semirichotte_bluee;//index
let semirichotte_redd;//index
let semirichotte_myside_direction;//image url
let semirichotte_opponent_direction;//image url
let semirichotte_myside;//class
let semirichotte_opponent;//class
let test1=0;
let test2=0;
semirichotte_blue();
semirichotte_red();
function semirichotte_blue(){
if(((richotte_blue - 1) !== lastrow_canonindex) && ((richotte_blue - 1)!==titan_myside) && ((richotte_blue - 1)!==tankmySideIndex) && ((richotte_blue)%8!==0)){
if(((richotte_blue + 1) !== lastrow_canonindex) && ((richotte_blue + 1) !==titan_myside) && ((richotte_blue + 1) !==tankmySideIndex) && ((richotte_blue+1)%8!==0)){
    test1=1;
     arr=[richotte_blue+1,richotte_blue-1];
    semirichotte_bluee=getRandomItemFromArray(arr);
     semirichotte_myside=document.querySelector('.sq'+semirichotte_bluee);
    const semirichotte_myside_image=['semi_richotte_blue_left.png','semi_richotte_blue_right.png'];
     semirichotte_myside_direction = getRandomItemFromArray(semirichotte_myside_image);
     semirichotte_myside.classList.add('semi_blue');
    semirichotte_myside.innerHTML=`<img src="${semirichotte_myside_direction}">`;
}
else{
    semirichotte_bluee=richotte_blue-1;
    semirichotte_myside=document.querySelector('.sq'+semirichotte_bluee);
   const semirichotte_myside_image=['semi_richotte_blue_left.png','semi_richotte_blue_right.png'];
    semirichotte_myside_direction = getRandomItemFromArray(semirichotte_myside_image);
    semirichotte_myside.classList.add('semi_blue');
   semirichotte_myside.innerHTML=`<img src="${semirichotte_myside_direction}">`;
}
}
if(((richotte_blue + 1) !== lastrow_canonindex) && ((richotte_blue + 1)!==titan_myside) && ((richotte_blue + 1)!==tankmySideIndex) && ((richotte_blue+1)%8!==0)){
if(test1!==1){
    semirichotte_bluee=richotte_blue+1;
    semirichotte_myside=document.querySelector('.sq'+semirichotte_bluee);
   const semirichotte_myside_image=['semi_richotte_blue_left.png','semi_richotte_blue_right.png'];
    semirichotte_myside_direction = getRandomItemFromArray(semirichotte_myside_image);
    semirichotte_myside.classList.add('semi_blue');
   semirichotte_myside.innerHTML=`<img src="${semirichotte_myside_direction}">`;
}
}  
}
if(((richotte_blue - 1) === lastrow_canonindex) || ((richotte_blue - 1)===titan_myside) || ((richotte_blue - 1)===tankmySideIndex) || ((richotte_blue)%8===0)){
   
if(((richotte_blue + 1) === lastrow_canonindex) || ((richotte_blue + 1)===titan_myside) || ((richotte_blue + 1)===tankmySideIndex)||(((richotte_blue+1)%8)===0)){
    semirichotte_bluee=richotte_blue-16;
    semirichotte_myside=document.querySelector('.sq'+semirichotte_bluee);
   const semirichotte_myside_image=['semi_richotte_blue_left.png','semi_richotte_blue_right.png'];
    semirichotte_myside_direction = getRandomItemFromArray(semirichotte_myside_image);
    semirichotte_myside.classList.add('semi_blue');
   semirichotte_myside.innerHTML=`<img src="${semirichotte_myside_direction}">`;
}
}
function semirichotte_red(){
if((richotte_red - 1) !== firstrow_canonindex && (richotte_red - 1)!==titan_opponent && (richotte_red - 1)!==tankOpponentIndex && (richotte_red)%8!==0){

if((richotte_red + 1) !== firstrow_canonindex && (richotte_red + 1) !==titan_opponent && (richotte_red + 1) !==tankOpponentIndex && (richotte_red+1)%8!==0){
    test2=1;
     arr=[richotte_red+1,richotte_red-1];
    semirichotte_redd=getRandomItemFromArray(arr);
     semirichotte_opponent=document.querySelector('.sq'+semirichotte_redd);
    const semirichotte_opponent_image=['semi_richotte_red_left.png','semi_richotte_red_right.png'];
     semirichotte_opponent_direction = getRandomItemFromArray(semirichotte_opponent_image);
     semirichotte_opponent.classList.add('semi_red');
    semirichotte_opponent.innerHTML=`<img src="${semirichotte_opponent_direction}">`;
}
else{
    semirichotte_redd=richotte_red-1;
    semirichotte_opponent=document.querySelector('.sq'+semirichotte_redd);
   const semirichotte_opponent_image=['semi_richotte_red_left.png','semi_richotte_red_right.png'];
    semirichotte_opponent_direction = getRandomItemFromArray(semirichotte_opponent_image);
    semirichotte_opponent.classList.add('semi_red');
   semirichotte_opponent.innerHTML=`<img src="${semirichotte_opponent_direction}">`;
}
}
if((richotte_red + 1) !== firstrow_canonindex && (richotte_red + 1)!==titan_opponent && (richotte_red + 1)!==tankOpponentIndex && (richotte_red+1)%8!==0){
if(test2!==1){
    semirichotte_redd=richotte_red+1;
    semirichotte_opponent=document.querySelector('.sq'+semirichotte_redd);
   const semirichotte_opponent_image=['semi_richotte_red_left.png','semi_richotte_red_right.png'];
    semirichotte_opponent_direction = getRandomItemFromArray(semirichotte_opponent_image);
    semirichotte_opponent.classList.add('semi_red');
   semirichotte_opponent.innerHTML=`<img src="${semirichotte_opponent_direction}">`;
}
}  
}
if((richotte_red - 1) === firstrow_canonindex || (richotte_red - 1)===titan_opponent || (richotte_red - 1)===tankOpponentIndex || (richotte_red)%8===0){
if((richotte_red + 1) === firstrow_canonindex || (richotte_red + 1)===titan_opponent || (richotte_red + 1)===tankOpponentIndex||(richotte_red+1)%8===0){
        document.querySelector('.sq'+richotte_red).innerHTML="";
        do {
            richotte_red = Math.floor(Math.random() * 24);
    } while ( richotte_red === firstrow_canonindex||richotte_red===tankOpponentIndex||richotte_red===titan_opponent);
    richotte_opponent=document.querySelector('.sq'+richotte_red);
    const richotte_opponent_image=['richotte_left.png','richotte_right.png'];
    richotte_opp_direction = getRandomItemFromArray(richotte_opponent_image);
    richotte_opponent.classList.add('richo_red');
    richotte_opponent.innerHTML=`<img src="${richotte_opp_direction}">`;
    semirichotte_red();
}
}
let check_r=0;
let check_b=0;
function semi_r(){
    if(!isPaused){
        showValidMoves(semirichotte_redd);
        clickgreen_semi_r(semirichotte_redd);   
    }
   
}
function semi_b(){
    if(!isPaused){
    showValidMoves(semirichotte_bluee);
    clickgreen_semi_b(semirichotte_bluee);
    }
}
function frustration_semi_r(event){
    semirichotte_redd = parseInt(event.currentTarget.classList[1].slice(2));
    semirichotte_opponent = document.querySelector('.sq' + semirichotte_redd);
    semirichotte_opponent.classList.add(`${old_position.classList[2]}`);
    semirichotte_opponent.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    // Remove old event listeners
    removeEventListeners_semi_r();
    removeHighlights();
    shootBullet_red();
}
function frustration_semi_b(event){
    semirichotte_bluee = parseInt(event.currentTarget.classList[1].slice(2));
    semirichotte_myside = document.querySelector('.sq' + semirichotte_bluee);
    semirichotte_myside.classList.add(`${old_position.classList[2]}`);
    semirichotte_myside.innerHTML = old_position.innerHTML;
    old_position.innerHTML = "";
    old_position.classList.remove(`${old_position.classList[2]}`);
    // Remove old event listeners
    removeEventListeners_semi_b();
    removeHighlights();
    shootBullet_blue();
}
function rot_left(){
        console.log("left");
        rotateBoard(-90); // Rotate left by 90 degrees
}
function rot_right(){
    console.log("left");
    rotateBoard(90); // Rotate left by 90 degrees
}

function clickgreen_semi_r(pieceindex){
    if (greens) {
        greens.forEach(green => {
            leftButton.removeEventListener('click',change_red);
            rightButton.removeEventListener('click',change_red);
            green.removeEventListener('click', frustration_rich_red);
            green.removeEventListener('click',frustration_tank_opp);
            green.removeEventListener('click',frustration_canon_r);
            green.removeEventListener('click',frustration_red);
        });
    }
    old_position = document.querySelector(`.sq${pieceindex}`);
    greens = document.querySelectorAll('.highlight');
    leftButton.addEventListener('click',rot_left);
    rightButton.addEventListener('click',rot_right);
    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click', frustration_rich_blue);
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click',frustration_semi_b);
        green.removeEventListener('click', frustration_rich_red);
        green.addEventListener('click',frustration_semi_r);
    });
}
function clickgreen_semi_b(pieceindex){
            if (greens) {
                greens.forEach(green => {
                    leftButton.removeEventListener('click',change_blue);
                    rightButton.removeEventListener('click',change_blue);
                    green.removeEventListener('click', frustration_canon_b);
                    green.removeEventListener('click',frustration);
                    green.removeEventListener('click',frustration_tank_side);
                    green.removeEventListener('click',frustration_rich_blue);
                });
            }
    old_position = document.querySelector(`.sq${pieceindex}`);
    greens = document.querySelectorAll('.highlight');
    leftButton.addEventListener('click',rot_left);
    rightButton.addEventListener('click',rot_right);
    greens.forEach(green => {
        green.removeEventListener('click',frustration_canon_r);
        green.removeEventListener('click',frustration_tank_opp);
        green.removeEventListener('click',frustration_red);
        green.removeEventListener('click', frustration_rich_red);
        green.removeEventListener('click', frustration_semi_r);
        green.removeEventListener('click',frustration_canon_b);
        green.removeEventListener('click',frustration_tank_side);
        green.removeEventListener('click',frustration);
        green.removeEventListener('click', frustration_rich_blue);
        green.addEventListener('click',frustration_semi_b);
    });
}
function removeEventListeners_semi_r(){
    if (old_position) {
        old_position.removeEventListener('click', semi_r);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_semi_r);
        });
    }
    leftButton.removeEventListener('click',rot_left);
    rightButton.removeEventListener('click',rot_right);
}
function removeEventListeners_semi_b(){
    if (old_position) {
        old_position.removeEventListener('click', semi_b);
    }
    if (greens) {
        greens.forEach(green => {
            green.removeEventListener('click', frustration_semi_b);
        });
    }
    leftButton.removeEventListener('click',rot_left);
    rightButton.removeEventListener('click',rot_right);
}
function showValidMoves_canon(canonIndex) {
    // Remove previous highlights
    removeHighlights();
    const rowStart = Math.floor(canonIndex / 8) * 8;
    const rowEnd = rowStart + 7;
    if(canonIndex<32){
        for (let i = rowStart; i <= rowEnd; i++) {
        if ((i+1)=== canonIndex &&(i+1)<=rowEnd){
            if(i!==tankOpponentIndex&&i!==richotte_red){
                if(i!==semirichotte_redd&&i!==titan_opponent){
                    document.querySelector('.sq' + i).classList.add('highlight');
                }
            }
        }
        if ((i-1)=== canonIndex &&(i-1)>=rowStart){
            if(i!==tankOpponentIndex&& i!==richotte_red){
                if(i!==semirichotte_redd&& i!==titan_opponent){
                    document.querySelector('.sq' + i).classList.add('highlight');
                }
            }
        }
        }
    }
    else{   
        for (let i = rowStart; i <= rowEnd; i++) {
        if ((i+1)=== canonIndex &&(i+1)<=rowEnd){
            if(i!==tankmySideIndex&&i!==richotte_blue){
                if(i!==semirichotte_bluee&&i!==titan_myside){
                    document.querySelector('.sq' + i).classList.add('highlight');
                }
            }
        }
        if ((i-1)=== canonIndex &&(i-1)>=rowStart){
            if(i!==tankmySideIndex&& i!==richotte_blue){
                if(i!==semirichotte_bluee&& i!==titan_myside){
                    document.querySelector('.sq' + i).classList.add('highlight');
                }
            }
        }
        }
    }
}
function removeHighlights() {
    document.querySelectorAll('.square').forEach(square => {
        square.classList.remove('highlight');
    });
}
/*
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('canon')&& !e.target.classList.contains('tank_opponent')&&!e.target.classList.contains('tank_myside')&& !e.target.classList.contains('titan_blue')&& !e.target.classList.contains('titan_red') &&!e.target.classList.contains(`sq`) ) {
        removeHighlights();
    }
});*/
function showValidMoves(index) {
        removeHighlights();
        const directions = [-1, 7, -8, 8, -9, -7, 9, 1]; // left, right, up, down, diagonals
        directions.forEach(dir => {
            const newInd = index + dir;

            if ((index % 8 === 0 && (dir === -1 || dir === -9 || dir === 7)) || // left edge
                ((index + 1) % 8 === 0 && (dir === 1 || dir === -7 || dir === 9))) 
                { 
                return;       
                } 
            if (isValidMove(index, newInd)) {
                const a=document.querySelector(`.sq${newInd}`);
               a.classList.add('highlight');
            }
        });
    }
function isValidMove(oldIndex, newInd) {
    if (newInd < 0 || newInd >= 64) return false;
    const targetSquare = document.querySelector('.sq' + newInd);
    if (targetSquare.classList.contains('canon') || 
        targetSquare.classList.contains('tank_opponent') || 
        targetSquare.classList.contains('tank_myside') || 
        targetSquare.classList.contains('titan_blue') || 
        targetSquare.classList.contains('titan_red')||targetSquare.classList.contains('richo_red')||targetSquare.classList.contains('richo_blue')||targetSquare.classList.contains('semi_blue')||targetSquare.classList.contains('semi_red')) 
    {      
return false;
}
else{
    return true;
}
}
        function removeEventListenersForPlayer(player) {
            console.log("remove");
            if (player === "blue") {
               
                canon_blue.removeEventListener('click', canon_b);
                titan_blue.removeEventListener('click', baba_titan);
                tankmySide.removeEventListener('click', tank_side);
                richotte_myside.removeEventListener('click', rich_blue);
                semirichotte_myside.removeEventListener('click', semi_b);
            } else if (player === "red") {
                canon_red.removeEventListener('click', canon_r);
                titan_red.removeEventListener('click', baba_titan_opp);
                tankOpponent.removeEventListener('click', tank_opp);
                richotte_opponent.removeEventListener('click', rich_red);
                semirichotte_opponent.removeEventListener('click', semi_r);
            }
        }
        function addEventListenersForPlayer(player) {
            if (player === "blue") {
                
                canon_blue.addEventListener('click', canon_b);
                titan_blue.addEventListener('click', baba_titan);
                tankmySide.addEventListener('click', tank_side);
                richotte_myside.addEventListener('click', rich_blue);
                semirichotte_myside.addEventListener('click', semi_b);
            } else if (player === "red") {
                canon_red.addEventListener('click', canon_r);
                titan_red.addEventListener('click', baba_titan_opp);
                tankOpponent.addEventListener('click', tank_opp);
                richotte_opponent.addEventListener('click', rich_red);
                semirichotte_opponent.addEventListener('click', semi_r);
            }
        }
        function switchPlayer() {
            console.log("switch");
            removeEventListenersForPlayer(currentPlayer);
            currentPlayer = currentPlayer === "blue" ? "red" : "blue";
            addEventListenersForPlayer(currentPlayer);
            if(currentPlayer==="blue"){
                document.querySelector('.turn').innerHTML=` <strong>Turn:</strong><span style="color:blue;
                font-family:Roboto Mono;
                font-weight:bold;
                text-transform: uppercase;">${currentPlayer}</span>`;
            }
            else{
                document.querySelector('.turn').innerHTML=` <strong>Turn:</strong><span style="color:red; 
                font-weight:bold;
                text-transform: uppercase;
                ">${currentPlayer}</span>`;
            }
            
        }
        function shootBullet_blue() {
            const gameArea = document.querySelector('.board');
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            let cannonRect = canon_blue.getBoundingClientRect();
            let cannonRect_r = canon_red.getBoundingClientRect();
            let titanRect_r=titan_red.getBoundingClientRect();
            let titanRect_b=titan_blue.getBoundingClientRect();
            let ricochetRect = richotte_myside.getBoundingClientRect();
            let ricochetRect_r=richotte_opponent.getBoundingClientRect();
            let semiricochetRect=semirichotte_myside.getBoundingClientRect();
            let semiricochetRect_r=semirichotte_opponent.getBoundingClientRect();
            let gameAreaRect = gameArea.getBoundingClientRect();
            bullet.style.left = `${cannonRect.left - gameAreaRect.left + cannonRect.width / 2 - 5}px`;
            bullet.style.top = `${cannonRect.top - gameAreaRect.top - 10}px`;
            gameArea.appendChild(bullet);
            let tankRect=tankmySide.getBoundingClientRect();
            let tankRect_r=tankOpponent.getBoundingClientRect();
            let direction='up';
            let bulletStart=lastrow_canonindex;
            let bulletInterval = setInterval(() =>{
                let bulletRect = bullet.getBoundingClientRect();
                const bulletCenterX = bulletRect.left + bulletRect.width / 2;
                const bulletCenterY = bulletRect.top + bulletRect.height / 2;
                    if(direction ==='up'){
                        const ricochetCenterY = ricochetRect.top + ricochetRect.height / 2;
                        const semiricochetCenterY = semiricochetRect.top + semiricochetRect.height / 2;
                        const semiricochetCenterY_r = semiricochetRect_r.top + semiricochetRect_r.height / 2;
                        const ricochetCenterY_r = ricochetRect_r.top + ricochetRect_r.height / 2;
                        const obst=first_obstacle_up(bulletStart);
                            if (obst === richotte_blue) {
                            
                                    const cell = document.querySelector(`.sq${richotte_blue}`);
                                    
                                    if (cell.querySelector('img').src.includes("richotte_right_blue.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY<ricochetCenterY && bulletRect.bottom>ricochetCenterY)
                                        {
                                        
                                        direction = 'right';
                                        console.log(direction);
                                        bulletStart = richotte_blue;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left_blue.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY<ricochetCenterY && bulletRect.bottom>ricochetCenterY)
                                            {
                                            direction = 'left';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_blue;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }

                                    }

                            }
                            else if(obst === richotte_red){
                                const cell = document.querySelector(`.sq${richotte_red}`);
                                    
                                    if (cell.querySelector('img').src.includes("richotte_right.png"))
                                    {
                                        console.log("identified image");
                                        if(bulletRect.left<ricochetRect_r.right && bulletRect.right > ricochetRect_r.left && bulletCenterY<ricochetCenterY_r && bulletRect.bottom>ricochetCenterY_r)
                                        {
                                        direction = 'right';
                                        bulletStart = richotte_red;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect_r.right && bulletRect.right > ricochetRect_r.left && bulletCenterY<ricochetCenterY_r && bulletRect.bottom>ricochetCenterY_r)
                                            {
                                            direction = 'left';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_red;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }

                                    }

                            }
                            else if(obst===tankmySideIndex){

                                if(bulletRect.top < tankRect.bottom){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }
                            }
                            else if(obst===tankOpponentIndex){
                                if(bulletRect.top < tankRect_r.bottom){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }
                            }
                            else if(obst===titan_opponent){
                                if(bulletRect.top < titanRect_r.bottom){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    isGameOver=true;
                                    alert(`${currentPlayer} wins!`);
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }
                            }
                            else if(obst===titan_myside){
                                if(bulletRect.top < titanRect_b.bottom){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }
                            }
                            else if(obst===firstrow_canonindex){
                                if(bulletRect.top < cannonRect_r.bottom){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }
                            }
                            else if(obst===semirichotte_bluee){
                                const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                                    
                                    if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && rotationAngle_b%360===0)
                                    {
                                        if(bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY)
                                        {
                                        console.log(`${parseFloat(semiricochetRect.bottom)}`);
                                        direction = 'right';
                                        console.log(direction);
                                        bulletStart = semirichotte_bluee;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b + 90) % 360 === 0){
                                        console.log(`${parseFloat(semiricochetRect.bottom)}`);
                                        if(bulletRect.top < semiricochetRect.bottom)
                                            {
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b + 180) % 360 === 0){
                                        console.log(`${parseFloat(semiricochetRect.bottom)}`);
                                        if(bulletRect.top < semiricochetRect.bottom)
                                            {
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b + 270) % 360 === 0){
                                        if(bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY)
                                            {
                                            direction = 'left';
                                            console.log(direction);
                                            bulletStart = semirichotte_bluee;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && rotationAngle_b%360===0)
                                    {
                                        
                                        if(bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY)
                                            {
                                            direction = 'left';
                                            console.log(`${direction}`);
                                            bulletStart = semirichotte_bluee;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }

                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+90)%360===0){
                                        if(bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY)
                                            {
                                            direction = 'right';
                                            console.log(`${direction}`);
                                            bulletStart = semirichotte_bluee;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+180)%360===0){
                                        if(bulletRect.top < semiricochetRect.bottom)
                                            {
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+270)%360===0){
                                        if(bulletRect.top < semiricochetRect.bottom)
                                            {
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                            }
                                    }
                            }
                            else if(obst===semirichotte_redd){
                                
                                const cell = document.querySelector(`.sq${semirichotte_redd}`);
                                    
                                if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && rotationAngle_r%360===0)
                                {
                                    
                                    if(bulletRect.left<semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left && bulletCenterY<semiricochetCenterY_r && bulletRect.bottom>semiricochetCenterY_r)
                                    {
                                    direction = 'right';
                                    console.log(direction);
                                    bulletStart = semirichotte_redd;
                                    }
                                    else
                                    {
                                        bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                    }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r + 90) % 360 === 0){
                                    console.log(`${parseFloat(semiricochetRect.bottom)}`);
                                    if(bulletRect.top < semiricochetRect_r.bottom)
                                        {
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r + 180) % 360 === 0){
                                    console.log(`${parseFloat(semiricochetRect.bottom)}`);
                                    if(bulletRect.top < semiricochetRect_r.bottom)
                                        {
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r + 270) % 360 === 0){
                                    if(bulletRect.left<semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left && bulletCenterY<semiricochetCenterY_r && bulletRect.bottom>semiricochetCenterY_r)
                                        {
                                        direction = 'left';
                                        console.log(direction);
                                        bulletStart = semirichotte_redd;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r%360)===0)
                                {
                                    
                                    if(bulletRect.left<semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left && bulletCenterY<semiricochetCenterY_r && bulletRect.bottom>semiricochetCenterY_r)
                                        {
                                        direction = 'left';
                                        console.log(`${direction}`);
                                        bulletStart = semirichotte_redd;
                                        }
                                        else
                                        {
                                            console.log(`${direction}`);
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }

                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+90)%360===0){
                                    if(bulletRect.left<semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left && bulletCenterY<semiricochetCenterY_r && bulletRect.bottom>semiricochetCenterY_r)
                                        {
                                        direction = 'right';
                                        console.log(`${direction}`);
                                        bulletStart = semirichotte_redd;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+180)%360===0){
                                    if(bulletRect.top < semiricochetRect_r.bottom)
                                        {
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                                else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+270)%360===0){
                                    if(bulletRect.top < semiricochetRect_r.bottom)
                                        {
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) - 5}px`;
                                        }
                                }
                            }
                            else {
                                if((bulletRect.bottom < gameAreaRect.top)){
                                console.log("ba");
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                                }
                                else {
                                    bullet.style.top = `${bullet.offsetTop - 5}px`;
                                }    
                            } 
                    }
                    if(direction ==='right'){
                        const ricochetCenterX = ricochetRect.left + ricochetRect.width / 2;
                        const ricochetCenterX_r = ricochetRect_r.left + ricochetRect_r.width / 2;
                        
                        const semiricochetCenterX = semiricochetRect.left + semiricochetRect.width / 2;
                        const semiricochetCenterX_r = semiricochetRect_r.left + semiricochetRect_r.width / 2;
                        const obst=first_obstacle_right(bulletStart);
                        console.log(obst,semirichotte_bluee,semirichotte_redd,rotationAngle_r);
                            if (obst === tankmySideIndex) {
                                    if(bulletRect.right>tankRect.left && bulletRect.left<tankRect.right && 
                                        bulletRect.top<tankRect.bottom && bulletRect.bottom>tankRect.top){
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                    }
                                    else{
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                                }
                            else if (obst === tankOpponentIndex) {
                                    if(bulletRect.right>tankRect_r.left && bulletRect.left<tankRect_r.right && 
                                        bulletRect.top<tankRect_r.bottom && bulletRect.bottom>tankRect_r.top){
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                    }
                                    else{
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                                }
                            else if(obst === firstrow_canonindex)
                            {
                                
                                if(bulletRect.right>cannonRect_r.left && bulletRect.left<cannonRect_r.right && 
                                    bulletRect.top<cannonRect_r.bottom && bulletRect.bottom>cannonRect_r.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                }
                            }
                            else if(obst === lastrow_canonindex){
                                if(bulletRect.right>cannonRect.left && bulletRect.left<cannonRect.right && 
                                    bulletRect.top<cannonRect.bottom && bulletRect.bottom>cannonRect.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                }
                            }
                            else if(obst === titan_myside){
                                if(bulletRect.right>titanRect_b.left && bulletRect.left<titanRect_b.right && 
                                    bulletRect.top<titanRect_b.bottom && bulletRect.bottom>titanRect_b.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                }
                            }
                            else if(obst === titan_opponent){
                                if(bulletRect.right>titanRect_r.left && bulletRect.left<titanRect_r.right && 
                                    bulletRect.top<titanRect_r.bottom && bulletRect.bottom>titanRect_r.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        isGameOver=true;
                                        alert(`${currentPlayer} wins!`);
                                }
                                else{
                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                }
                            }
                            else if(obst === richotte_blue)
                            {
                                const cell = document.querySelector(`.sq${richotte_blue}`);
                                if(cell.querySelector('img').src.includes("richotte_right_blue.png")){
                                    if(bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                        bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5)
                                    {
                                        direction='up';
                                        bulletStart = richotte_blue;
                                    }
                                    else{
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                                }
                                else if(cell.querySelector('img').src.includes("richotte_left_blue.png"))
                                    {
                                    if(bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                        bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5){
                                        direction='down';
                                        bulletStart=richotte_blue;
                                    }
                                    else{
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                                }
                            }
                            else if(obst === richotte_red){
                                const cell = document.querySelector(`.sq${richotte_red}`);
                                if(cell.querySelector('img').src.includes("richotte_right.png")){
                                    if(bulletRect.left < ricochetRect_r.right && bulletRect.right > ricochetRect_r.left &&
                                        bulletCenterX >= ricochetCenterX_r - 5 && bulletCenterX <= ricochetCenterX_r + 5)
                                    {
                                        direction='up';
                                        bulletStart = richotte_red;
                                    }
                                    else{
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                                }
                                else if(cell.querySelector('img').src.includes("richotte_left.png")){
                                    if(bulletRect.left < ricochetRect_r.right && bulletRect.right > ricochetRect_r.left &&
                                        bulletCenterX >= ricochetCenterX_r - 5 && bulletCenterX <= ricochetCenterX_r + 5)
                                    {
                                        direction='down';
                                        console.log(direction);
                                        bulletStart = richotte_red;
                                    }
                                    else
                                    {
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;   
                                    }
                                }
                            }
                            else if(obst === semirichotte_bluee){
                                const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                                    
                                    if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b%360)===0)
                                    {
                                        if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                            bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+90)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                    clearInterval(bulletInterval);
                                                    bullet.remove();
                                                    switchPlayer();
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                            }
                                        }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+180)%360===0)
                                            {
                                                if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                    bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                        direction='up';
                                                        bulletStart=semirichotte_bluee;
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                }
                                            }
                                            else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+270)%360===0)
                                                {
                                                    if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                        bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                            direction='down';
                                                            bulletStart=semirichotte_bluee;
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                    }
                                                }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b%360)===0)
                                    {
                                        if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                            bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5)
                                        {
                                            direction='down';
                                            bulletStart = semirichotte_bluee;
                                        }
                                        else
                                        {
                                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;   
                                        }

                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+90)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                    clearInterval(bulletInterval);
                                                    bullet.remove();
                                                    switchPlayer();
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                            }
                                        }
                                        else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+180)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                    bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                        clearInterval(bulletInterval);
                                                        bullet.remove();
                                                        switchPlayer();
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                }
                                            }
                                            else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+270)%360===0)
                                                {
                                                    if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                        bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                            direction='up';
                                                            bulletStart=semirichotte_bluee;
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                    }
                                                }
                            }
                            else if(obst === semirichotte_redd ){
                                const cell = document.querySelector(`.sq${semirichotte_redd}`);
                                    
                                    if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r%360)===0)
                                    {
                                        if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                            bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                console.log("hogaya");
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+90)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                    console.log("hogaya");
                                                    clearInterval(bulletInterval);
                                                    bullet.remove();
                                                    switchPlayer();
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                            }
                                        }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+180)%360===0)
                                            {
                                                if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                    bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                        direction='up';
                                                        console.log("up");
                                                        bulletStart=semirichotte_redd;
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                }
                                            }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+270)%360===0)
                                                {
                                                    if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                        bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                            console.log("down");
                                                            direction='down';
                                                            bulletStart=semirichotte_redd;
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                    }
                                                }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && rotationAngle_r%360===0)
                                    {
                                        if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                            bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5)
                                        {
                                            direction='down';
                                            console.log("down");
                                            bulletStart = semirichotte_redd;
                                        }
                                        else
                                        {
                                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;   
                                        }

                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+90)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                    console.log("hogaya");
                                                    clearInterval(bulletInterval);
                                                    bullet.remove();
                                                    switchPlayer();
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                            }
                                        }
                                        else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+180)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                    bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                        clearInterval(bulletInterval);
                                                        bullet.remove();
                                                        switchPlayer();
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                }
                                            }
                                            else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+270)%360===0)
                                                {
                                                    if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                        bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                            direction='up';
                                                            bulletStart=semirichotte_redd;
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                                    }
                                                }
                            }
                            else{
                                if((bulletRect.right > gameAreaRect.right)){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                    }
                                    else {
                                        bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                                    }
                            }
                        }
                     if(direction==="left"){
                        const ricochetCenterX = ricochetRect.left + ricochetRect.width / 2;
                        const ricochetCenterX_r = ricochetRect_r.left + ricochetRect_r.width / 2;
                        
                        const semiricochetCenterX = semiricochetRect.left + semiricochetRect.width / 2;
                        const semiricochetCenterX_r = semiricochetRect_r.left + semiricochetRect_r.width / 2;
                        
                            const obst=first_obstacle_left(bulletStart);
                            if (obst === tankmySideIndex) {
                                if(bulletRect.right>tankRect.left && bulletRect.left<tankRect.right && 
                                    bulletRect.top<tankRect.bottom && bulletRect.bottom>tankRect.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if (obst === tankOpponentIndex) {
                                if(bulletRect.right>tankRect_r.left && bulletRect.left<tankRect_r.right && 
                                    bulletRect.top<tankRect_r.bottom && bulletRect.bottom>tankRect_r.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if(obst===lastrow_canonindex){
                                if(bulletRect.right>cannonRect.left && bulletRect.left<cannonRect.right && 
                                    bulletRect.top<cannonRect.bottom && bulletRect.bottom>cannonRect.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if(obst===firstrow_canonindex){
                                if(bulletRect.right>cannonRect_r.left && bulletRect.left<cannonRect_r.right && 
                                    bulletRect.top<cannonRect_r.bottom && bulletRect.bottom>cannonRect_r.top){
                                        console.log("condtions satisfied")
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        
                                        switchPlayer();
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if(obst===titan_myside){
                                if(bulletRect.right>titanRect_b.left && bulletRect.left<titanRect_b.right && 
                                    bulletRect.top<titanRect_b.bottom && bulletRect.bottom>titanRect_b.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        switchPlayer();
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if(obst === titan_opponent){
                                if(bulletRect.right>titanRect_r.left && bulletRect.left<titanRect_r.right && 
                                    bulletRect.top<titanRect_r.bottom && bulletRect.bottom>titanRect_r.top){
                                        clearInterval(bulletInterval);
                                        bullet.remove();
                                        isGameOver=true;
                                        alert(`${currentPlayer} wins!`);
                                }
                                else{
                                     bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                            }
                            else if(obst === richotte_blue){
                                const cell = document.querySelector(`.sq${richotte_blue}`);
                                if (cell.querySelector('img').src.includes("richotte_right_blue.png"))
                                    {
                                        if(bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                            bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5)
                                        {
                                        direction = 'down';
                                        bulletStart = richotte_blue;
                                        }
                                        else
                                        {
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left_blue.png"))
                                    {
                                        
                                        if(bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                            bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5)
                                            {
                                            direction = 'up';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_blue;
                                            }
                                            else
                                            {
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }

                                    }
                            }
                            else if(obst===richotte_red){
                                const cell = document.querySelector(`.sq${richotte_red}`);
                                if (cell.querySelector('img').src.includes("richotte_right.png"))
                                    {
                                        if(bulletRect.left < ricochetRect_r.right && bulletRect.right > ricochetRect_r.left &&
                                            bulletCenterX >= ricochetCenterX_r - 5 && bulletCenterX <= ricochetCenterX_r + 5)
                                        {
                                        direction = 'down';
                                        bulletStart = richotte_red;
                                        }
                                        else
                                        {
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left.png"))
                                    {
                                        
                                        if(bulletRect.left < ricochetRect_r.right && bulletRect.right > ricochetRect_r.left &&
                                            bulletCenterX >= ricochetCenterX_r - 5 && bulletCenterX <= ricochetCenterX_r + 5)
                                            {
                                            direction = 'up';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_red;
                                            }
                                            else
                                            {
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }

                                    }
                            }
                            else if(obst===semirichotte_bluee){
                                const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                                    
                                    if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && rotationAngle_b%360===0)
                                    {
                                        if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                            bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                direction='down';
                                                console.log(direction);
                                                bulletStart=semirichotte_bluee;
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+90)%360===0)
                                        {
                                            if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                    direction='up';
                                                    bulletStart=semirichotte_bluee;
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }
                                        }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+180)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                    bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                        clearInterval(bulletInterval);
                                                        bullet.remove();
                                                        switchPlayer();
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                }
                                            }
                                            else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+270)%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                        bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                    }
                                                }
                                                
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && rotationAngle_b%360===0)
                                    {
                                        if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                            bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }

                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+90)%360===0)
                                        {
                                            if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                    direction='down';
                                                    bulletStart=semirichotte_bluee;
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }
    
                                        }
                                        else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+180)%360===0)
                                            {
                                                if(bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                                    bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5){
                                                        direction='up';
                                                        bulletStart=semirichotte_bluee;
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                }
        
                                            }
                                            else if(cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+270)%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                        bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top)
                                                        {
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                    }
            
                                                }
                            }
                            else if(obst===semirichotte_redd){
                                const cell = document.querySelector(`.sq${semirichotte_redd}`);
                                    
                                    if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && rotationAngle_r%360===0)
                                    {
                                        if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                            bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                direction='down';
                                                bulletStart=semirichotte_redd;
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+90)%360===0)
                                        {
                                            if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                    direction='up';
                                                    bulletStart=semirichotte_redd;
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }
                                        }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+180)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                    bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                        clearInterval(bulletInterval);
                                                        bullet.remove();
                                                        switchPlayer();
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                }
                                            }
                                            else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+270)%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                        bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                    }
                                                }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png") && rotationAngle_r%360===0)
                                    {
                                        if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                            bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                        }
                                        else{
                                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                        }

                                    }
                                    else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+90)%360===0)
                                        {
                                            if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                    direction='down';
                                                    bulletStart=semirichotte_bluee;
                                            }
                                            else{
                                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                            }
    
                                        }
                                        else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+180)%360===0)
                                            {
                                                if(bulletRect.left < semiricochetRect_r.right && bulletRect.right > semiricochetRect_r.left &&
                                                    bulletCenterX >= semiricochetCenterX_r - 5 && bulletCenterX <= semiricochetCenterX_r + 5){
                                                        direction='up';
                                                        bulletStart=semirichotte_redd;
                                                }
                                                else{
                                                    bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                }
        
                                            }
                                            else if(cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+270)%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                        bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top)
                                                        {
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                                    }
            
                                                }
                            }
                            else{
                                if((bulletRect.left < gameAreaRect.left)){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                    }
                                    else {
                                        bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                    }
                            }
                        }
                        if(direction==="down"){
                            const semiricochetCenterY = semiricochetRect.top + semiricochetRect.height / 2;
                            const semiricochetCenterY_r = semiricochetRect_r.top + semiricochetRect_r.height / 2;
                        const ricochetCenterY = ricochetRect.top + ricochetRect.height / 2;
                        const ricochetCenterY_r = ricochetRect_r.top + ricochetRect_r.height / 2;
                            const obst=first_obstacle_down(bulletStart);
                            console.log(obst,richotte_blue);
                            if(obst===tankmySideIndex){
                                if(bulletRect.bottom > tankRect.top){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop + 5}px`;
                                }
                            }
                            else if(obst===tankOpponentIndex){
                                if(bulletRect.bottom > tankRect_r.top){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop + 5}px`;
                                }
                            }
                            else if(obst===titan_myside){
                                if(bulletRect.bottom > titanRect_b.top){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop + 5}px`;
                                }
                            }
                            else if(obst===titan_opponent){
                                if(bulletRect.bottom > titanRect_r.top){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    isGameOver=true;
                                    alert(`${currentPlayer} wins!`);
                                   
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop + 5}px`;
                                }
                            }
                            else if(obst===lastrow_canonindex){
                                if(bulletRect.bottom > cannonRect.top){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                }
                                else{
                                    bullet.style.top = `${bullet.offsetTop + 5}px`;
                                }
                            }
                            else if(obst===richotte_blue){
                                const cell = document.querySelector(`.sq${richotte_blue}`);
                                    
                                    if (cell.querySelector('img').src.includes("richotte_right_blue.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY>ricochetCenterY && bulletRect.top<ricochetCenterY)
                                        {
                                        
                                        direction = 'left';
                                        console.log(direction);
                                        bulletStart = richotte_blue;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left_blue.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY>ricochetCenterY && bulletRect.top<ricochetCenterY)
                                            {
                                            direction = 'right';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_blue;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                            }

                                    }
                            }
                            else if(obst===richotte_red){
                                const cell = document.querySelector(`.sq${richotte_red}`);
                                    
                                    if (cell.querySelector('img').src.includes("richotte_right.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect_r.right && bulletRect.right > ricochetRect_r.left && bulletCenterY>ricochetCenterY_r && bulletRect.top<ricochetCenterY_r)
                                        {
                                        
                                        direction = 'left';
                                        console.log(direction);
                                        bulletStart = richotte_red;
                                        }
                                        else
                                        {
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                            console.log(direction);
                                        }
                                    }
                                    else if(cell.querySelector('img').src.includes("richotte_left.png"))
                                    {
                                        
                                        if(bulletRect.left<ricochetRect_r.right && bulletRect.right > ricochetRect_r.left && bulletCenterY>ricochetCenterY_r && bulletRect.top<ricochetCenterY_r)
                                            {
                                            direction = 'right';
                                            console.log(`${direction}`);
                                            bulletStart = richotte_red;
                                            }
                                            else
                                            {
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                            }

                                    }
                            }
                            else if(obst===semirichotte_bluee){
                                const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                                    
                                if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && rotationAngle_b%360===0)
                                {
                                    if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                        bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                            clearInterval(bulletInterval);
                                            bullet.remove();
                                            switchPlayer();
                                    }
                                    else{
                                        bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                    }
                                }
                                else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+90)%360===0)
                                    {
                                        if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY){
                                               direction='right';
                                               bulletStart=semirichotte_bluee;
                                        }
                                        else{
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+180)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY){
                                                   direction='left';
                                                   bulletStart=semirichotte_bluee;
                                            }
                                            else{
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                            }
                                        }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+270)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                    bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                        clearInterval(bulletInterval);
                                                        bullet.remove();
                                                        switchPlayer();
                                                }
                                                else{
                                                    bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                }
                                            }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && rotationAngle_b%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                        bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                    }
                                                }
                                                else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+90)%360===0)
                                                    {
                                                        if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && 
                                                            bulletRect.top<semiricochetRect.bottom && bulletRect.bottom>semiricochetRect.top){
                                                                clearInterval(bulletInterval);
                                                                bullet.remove();
                                                                switchPlayer();
                                                        }
                                                        else{
                                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                        }
                                                    }
                                                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+180)%360===0)
                                                        {
                                                            if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY){
                                                                    direction='right';
                                                                    bulletStart=semirichotte_bluee;
                                                            }
                                                            else{
                                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                            }
                                                        }
                                                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+270)%360===0)
                                                            {
                                                                if(bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY){
                                                                        direction='left';
                                                                        bulletStart=semirichotte_bluee;
                                                                }
                                                                else{
                                                                    bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                                }
                                                            }
                                            
                            }
                            else if(obst===semirichotte_redd){
                                const cell = document.querySelector(`.sq${semirichotte_redd}`);
                                if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && rotationAngle_r%360===0)
                                    {
                                        if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                            bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                clearInterval(bulletInterval);
                                                bullet.remove();
                                                switchPlayer();
                                        }
                                        else{
                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                        }
                                    }
                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+90)%360===0)
                                        {
                                            if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && bulletCenterY>semiricochetCenterY_r){
                                                   direction='right';
                                                   bulletStart=semirichotte_redd;
                                            }
                                            else{
                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                            }
                                        }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+180)%360===0)
                                            {
                                                if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && bulletCenterY>semiricochetCenterY_r){
                                                       direction='left';
                                                       bulletStart=semirichotte_redd;
                                                }
                                                else{
                                                    bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                }
                                            }
                                            else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+270)%360===0)
                                                {
                                                    if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                        bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                            clearInterval(bulletInterval);
                                                            bullet.remove();
                                                            switchPlayer();
                                                    }
                                                    else{
                                                        bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                    }
                                                }
                                                else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && rotationAngle_r%360===0)
                                                    {
                                                        if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                            bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                                clearInterval(bulletInterval);
                                                                bullet.remove();
                                                                switchPlayer();
                                                        }
                                                        else{
                                                            bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                        }
                                                    }
                                                    else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+90)%360===0)
                                                        {
                                                            if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && 
                                                                bulletRect.top<semiricochetRect_r.bottom && bulletRect.bottom>semiricochetRect_r.top){
                                                                    clearInterval(bulletInterval);
                                                                    bullet.remove();
                                                                    switchPlayer();
                                                            }
                                                            else{
                                                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                            }
                                                        }
                                                else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+180)%360===0)
                                                    {
                                                if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && bulletCenterY>semiricochetCenterY_r)
                                                    {
                                                    direction='right';
                                                    bulletStart=semirichotte_redd;
                                                     }
                                                    else{
                                                    bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                    }
                                                }
                                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+270)%360===0)
                                                {
                                             if(bulletRect.right>semiricochetRect_r.left && bulletRect.left<semiricochetRect_r.right && bulletCenterY>semiricochetCenterY_r)
                                                {
                                                 direction='left';
                                                bulletStart=semirichotte_redd;
                                                }
                                             else{
                                                 bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                                                 }
                                         }
                            }
                            else{
                                if((bulletRect.top > gameAreaRect.bottom)){
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                    }
                                    else {
                                        bullet.style.top = `${bullet.offsetTop + 5}px`;
                                    }  
                            }
                            
                        }    
                    }, 20);
        }
        function shootBullet_red() 
        {
            const gameArea = document.querySelector('.board');
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            // Get the position of the red cannon
            let cannonRect = canon_red.getBoundingClientRect();
            let cannonRect_b = canon_blue.getBoundingClientRect();
            let titanRect_r = titan_red.getBoundingClientRect();
            let titanRect_b = titan_blue.getBoundingClientRect();
            let ricochetRect = richotte_opponent.getBoundingClientRect();
            let ricochetRect_b = richotte_myside.getBoundingClientRect();
            let semiricochetRect = semirichotte_opponent.getBoundingClientRect();
            let semiricochetRect_b = semirichotte_myside.getBoundingClientRect();
            let gameAreaRect = gameArea.getBoundingClientRect();
            bullet.style.left = `${cannonRect.left - gameAreaRect.left + cannonRect.width / 2 - 5}px`;
            bullet.style.top = `${cannonRect.bottom - gameAreaRect.top + 10}px`;
            gameArea.appendChild(bullet);
            let tankRect = tankOpponent.getBoundingClientRect();
            let tankRect_b = tankmySide.getBoundingClientRect();
            let direction = 'down';
            let bulletStart = firstrow_canonindex;
        
            let bulletInterval = setInterval(() => {
                let bulletRect = bullet.getBoundingClientRect();
                const bulletCenterX = bulletRect.left + bulletRect.width / 2;
                const bulletCenterY = bulletRect.top + bulletRect.height / 2;
                if (direction === 'down') {
                    const ricochetCenterY = ricochetRect.top + ricochetRect.height / 2;
                    const semiricochetCenterY = semiricochetRect.top + semiricochetRect.height / 2;
                    const semiricochetCenterY_b = semiricochetRect_b.top + semiricochetRect_b.height / 2;
                    const ricochetCenterY_b = ricochetRect_b.top + ricochetRect_b.height / 2;
                    const obst = first_obstacle_down(bulletStart);
                    console.log(obst,tankOpponentIndex);
                    if (obst === richotte_red) {
                        const cell = document.querySelector(`.sq${richotte_red}`);
                        if (cell.querySelector('img').src.includes("richotte_right.png")) {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY > ricochetCenterY && bulletRect.top < ricochetCenterY) {
                                direction = 'left';
                                bulletStart = richotte_red;
                            } else {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 4}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("richotte_left.png")) 
                            {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left && bulletCenterY > ricochetCenterY && bulletRect.top < ricochetCenterY) 
                            {
                                direction = 'right';
                                bulletStart = richotte_red;
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                    } else if (obst === richotte_blue) {
                        const cell = document.querySelector(`.sq${richotte_blue}`);
                        if (cell.querySelector('img').src.includes("richotte_right_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left && bulletCenterY > ricochetCenterY_b && bulletRect.top < ricochetCenterY_b) {
                                direction = 'left';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        } else if (cell.querySelector('img').src.includes("richotte_left_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left && bulletCenterY > ricochetCenterY_b && bulletRect.top < ricochetCenterY_b) {
                                direction = 'right';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                    } else if (obst === tankOpponentIndex) {
                        console.log("red");
                        if (bulletRect.bottom > tankRect.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${bullet.offsetTop + 5}px`;
                        }
                    } else if (obst === tankmySideIndex) {
                        if (bulletRect.bottom > tankRect_b.top) 
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } 
                        else 
                        {
                            bullet.style.top = `${bullet.offsetTop + 5}px`;
                        }
                    } else if (obst === titan_opponent) {
                        if (bulletRect.bottom > titanRect_r.top) 
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } 
                        else 
                        {
                            bullet.style.top = `${bullet.offsetTop + 5}px`;
                        }
                    } 
                    else if (obst === titan_myside) {
                        if (bulletRect.bottom > titanRect_b.top)
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            isGameOver = true;
                            alert(`${currentPlayer} wins!`);
                            
                        } 
                        else 
                        {
                            bullet.style.top = `${bullet.offsetTop + 4}px`;
                        }
                    } 
                    else if (obst === lastrow_canonindex) {
                        if (bulletRect.bottom > cannonRect_b.top) 
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else 
                        {
                            bullet.style.top = `${bullet.offsetTop + 5}px`;
                        }
                    } else if (obst === semirichotte_redd) {
                        const cell = document.querySelector(`.sq${semirichotte_redd}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&&rotationAngle_r%360===0) {
                            if (bulletRect.bottom > semiricochetRect.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&&(rotationAngle_r+90)%360===0) {
                            if (bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY) 
                            {
                                direction='right';
                                bulletStart=semirichotte_redd;  
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& (rotationAngle_r+180)%360===0) 
                        {
                            if (bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY)
                             {
                                direction='left';
                                bulletStart=semirichotte_redd;  
                            } 
                            else 
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+270)%360===0) {
                            if (bulletRect.bottom > semiricochetRect.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && rotationAngle_r%360===0) {
                            if (bulletRect.bottom > semiricochetRect.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+90)%360===0) {
                            if (bulletRect.bottom > semiricochetRect.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+180)%360===0) {
                            if (bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY) 
                            {
                                direction='right';
                                bulletStart=semirichotte_redd;   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+270)%360===0) {
                            if (bulletRect.right>semiricochetRect.left && bulletRect.left<semiricochetRect.right && bulletCenterY>semiricochetCenterY) 
                            {
                                direction='left';
                                bulletStart=semirichotte_redd;   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }

                    } else if (obst === semirichotte_bluee) 
                    {
                        const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_b)%360===0) {
                            if (bulletRect.bottom > semiricochetRect_b.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                                
                            } 
                            else 
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 4}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&&(rotationAngle_b+90)%360===0) {
                            if (bulletRect.right>semiricochetRect_b.left && bulletRect.left<semiricochetRect_b.right && bulletCenterY>semiricochetCenterY_b) 
                            {
                                direction='right';
                                bulletStart=semirichotte_bluee;  
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_b+180)%360===0) 
                        {
                            if (bulletRect.right>semiricochetRect_b.left && bulletRect.left<semiricochetRect_b.right && bulletCenterY>semiricochetCenterY_b)
                             {
                                direction='left';
                                bulletStart=semirichotte_bluee;  
                            } 
                            else 
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 4}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+270)%360===0) {
                            if (bulletRect.bottom > semiricochetRect_b.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        } 
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && rotationAngle_b%360===0) {
                            if (bulletRect.bottom > semiricochetRect_b.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+90)%360===0) {
                            if (bulletRect.bottom > semiricochetRect_b.top) 
                            {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+180)%360===0) {
                            if (bulletRect.right>semiricochetRect_b.left && bulletRect.left<semiricochetRect_b.right && bulletCenterY>semiricochetCenterY_b) 
                            {
                                direction='right';
                                bulletStart=semirichotte_bluee;   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+270)%360===0) {
                            if (bulletRect.right>semiricochetRect_b.left && bulletRect.left<semiricochetRect_b.right && bulletCenterY>semiricochetCenterY_b) 
                            {
                                direction='left';
                                bulletStart=semirichotte_bluee;   
                            } 
                            else
                            {
                                bullet.style.top = `${parseFloat(bullet.offsetTop) + 5}px`;
                            }
                        }
                    } 
                    else 
                    {
                        if ((bulletRect.top > gameAreaRect.bottom)) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${bullet.offsetTop + 5}px`;
                        }
                    }
                } 
                else if (direction === 'right') {
                    const ricochetCenterX = ricochetRect.left + ricochetRect.width / 2;
                    const ricochetCenterX_b = ricochetRect_b.left + ricochetRect_b.width / 2;
                    const semiricochetCenterX = semiricochetRect.left + semiricochetRect.width / 2;
                    const semiricochetCenterX_b = semiricochetRect_b.left + semiricochetRect_b.width / 2;
                    const obst = first_obstacle_right(bulletStart);
                    if (obst === tankmySideIndex) {
                        if (bulletRect.right > tankRect_b.left && bulletRect.left < tankRect_b.right &&
                            bulletRect.top < tankRect_b.bottom && bulletRect.bottom > tankRect_b.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === tankOpponentIndex) {
                        if (bulletRect.right > tankRect.left && bulletRect.left < tankRect.right &&
                            bulletRect.top < tankRect.bottom && bulletRect.bottom > tankRect.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === firstrow_canonindex) {
                        if (bulletRect.right > cannonRect.left && bulletRect.left < cannonRect.right &&
                            bulletRect.top < cannonRect.bottom && bulletRect.bottom > cannonRect.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === lastrow_canonindex) {
                        if (bulletRect.right > cannonRect_b.left && bulletRect.left < cannonRect_b.right &&
                            bulletRect.top < cannonRect_b.bottom && bulletRect.bottom > cannonRect_b.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === titan_opponent) {
                        if (bulletRect.right > titanRect_r.left && bulletRect.left < titanRect_r.right &&
                            bulletRect.top < titanRect_r.bottom && bulletRect.bottom > titanRect_r.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === titan_myside) {
                        if (bulletRect.right > titanRect_b.left && bulletRect.left < titanRect_b.right &&
                            bulletRect.top < titanRect_b.bottom && bulletRect.bottom > titanRect_b.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            isGameOver = true;
                            alert(`${currentPlayer} wins!`);
                            
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    } else if (obst === richotte_red) {
                        const cell = document.querySelector(`.sq${richotte_red}`);
                        if (cell.querySelector('img').src.includes("richotte_right.png")) {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5) {
                                direction = 'up';
                                bulletStart = richotte_red;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        } else if (cell.querySelector('img').src.includes("richotte_left.png")) {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5) {
                                direction = 'down';
                                bulletStart = richotte_red;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                    } else if (obst === richotte_blue) {
                        const cell = document.querySelector(`.sq${richotte_blue}`);
                        if (cell.querySelector('img').src.includes("richotte_right_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                                bulletCenterX >= ricochetCenterX_b - 5 && bulletCenterX <= ricochetCenterX_b + 5) {
                                direction = 'up';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        } else if (cell.querySelector('img').src.includes("richotte_left_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                                bulletCenterX >= ricochetCenterX_b - 5 && bulletCenterX <= ricochetCenterX_b + 5) {
                                direction = 'down';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                    } else if (obst === semirichotte_redd) {
                        const cell = document.querySelector(`.sq${semirichotte_redd}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& rotationAngle_r%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left <       semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& (rotationAngle_r+90)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left <       semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& (rotationAngle_r+180)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction='up';
                                bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& (rotationAngle_r+270)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction='down';
                                bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                         else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& rotationAngle_r%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction = 'down';
                                bulletStart = semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+90)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left <       semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+180)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left <       semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+270)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction='up';
                                bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                    } 
                    else if (obst === semirichotte_bluee) {
                        const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& rotationAngle_b%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left <       semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_b+90)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left <       semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_b+180)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction='up';
                                bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_b+270)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction='down';
                                bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                         else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& rotationAngle_b%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction = 'down';
                                bulletStart = semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+90)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left <       semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+180)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left <       semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+270)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction='up';
                                bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                            }
                        }
                    } 
                    else {
                        if ((bulletRect.right > gameAreaRect.right)) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) + 5}px`;
                        }
                    }
                }
                else if (direction === 'left')  {
                    const ricochetCenterX = ricochetRect.left + ricochetRect.width / 2;
                    const ricochetCenterX_b = ricochetRect_b.left + ricochetRect_b.width / 2;
                    const semiricochetCenterX = semiricochetRect.left + semiricochetRect.width / 2;
                    const semiricochetCenterX_b = semiricochetRect_b.left + semiricochetRect_b.width / 2;
                    const obst = first_obstacle_left(bulletStart);
                    console.log(obst,lastrow_canonindex);
                    if (obst === tankmySideIndex) 
                    {
                        if (bulletRect.right > tankRect_b.left && bulletRect.left < tankRect_b.right &&
                            bulletRect.top < tankRect_b.bottom && bulletRect.bottom > tankRect_b.top) 
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else 
                        {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    } else if (obst === tankOpponentIndex) {
                        if (bulletRect.right > tankRect.left && bulletRect.left < tankRect.right &&
                            bulletRect.top < tankRect.bottom && bulletRect.bottom > tankRect.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    } else if (obst === firstrow_canonindex) {
                        if (bulletRect.right > cannonRect.left && bulletRect.left < cannonRect.right &&
                            bulletRect.top < cannonRect.bottom && bulletRect.bottom > cannonRect.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    } else if (obst === lastrow_canonindex) {
                        if (bulletRect.right > cannonRect_b.left && bulletRect.left < cannonRect_b.right &&
                            bulletRect.top < cannonRect_b.bottom && bulletRect.bottom > cannonRect_b.top) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    } else if (obst === titan_opponent) {
                        if (bulletRect.right > titanRect_r.left && bulletRect.left < titanRect_r.right &&
                            bulletRect.top < titanRect_r.bottom && bulletRect.bottom > titanRect_r.top) {
                                clearInterval(bulletInterval);
                                bullet.remove();
                                switchPlayer();
                        } else {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    } 
                    else if (obst === titan_myside) 
                    {
                        if (bulletRect.right > titanRect_b.left && bulletRect.left < titanRect_b.right &&
                            bulletRect.top < titanRect_b.bottom && bulletRect.bottom > titanRect_b.top) 
                        {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            isGameOver = true;
                            alert(`${currentPlayer} wins!`);
                            
                        } 
                        else 
                        {
                            bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                        }
                    }
                    else if (obst === richotte_red) {
                        const cell = document.querySelector(`.sq${richotte_red}`);
                        if (cell.querySelector('img').src.includes("richotte_right.png")) {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5) {
                                direction = 'down';
                                bulletStart = richotte_red;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        } else if (cell.querySelector('img').src.includes("richotte_left.png")) {
                            if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                                bulletCenterX >= ricochetCenterX - 5 && bulletCenterX <= ricochetCenterX + 5) {
                                direction = 'up';
                                bulletStart = richotte_red;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                    } else if (obst === richotte_blue) {
                        const cell = document.querySelector(`.sq${richotte_blue}`);
                        if (cell.querySelector('img').src.includes("richotte_right_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                                bulletCenterX >= ricochetCenterX_b - 5 && bulletCenterX <= ricochetCenterX_b + 5) {
                                direction = 'down';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        } else if (cell.querySelector('img').src.includes("richotte_left_blue.png")) {
                            if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                                bulletCenterX >= ricochetCenterX_b - 5 && bulletCenterX <= ricochetCenterX_b + 5) {
                                direction = 'up';
                                bulletStart = richotte_blue;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                    } else if (obst === semirichotte_redd) {
                        const cell = document.querySelector(`.sq${semirichotte_redd}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& rotationAngle_r%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction='down';
                                bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+90)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                direction='up';
                                bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+180)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left < semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png") && (rotationAngle_r+270)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left < semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }

                         else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && rotationAngle_r%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left < semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+90)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                    direction='down';
                                    bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&& (rotationAngle_r+180)%360===0) {
                            if (bulletRect.left < semiricochetRect.right && bulletRect.right > semiricochetRect.left &&
                                bulletCenterX >= semiricochetCenterX - 5 && bulletCenterX <= semiricochetCenterX + 5) {
                                    direction='up';
                                    bulletStart=semirichotte_redd;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png") && (rotationAngle_r+270)%360===0) {
                            if (bulletRect.right > semiricochetRect.left && bulletRect.left < semiricochetRect.right &&
                                bulletRect.top < semiricochetRect.bottom && bulletRect.bottom > semiricochetRect.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                    }
                    else if (obst === semirichotte_bluee) {
                        const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                        if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& rotationAngle_b%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction='down';
                                bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+90)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                direction='up';
                                bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+180)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left < semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png") && (rotationAngle_b+270)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left < semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }

                         else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && rotationAngle_b%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left < semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+90)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                    direction='down';
                                    bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&& (rotationAngle_b+180)%360===0) {
                            if (bulletRect.left < semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left &&
                                bulletCenterX >= semiricochetCenterX_b - 5 && bulletCenterX <= semiricochetCenterX_b + 5) {
                                    direction='up';
                                    bulletStart=semirichotte_bluee;
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                        else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png") && (rotationAngle_b+270)%360===0) {
                            if (bulletRect.right > semiricochetRect_b.left && bulletRect.left < semiricochetRect_b.right &&
                                bulletRect.top < semiricochetRect_b.bottom && bulletRect.bottom > semiricochetRect_b.top) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                            } else {
                                bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                            }
                        }
                         
                        }
                    else 
                         {
                                if ((bulletRect.left < gameAreaRect.left)) {
                                    clearInterval(bulletInterval);
                                    bullet.remove();
                                    switchPlayer();
                                } else {
                                    bullet.style.left = `${parseFloat(bullet.style.left) - 5}px`;
                                }
                     }
                }
                else if(direction==='up'){
                            const ricochetCenterY = ricochetRect.top + ricochetRect.height / 2;
                            const ricochetCenterY_b = ricochetRect_b.top + ricochetRect_b.height / 2;
                            const semiricochetCenterY = semiricochetRect.top + semiricochetRect.height / 2;
                            const semiricochetCenterY_b = semiricochetRect_b.top + semiricochetRect_b.height / 2;
                const obst = first_obstacle_up(bulletStart);
                if (obst === tankmySideIndex) {
                    if (bulletRect.bottom > tankRect_b.top && bulletRect.top < tankRect_b.bottom &&
                        bulletRect.left < tankRect_b.right && bulletRect.right > tankRect_b.left) {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        switchPlayer();
                    } else {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                    }
                } else if (obst === tankOpponentIndex) {
                    if (bulletRect.bottom > tankRect.top && bulletRect.top < tankRect.bottom &&
                        bulletRect.left < tankRect.right && bulletRect.right > tankRect.left) {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        switchPlayer();
                    } else {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                    }
                } else if (obst === firstrow_canonindex) {
                    if (bulletRect.bottom > cannonRect_b.top && bulletRect.top < cannonRect_b.bottom &&
                        bulletRect.left < cannonRect_b.right && bulletRect.right > cannonRect_b.left) {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        switchPlayer();
                    } else {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                    }
                }
                else if (obst === lastrow_canonindex) {
                    if (bulletRect.bottom > cannonRect.top && bulletRect.top < cannonRect.bottom &&
                        bulletRect.left < cannonRect.right && bulletRect.right > cannonRect.left) {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        switchPlayer();
                    } else {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                    }
                } else if (obst === titan_opponent) {
                    if (bulletRect.bottom > titanRect_r.top && bulletRect.top < titanRect_r.bottom &&
                        bulletRect.left < titanRect_r.right && bulletRect.right > titanRect_r.left) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                    } else {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                    }
                } 
                else if (obst === titan_myside) 
                    {
                    if (bulletRect.bottom > titanRect_b.top && bulletRect.top < titanRect_b.bottom &&
                        bulletRect.left < titanRect_b.right && bulletRect.right > titanRect_b.left)
                    {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        isGameOver = true;
                        alert(`${currentPlayer} wins!`);
                       
                    } 
                    else 
                    {
                        bullet.style.top = `${parseFloat(bullet.style.top) - 4}px`;
                    }
                } 
                else if (obst === richotte_red) 
                    {
                    const cell = document.querySelector(`.sq${richotte_red}`);
                    if (cell.querySelector('img').src.includes("richotte_right.png")) {
                        if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                            bulletCenterY >= ricochetCenterY - 5 && bulletCenterY <= ricochetCenterY + 5) 
                            {
                            direction = 'right';
                            bulletStart = richotte_red;
                        } 
                        else 
                        {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } 
                    else if (cell.querySelector('img').src.includes("richotte_left.png")) 
                        {
                        if (bulletRect.left < ricochetRect.right && bulletRect.right > ricochetRect.left &&
                            bulletCenterY >= ricochetCenterY - 5 && bulletCenterY <= ricochetCenterY + 5) {
                            direction = 'left';
                            bulletStart = richotte_red;
                        } 
                        else 
                        {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                }
                else if (obst === richotte_blue) {
                    const cell = document.querySelector(`.sq${richotte_blue}`);
                    if (cell.querySelector('img').src.includes("richotte_right_blue.png")) {
                        if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                            bulletCenterY >= ricochetCenterY_b - 5 && bulletCenterY <= ricochetCenterY_b + 5) {
                            direction = 'right';
                            bulletStart = richotte_blue;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } else if (cell.querySelector('img').src.includes("richotte_left.png")) {
                        if (bulletRect.left < ricochetRect_b.right && bulletRect.right > ricochetRect_b.left &&
                            bulletCenterY >= ricochetCenterY_b - 5 && bulletCenterY <= ricochetCenterY_b + 5) {
                            direction = 'left';
                            bulletStart = richotte_blue;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                }
                else if (obst === semirichotte_redd) {
                    const cell = document.querySelector(`.sq${semirichotte_redd}`);
                    if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& rotationAngle_r%360===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='right';
                            bulletStart=semirichotte_redd;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&&(rotationAngle_r+90)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }  
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&&(rotationAngle_r+180)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } 
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_left.png")&& (rotationAngle_r+270)%360===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='left';
                            bulletStart=semirichotte_redd;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } 
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&&(rotationAngle_r%360)===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='left';
                            bulletStart=semirichotte_redd;

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&&(rotationAngle_r+90)%360===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='right';
                            bulletStart=semirichotte_redd;

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&&(rotationAngle_r+180)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_red_right.png")&&(rotationAngle_r+270)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                } else if (obst === semirichotte_bluee) {
                    const cell = document.querySelector(`.sq${semirichotte_bluee}`);
                    if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& rotationAngle_r%360===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='right';
                            bulletStart=semirichotte_redd;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&&(rotationAngle_r+90)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }  
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&&(rotationAngle_r+180)%360===0) {
                        if (bulletRect.top < semiricochetRect.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } 
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_left.png")&& (rotationAngle_r+270)%360===0) {
                        if (bulletRect.left<semiricochetRect.right && bulletRect.right > semiricochetRect.left && bulletCenterY<semiricochetCenterY && bulletRect.bottom>semiricochetCenterY) {
                            direction='left';
                            bulletStart=semirichotte_redd;
                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    } 
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&&(rotationAngle_b%360)===0) {
                        if (bulletRect.left<semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left && bulletCenterY<semiricochetCenterY_b && bulletRect.bottom>semiricochetCenterY_b) {
                            direction='left';
                            bulletStart=semirichotte_bluee;

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&&(rotationAngle_b+90)%360===0) {
                        if (bulletRect.left<semiricochetRect_b.right && bulletRect.right > semiricochetRect_b.left && bulletCenterY<semiricochetCenterY_b && bulletRect.bottom>semiricochetCenterY_b) {
                            direction='right';
                            bulletStart=semirichotte_bluee;

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&&(rotationAngle_b+180)%360===0) {
                        if (bulletRect.top < semiricochetRect_b.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                    else if (cell.querySelector('img').src.includes("semi_richotte_blue_right.png")&&(rotationAngle_b+270)%360===0) {
                        if (bulletRect.top < semiricochetRect_b.bottom) {
                            clearInterval(bulletInterval);
                            bullet.remove();
                            switchPlayer();

                        } else {
                            bullet.style.top = `${parseFloat(bullet.style.top) - 5}px`;
                        }
                    }
                } 
                else {
                    if ((bulletRect.top < gameAreaRect.top)) {
                        clearInterval(bulletInterval);
                        bullet.remove();
                        switchPlayer();
                    } else {
                        bullet.style.top = `${bullet.offsetTop - 5}px`;
                    }
                } 
                }
        },20);
        }
        
function getRect(element) {
    return element.getBoundingClientRect();
}
function first_obstacle_up(index) {
    for (let i = index - 8; i >= 0; i -= 8) {
        const cell = document.querySelector(`.sq${i}`);
        if (cell.classList.contains('tank_opponent') ||
            cell.classList.contains('tank_myside') ||
            cell.classList.contains('titan_blue') ||
            cell.classList.contains('titan_red') ||
            cell.classList.contains('richo_blue') ||
            cell.classList.contains('richo_red')||
            cell.classList.contains('semi_blue') ||
            cell.classList.contains('semi_red')||cell.classList.contains('canon')) {
            return i;
        }
    }
    return -1; // No obstacle found
}
function first_obstacle_right(index) {
    const rowStart = Math.floor(index / 8) * 8;
    for (let i = index + 1; i < rowStart + 8; i++) {
        const cell = document.querySelector(`.sq${i}`);
        if (cell.classList.contains('tank_opponent') ||
            cell.classList.contains('tank_myside') ||
            cell.classList.contains('titan_blue') ||
            cell.classList.contains('titan_red') ||
            cell.classList.contains('richo_red') ||
            cell.classList.contains('richo_blue')||
            cell.classList.contains('semi_blue') ||
            cell.classList.contains('semi_red')||cell.classList.contains('canon')) {
            return i;
        }
    }
    return -1; // No obstacle found
}
function first_obstacle_left(index) {
    const rowStart = Math.floor(index / 8) * 8;
    for (let i = index - 1; i >= rowStart; i--) {
        const cell = document.querySelector(`.sq${i}`);
        if (cell.classList.contains('tank_opponent') ||
            cell.classList.contains('tank_myside') ||
            cell.classList.contains('titan_blue') ||
            cell.classList.contains('titan_red') ||
            cell.classList.contains('richo_red') ||
            cell.classList.contains('richo_blue')||
            cell.classList.contains('semi_blue') ||
            cell.classList.contains('semi_red')||cell.classList.contains('canon')) {
            return i;
        }
    }
    return -1; // No obstacle found
}
function first_obstacle_down(index) {
    for (let i = index + 8; i < 64; i += 8) {
        const cell = document.querySelector(`.sq${i}`);
        if (cell.classList.contains('tank_opponent') ||
            cell.classList.contains('tank_myside') ||
            cell.classList.contains('titan_blue') ||
            cell.classList.contains('titan_red') ||
            cell.classList.contains('richo_red') ||
            cell.classList.contains('richo_blue')||
            cell.classList.contains('semi_blue') ||
            cell.classList.contains('semi_red')||cell.classList.contains('canon')) {
            return i;
        }
    }
    return -1; // No obstacle found
}
let rotationAngle_r=0;
let rotationAngle_b=0;
function rotateBoard(angle) {
    console.log(currentPlayer);
   if(currentPlayer==="red"){
    console.log("red");
    rotationAngle_r+= angle;
    let  boardElement2=document.querySelector(`.sq${semirichotte_redd}`);
    let boardElement=boardElement2.querySelector('img');
    boardElement.style.transform = `rotate(${rotationAngle_r}deg)`;
    removeEventListeners_semi_r();
    removeHighlights();
    shootBullet_red();
   
   }
   else if(currentPlayer==="blue"){
    rotationAngle_b+= angle;
    let  boardElement1=document.querySelector(`.sq${semirichotte_bluee}`);
    let boardElement=boardElement1.querySelector('img');
    boardElement.style.transform = `rotate(${rotationAngle_b}deg)`;
    removeEventListeners_semi_b();
    removeHighlights();
    shootBullet_blue();
    
   }
   else{
    return;
   }  
}
let leftButton=document.querySelector('.leftButton');
let rightButton=document.querySelector('.rightButton');