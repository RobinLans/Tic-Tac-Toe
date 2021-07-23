const boxes = document.querySelectorAll(".box");
const resetBtn2 = document.querySelector(".resetBtn1");
const resetBtn1 = document.querySelector(".resetBtn2");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const winnerText = document.querySelector("p");

let player1 = [];
let player2 = [];

boxes.forEach((e, index) => {
    e.addEventListener("click", () => {
        if (!e.innerText) {
            console.log(e.innerText);
            if (player1.length === player2.length) {
                e.innerHTML = "X";
                player1.push(index + 1);
                if (player1.length >= 3) {
                    if (checkIfWin(player1)) {
                        console.log("player 1 won");
                        modal.classList.remove("hidden");
                        overlay.classList.remove("hidden");
                        winnerText.innerText = "Player 1 won";
                    }
                }
            } else if (player2.length < player1.length) {
                e.innerHTML = "O";
                player2.push(index + 1);
                if (player2.length >= 3) {
                    if (checkIfWin(player2)) {
                        console.log("player 2 won");
                        modal.classList.remove("hidden");
                        overlay.classList.remove("hidden");
                        winnerText.innerText = "Player 2 won";
                    }
                }
            }
            if (player1.length === 5 && player2.length === 4) {
                if (!checkIfWin(player1) && !checkIfWin(player2)) {
                    modal.classList.remove("hidden");
                    overlay.classList.remove("hidden");
                    winnerText.innerText = "Draw";
                    console.log("jag är blg");
                }
            }
        }
    });
});

function checkIfWin(array) {
    if (array.includes(1) && array.includes(2) && array.includes(3))
        return true;
    if (array.includes(4) && array.includes(5) && array.includes(6))
        return true;
    if (array.includes(7) && array.includes(8) && array.includes(9))
        return true;
    if (array.includes(1) && array.includes(4) && array.includes(7))
        return true;
    if (array.includes(2) && array.includes(5) && array.includes(8))
        return true;
    if (array.includes(3) && array.includes(6) && array.includes(9))
        return true;
    if (array.includes(1) && array.includes(5) && array.includes(9))
        return true;
    if (array.includes(3) && array.includes(5) && array.includes(7))
        return true;
}

resetBtn1.addEventListener("click", reset);
resetBtn2.addEventListener("click", reset);

function reset() {
    boxes.forEach((e) => {
        e.innerHTML = "";
    });
    player1 = [];
    player2 = [];
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

/*Winning combinations: 
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,5,9]
    [3,5,7]
*/
