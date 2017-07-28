// Variables that store data for the game
var wordChoices = ["compaq", "dell", "hewlett", "apple"];
var chosenWord = "";
var breakLetters = [];
var numBlanks = 0;
var blanksandCorrect = [];
var wrongGuesses = [];

// Counters that track the wins & losses
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

	//Functions

function startGame () {
	chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
	breakLetters = chosenWord.split("");
	numBlanks = breakLetters.length;

	//Reset for when starting the game
	guessesLeft = 9;
	wrongGuesses = [];
	blanksandCorrect = [];

	//For statements
	for (var i = 0; i < numBlanks; i++){
		blanksandCorrect.push("_");
	}

	document.getElementById("currentWord").innerHTML = blanksandCorrect.join(" ");
	document.getElementById("guessesRemaining").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;
	
	// Console push for startGame

	console.log(chosenWord);
	console.log(breakLetters);
	console.log(numBlanks);
	console.log(blanksandCorrect);

}

function checklet(letter) {
	// See if the letter presses is inside the page
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks.length; i++) {
		if(chosenWord[i] == letter){
			isLetterInWord = true;
		}
	}
	// See where the word exsists and push to blanks and correct
	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (chosenWord[i] == letter) {
				blanksandCorrect[i] = letter;
			}
		}
	}
			else {
		wrongGuesses.push(letter);
		guessesLeft--;

		}
		// Console push to see how many words were correct or blank

		console.log(blanksandCorrect);
	}

function roundComplete() {
	
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Gueses Left: " + guessesLeft);
	// Update HTMl with most recent updates
	document.getElementById("guessesRemaining").innerHTML = guessesLeft;
	document.getElementById("blankSpots").innerHTML = blanksandCorrect.join(" ");
	document.getElementById("lettersGuessed").innerHTML = wrongGuesses;

	if (breakLetters.toString() ==  blanksandCorrect.toString()) {
		winCount++;
		alert("Winner, you are getting a brand new computer!");
		document.getElementById("wins").innerHTML = winCount;
		startGame();
	}
	
	else if (guessesLeft == 0) {
		lossCount++;
		alert("No computer for you!");
		document.getElementById("lossCount").innerHTML = lossCount
	}
}

// End of funtions

	//Push console.log info to html to show on page
	document.getElementById("blankSpots").innerHTML = blanksandCorrect.join(" ");
	document.getElementById("guessesRemaining").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;

	//Test before logging to html
		
// Start Game to run the main process
startGame();

// when click a letter, this will log the letter pushed
document.onkeyup = function(event){
	var letGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	
	roundComplete;
	// Console push for the letters that are guessed
	console.log(letGuessed);
}