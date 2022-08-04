let messegeEl=document.getElementById("messege-el");
let messege=""
let cardEl=document.querySelector("#card-el")
let sumEl=document.getElementById("sum-el")

let cards=[];
let sum=0


let havejackBlack=false;
let alive=false
function getRandomNo(){
    randomNum=Math.floor(Math.random()*13)+1
    if(randomNum>10){
        return 10
    }
    else if(randomNum===1){
        return 11
    }
    else {
        return randomNum
    }
}
function startGame(){
    alive=true
    let firstNo=getRandomNo();
    let secondNo=getRandomNo();
    cards=[firstNo,secondNo] 
    sum=firstNo+secondNo

    renderGame()
}

function renderGame(){
    cardEl.textContent="Cards : "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=" "+cards[i]
    }
    sumEl.textContent="Sum : "+sum;
    if(sum<20){
        messege="Do you want to draw a new card?"
    }
    else if(sum===20){
        messege="You have to got blackjack"
        havejackBlack=true;
        
    }
    else{
        messege="You are out of the game";
        alive=false
    }
    messegeEl.textContent=messege
    
}
    
function newCard(){
    if(alive===true&&havejackBlack===false){
        let card=getRandomNo();
        sum+=card
        cards.push(card)
        
        renderGame()
        console.log(cards)
    }
    
}