playerList=[]
function start(pOne,pTwo){
    playerList.push(pOne)
    playerList.push(pTwo)
    currentPlayer=pOne;
}
function swapPlayers(){
    switch (currentPlayer.num) {
        case 1:
            currentPlayer=playerList[1];
            break;
        case 2:
            currentPlayer=playerList[0];
            break;
        default:
            break;
    }//switch
}//swapPlayers
function end(board){
    board.forEach(row => {
        row.forEach(cell => {
            box = document.getElementById(cell);
            box.innerText="";
            box.removeEventListener("click", function () {
                document.getElementById(cell).innerText=currentPlayer.symbol;
                checks(board);
                swapPlayers();
            })//boxListener
        });//row
    });//board
}