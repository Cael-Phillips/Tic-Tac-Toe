var currentPlayer;

function init() {
    debugPlayer = new Player("DEBUG", 0);
    currentPlayer = debugPlayer;
    document.getElementById('playerEntry').style.display = "block";
    document.getElementById('gameboard').style.display = "none";
}