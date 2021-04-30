//card array
let deck = [1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10];

//define Player and Dealer variable
let playerHand ;
let dealerHand ;

//randomly choose
function drawRandomCard(deck){
    let randomChoice = Math.floor(deck.length * Math.random());
    return deck[randomChoice];
}

//calculate the cards
function getHandValue(hand){
    let sum = 0;
    for(let i=0; i<hand.length; i++){
    sum += hand[i];
    } 
    return sum;   
}; 


//START -- click and show first 2 cards of player
document.getElementById("start").addEventListener("click", function() {  
  
    //first 2cards for each
    function startGame(){
        playerHand = [drawRandomCard(deck),drawRandomCard(deck)];
        dealerHand = [drawRandomCard(deck),drawRandomCard(deck)];
    }
    startGame(); 

    //show the cards
    document.getElementById("player-hand").innerHTML = playerHand; 
    document.getElementById("dealer-hand").innerHTML = "?"; 


    //show the total values
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand); 
});


//HIT --- click and give 1 card
document.getElementById("hit").addEventListener("click", function() {  

    function hit(){
       playerHand.push(drawRandomCard(deck));
       dealerHand.push(drawRandomCard(deck));
    } 
    hit()
    
    //show the cards
    document.getElementById("player-hand").innerHTML = playerHand; 


    //if the total become over 21, says 'BUST'
    if(getHandValue(playerHand)>21){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)  + "  BUST!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        //show the total values 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand); 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
        
    }else if((getHandValue(playerHand)<21) && (getHandValue(dealerHand)==21)){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)+ "  YOU LOST!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand); 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 

    }else if((getHandValue(playerHand)<21) && (getHandValue(dealerHand)<21)){
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand); 
    }
    else if((getHandValue(playerHand)<21) && (getHandValue(dealerHand)>21)){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand) + "  WIN!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand) + "  BUST!"; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
    }
    else if((getHandValue(playerHand)=21) && (getHandValue(dealerHand)>21)){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand) + "  WIN!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand) + "  BUST!"; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
    }

});


//STAND
document.getElementById("stand").addEventListener("click", function() {  
    
    if((getHandValue(playerHand)<=21) && ((21 - getHandValue(playerHand) )< (21 - getHandValue(dealerHand)))){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)  + "  WIN!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    }
    else if((getHandValue(playerHand)<=21) && (getHandValue(dealerHand>21))){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)  + "  WIN!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    }
    else if((getHandValue(playerHand)>21) && (getHandValue(dealerHand<=21))){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)  + "  LOST!"; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    }
    else if((21 - getHandValue(playerHand)) == (21 - getHandValue(dealerHand))){
        document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand)  + "  TIE!"; 
        document.getElementById("player-hand").innerHTML = playerHand; 
        document.getElementById("dealer-hand").innerHTML = dealerHand; 
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    }

});


//RESET
document.getElementById("reset").addEventListener("click", function() { 
    getHandValue(playerHand)*0;
    getHandValue(dealerHand)*0;
    document.getElementById("player-hand").innerHTML =  "Player's Hand"; 
    document.getElementById("player-hand-value").innerHTML = "";
    document.getElementById("dealer-hand").innerHTML = "Dealer's Hand";     
    document.getElementById("dealer-hand-value").innerHTML = "";
});