let gameSeq = [];
let userSeq = [];
let btns = ["pink", "red", "purple", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector("." + randomColor);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);

}

function checkAnswer(index) {
    if (userSeq[index] == gameSeq[index]) {
        // NEXT LEVEL
        if (userSeq.length == gameSeq.length) {
            setTimeout(function () {
                levelUp();
            }, 1000);
        }
    
    } else {
        h2.innerText =
            "Game Over! Your level was " +
            level +
            ". Press any key to restart";


        
        document.body.classList.add("flashRed");
        setTimeout(function () {
            document.body.classList.remove("flashRed");
        }, 300);
        resetGame();
    }
}

function btnPress() {
    let btn = this;
    gameFlash(btn);
    let userColor = btn.classList[1];
    userSeq.push(userColor);
    checkAnswer(userSeq.length - 1);

}

let allButtons = document.querySelectorAll(".btn");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", btnPress);

}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}