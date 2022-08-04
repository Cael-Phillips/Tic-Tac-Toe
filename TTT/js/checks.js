function checks(board){
    if (rows(board)){
        document.getElementById("endMessage").innerText = `${currentPlayer.name} wins through rows!`;
        end(board);
    }
    if (columns(board)) {
        document.getElementById("endMessage").innerText = `${currentPlayer.name} wins through columns!`;
        end(board);
    }
    if (diagonals(board)) {
        document.getElementById("endMessage").innerText = `${currentPlayer.name} wins through diagonals!`;
        end(board);
    }
}//checks

function rows(board){
    let confirm=0;
    let ref = "";
    for (let i = 0; i < board.length; i++) {
        ref = document.getElementById(board[i][0]).innerText;
        for (let j = 0; j < board.length; j++) {
            const box = document.getElementById(board[i][j]).innerText;
            if (box === ref && box != "") {
                confirm++;
            }else{
                confirm=0;
            }
            if (confirm===3) {
                return true;
            }//if
        }//for
    }//for
    return false;
}//rows
function columns(board){
    let confirm=0;
    let ref = "";
    for (let i = 0; i < board.length; i++) {
        ref = document.getElementById(board[0][i]).innerText;
        for (let j = 0; j < board.length; j++) {
            const box = document.getElementById(board[j][i]).innerText;
            if (box === ref && box != "") {
                confirm++;
            }else{
                confirm=0;
            }
            if (confirm===3) {
                return true;
            }//if
        }//for
    }//for
    return false;
}//coumns
function diagonals(board){
    if (document.getElementById(board[0][0]).innerText != "" && document.getElementById(board[0][0]).innerText===document.getElementById(board[1][1]).innerText && document.getElementById(board[0][0]).innerText ===document.getElementById(board[2][2]).innerText){
        return true;
    }//if
    if (document.getElementById(board[0][2]).innerText != "" && document.getElementById(board[0][2]).innerText===document.getElementById(board[1][1]).innerText && document.getElementById(board[0][2]).innerText===document.getElementById(board[2][0]).innerText){
        return true;
    }//if
    return false;
}//diagonals