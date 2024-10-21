// 1. 랜덤번호 가져오기
// 2. 
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!! 
//랜덤번호가 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable 이 된다)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려주며, 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 알려주며, 기회를 깍지 않는다
let gameNumber = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
    userInput.value=""
})

function getRandomNum(){
    gameNumber = Math.floor(Math.random()*100);
    console.log("정답", gameNumber)
}
function play(){
    let userValue = userInput.value;
    
    if(1 > userValue || userValue > 100){
        resultArea.textContent = "1 ~ 100 범위 안 숫자를 입력하세요!"
        return;
    }
    
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다!"
        return;
    }

    chances --;
    chanceArea.textContent=`남은기화:${chances}번`
    console.log("chances", chances)
    
    if(userValue < gameNumber){
        resultArea.textContent ="UP!"
        console.log("UP!")
    } else if(userValue > gameNumber){
        resultArea.textContent ="DOWN!"
        console.log("Down!")
    } else {
        resultArea.textContent ="니론대네!"
        console.log("니 론대네!")
    }
    if(chances < 1){
        gameOver=true
    }
    if(gameOver==true){
        playButton.disabled = true;
    }
    history.push(userValue)
    console.log(history)

}

function reset(){
    resultArea.textContent="다시 함 가보자"
    userInput.textContent=""
    getRandomNum()
}

getRandomNum()
