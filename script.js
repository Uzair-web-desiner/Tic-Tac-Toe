let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let winner = document.querySelector('#winner')
let newGame = document.querySelector('#new-game');
let turnO = true;
let msg = document.querySelector('.msg');
let count = 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let boxdisable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
reset.addEventListener('click', () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ''
    }
    count=0
})
newGame.addEventListener('click', () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ''
        msg.style.display = 'none'
        turnO = true;
        
    }
    count=0
})

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O'
            turnO = false

        } else {
            box.innerText = "X"
            turnO = true

        }
        count = count + 1
        checkWinner();
        box.disabled = true;
        if (count==9) {
            winner.innerText = 'The match was Draw'
            msg.style.display = 'flex'
            count=0
        }    
    })
})

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 == pos2 && pos2 == pos3) {
                if (pos1 == 'O') {
                    winner.innerText = 'Winner is Player 1'
                    msg.style.display = 'flex'
                    boxdisable()
                    
                } else if (pos1 == 'X') {
                    winner.innerText = 'Winner is Player 2'
                    msg.style.display = 'flex'
                    boxdisable()
                } 
            }
            
        }
    }
}

boxes.forEach((box)=>{
    
})