//CrystalsCollector Game

//declare variables
var totalWins = 0;
var totalLosses = 0;

var totalScore;

var randomNumber;
var crystal1Random;
var crystal2Random;
var crystal3Random;
var crystal4Random;

//event listeners
$('#crystal-1').click(function() {
    totalScore += crystal1Random;
    console.log('+' + crystal1Random);
    winCheck();
});
$('#crystal-2').click(function() {
    totalScore += crystal2Random;
    console.log('+' + crystal2Random);
    winCheck();
});
$('#crystal-3').click(function() {
    totalScore += crystal3Random;
    console.log('+' + crystal3Random);
    winCheck();
});
$('#crystal-4').click(function() {
    totalScore += crystal4Random;
    console.log('+' + crystal4Random);
    winCheck();
});

//check for win or lose
function winCheck(){
    //update total score
    $('#total').html(totalScore);
    //score logic
    if (totalScore === randomNumber){
        totalWins++;
        $('#total-wins span').html(totalWins);
        resetRandoms();
    } else if (totalScore > randomNumber) {
        totalLosses++;
        $('#total-losses span').html(totalLosses);
        resetRandoms();
    }
}

//reset function
function resetRandoms(){
    randomNumber = 19 + Math.floor(Math.random() * 120);
    $('#random-number h2').html(randomNumber);
    crystal1Random = 1 + Math.floor(Math.random() * 12);
    crystal2Random = 1 + Math.floor(Math.random() * 12);
    crystal3Random = 1 + Math.floor(Math.random() * 12);
    crystal4Random = 1 + Math.floor(Math.random() * 12);
    totalScore = 0;
    $('#total').html(totalScore);
}

//initiate scores
resetRandoms();