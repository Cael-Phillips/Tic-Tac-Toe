const tO =  "tO" ;
const tT =  "tT" ;
const tTh =  "tTh" ;
const mO =  "mO" ;
const mT =  "mT" ;
const mTh =  "mTh" ;
const bO =  "bO" ;
const bT =  "bT" ;
const bTh =  "bTh" ;

const tr = [tO,tT,tTh];
const mr = [mO,mT,mTh];
const br = [bO,bT,bTh];

board = [tr,mr,br]
endText=document.getElementById("endMessage").innerText;
board.forEach(row => {
    row.forEach(cell => {
        box = document.getElementById(cell);
        box.innerText="";
        box.addEventListener("click", function () {
            currentPlayer.toString()
            document.getElementById(cell).innerText=currentPlayer.symbol;
            checks(board);
            swapPlayers();
        })//boxListener
    });//row
});//board
