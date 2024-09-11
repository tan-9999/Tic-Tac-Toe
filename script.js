let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgCon = document.querySelector(".m-container");
let msg = document.querySelector("#message");

let turnO = true;//plaver1,//player2

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgCon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

//------------
const disableBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
//-------------
const showWinner = (winner) => {
    msg.innerText = `Congratulations!!, Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            };
        };

    };
};

newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)