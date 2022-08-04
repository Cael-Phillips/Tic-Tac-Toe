/**
 * Player Class that holds player name, number and symbol.
 */
class Player {
    constructor(name, num){
        this.name = name;
        this.num = num;
        switch(num){
            case 0:
                this.symbol = "DEBUG"
                break;
            case 1:
                this.symbol = "X"
                break;
            case 2:
                this.symbol ="O"
                break;
            default:
                console.log("Error with number and symbol assignment");
                break;
        }//switch
    }//constructor
    toString(){
        console.log(`Name:\t${this.name}\nPlayer Number:\t${this.num}\nPlayer Symbol:\t${this.symbol}`);
    }//toString
}//Player