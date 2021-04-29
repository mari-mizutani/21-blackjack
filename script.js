//card array
let deck = [1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10];

//define Player and Dealer variable
let playerHand ;
let dealerHand ;


//START -- click and show first 2 cards of player
document.getElementById("start").addEventListener("click", function() {  

    //randomly choose
    function drawRandomCard(deck){
        let randomChoice = Math.floor(deck.length * Math.random());
        return deck[randomChoice];
    }

    //first 2cards for each
    function startGame(){
        playerHand = [drawRandomCard(deck),drawRandomCard(deck)];
        dealerHand = [drawRandomCard(deck),drawRandomCard(deck)];
    }
    startGame(); 


    //show the cards
    document.getElementById("player-hand").innerHTML = playerHand; 
    document.getElementById("dealer-hand").innerHTML = dealerHand; 

    //calculate the cards
    function getHandValue(hand){
        let sum = 0;
        for(let i=0; i<hand.length; i++){
        sum += hand[i];
        } 
        return sum;   
       }; 


    //show the total values
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand); 
    document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand); 
});


//HIT --- click and give 1 card
document.getElementById("hit").addEventListener("click", function() {  
    function hit(){
        playerHand.push(drawRandomCard(deck));
        if(getHandValue(playerHand) > 21){
          document.getElementById("game-status").innerHTML= "BUST!";
        }
});  

    document.getElementById("player-hand").innerHTML = playerHand;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand) ;
    document.getElementById("dealer-hand").innerHTML = dealerHand;
    document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand) ;




