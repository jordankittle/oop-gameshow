/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createPhrases();
 		this.activePhrase = null;
 	}
 	/**
 	 *Creates phrases
 	 *@return {array} An array of phrases
 	 */
 	createPhrases(){
 		const phraseList = new Data();
 		return phraseList.list.map( (phrase) => {
 			phrase.phrase = phrase.phrase.toLowerCase();
 			return phrase;
 		} );
 	}

 	/**
 	 *Gets a random phrase from the phrases property
 	 *@return {Object} A phrase object
 	 */
 	getRandomPhrase(){
 		const phrase = new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)].phrase);
 		return phrase;

 	}

 	/**
 	 *Starts the game by selecting and displaying a random phrase
 	 *
 	 */
 	startGame(){
 		gameover = false;
 		this.resetGame();
 		const startScreen = document.getElementById('overlay');
 		startScreen.style.display = 'none';
 		const randomPhrase = this.getRandomPhrase();
 		this.activePhrase = randomPhrase;
 		this.activePhrase.addPhraseToDisplay();
 	}

 	/**
 	 *Clear the board for a new game
 	 *
 	 */
 	resetGame(){
 		const start = document.querySelector('#overlay');
 		start.className = 'start';
 		const ul = document.querySelector('#phrase ul');
 		ul.innerHTML = '';
 		const keyboardButtons = document.querySelectorAll('#qwerty button');
 		keyboardButtons.forEach((button) => {
 			button.className = 'key';
 			button.disabled = false;
 		});
 		const hearts = document.querySelectorAll('#scoreboard li');
 		hearts.forEach((heart) => {
 			heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
 		});

 	}


 	/**
 	 *Handle the action of a button click in the keyboard
 	 *
 	 */
 	handleInteraction(button){
 		const letter = button.textContent;
 		if(this.activePhrase.checkLetter(letter) ){
 			button.disabled = true;
 			button.className = 'chosen';
 			this.activePhrase.showMatchedLetter(letter);
 			if(game.checkForWin() ){
 				this.gameOver(true);
 			}
 		} else {
 			button.disabled = true;
 			button.className = 'wrong';
 			this.removeLife();
 		}
 	}



 	/**
 	 *Checks to see if the players has revealed all the letters and won the game
 	 *
 	 */
 	checkForWin(){
 		let winner = true;
 		const letters = document.querySelectorAll('#phrase li');
 		letters.forEach( (letter) => {
 			if(letter.classList.value.includes('hide') ){
 				winner = false;
 			}
 		});
 		return winner;
 	}

 	/**
 	 *Removes a life when player guesses wrong and changes one blue heart to a grey heart
 	 *If the last life is lost, call gameOver()
 	 */
 	removeLife(){
 		const tries = document.querySelectorAll('#scoreboard li');
 		tries[this.missed++].innerHTML = `<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30">`;
 		if (this.missed === 5){
 			this.gameOver(false);
 			//return false;
 		}
 	}

 	/**
 	 *Displays Game Over on the screen when player is out of lives
 	 *
 	 */
 	gameOver(gameWon){
 		const startScreen = document.getElementById('overlay');
 		startScreen.style.display = '';
 		if(gameWon){
 			startScreen.querySelector('h1').textContent = 'Winner!';
 			startScreen.classList.add('win');
 		} else {
 			startScreen.querySelector('h1').innerHTML = `
 				Sorry, try again!<br>
 				<span id="answer">Show answer</span> 
 			`;
 			document.getElementById('answer').addEventListener('click', () => {
 				document.getElementById('answer').textContent = `"${this.activePhrase.phrase}"`;
 			})
 			startScreen.classList.add('lose');
 		}
 		gameover = true;

 	}
 }