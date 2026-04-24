const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

// 2. 遊戲狀態變數 [cite: 641, 642, 643]
let countNum = 0; // 記錄猜測次數
let answer = Math.floor(Math.random() * 100) + 1; // 產生 1~100 的隨機答案

// 3. 檢查猜測的函式 [cite: 641, 644, 645, 646]
function checkGuess() {
    let userGuess = Number(guessField.value); // 取得欄位值並轉為數字
    
    if (countNum === 0) {
        guesses.textContent = "上次猜的數字：";
    }
    guesses.textContent += userGuess + " "; // 加入猜測歷程 [cite: 650]
    
    countNum++;
    count.textContent = "猜測次數：" + countNum;

    // 判斷邏輯 [cite: 644, 645, 646]
    if (userGuess === answer) {
        result.textContent = "猜測結果：Congratulations! 答對了！";
        result.style.backgroundColor = "lightgreen";
        setGameOver();
    } else if (countNum === 10) {
        result.textContent = "!!!遊戲結束!!! 正確答案是 " + answer;
        result.style.backgroundColor = "red";
        setGameOver();
    } else {
        if (userGuess < answer) {
            result.textContent = "猜測結果：數字太小!";
        } else if (userGuess > answer) {
            result.textContent = "猜測結果：數字太大!";
        }
        result.style.backgroundColor = "white";
    }

    guessField.value = ""; // 清空輸入框
    guessField.focus();    // 讓游標回到輸入框 [cite: 641]
}

// 4. 遊戲結束處理 [cite: 649, 651]
function setGameOver() {
    guessField.disabled = true;   // 停止輸入功能
    guessSubmit.disabled = true; // 停止按鈕功能
    restartBtn.style.display = "block"; // 顯示重新開始按鈕
}

// 5. 初始化/重新開始遊戲 [cite: 651]
function initGame() {
    countNum = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    
    result.textContent = "";
    result.style.backgroundColor = "transparent";
    count.textContent = "";
    guesses.textContent = "";
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    restartBtn.style.display = "none";
    
    guessField.value = "";
    guessField.focus();
}

// 6. 綁定監聽事件 [cite: 641, 651]
guessSubmit.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", initGame);