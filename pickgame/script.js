//This is the testing for the pull....

var score, roundScore, activePlayer;
score =[0,0];
activePlayer = 0;
roundScore = 0;



document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';









document.querySelector('.btn-roll').addEventListener('click', function(){
var dice = Math.floor(Math.random() * 6)+1;
   // document.querySelector('#current-'+activePlayer).textContent = dice;
   document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice +'</em>';
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';

//if (dice !== 1) type coercion
   if (dice !== 1){
       roundScore += dice;
       document.querySelector('#current-'+activePlayer).textContent = roundScore;
   }
   else{
      
        nextPlayer();

       }
   

   
});



document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add current score to the Global score
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    if(score[activePlayer] >= 10){

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!!'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';

    }
    else {

         nextPlayer();
    }
  



});


function nextPlayer(){

     activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
       roundScore = 0;
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       document.querySelector('.dice').style.display = 'none';
       //document.querySelector('.player-0-panel').classList.remove('active');
       //document.querySelector('.player-1-panel').classList.add('active');

       

}
