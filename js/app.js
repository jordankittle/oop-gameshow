/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var game;
var gameover = true;
document.getElementById('btn__reset').addEventListener('click', (e) => {
	game = new Game();
	game.startGame();
});

/**
*Listen for button clicks and call handleInteraction()
*
*/
document.getElementById('qwerty').addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON'){
		game.handleInteraction(e.target);
	}
});

document.addEventListener('keyup', (e) => {
	if(game && gameover === false){
		const letter = String.fromCharCode(e.keyCode).toLowerCase();
		if(/[a-z]/.test(letter) ){
			const buttons = document.querySelectorAll('#qwerty button');
			buttons.forEach((button) => {
				if (button.textContent === letter && !button.disabled){
					game.handleInteraction(button);
				}
			});
		}
	}
	if(e.key === "Enter" && gameover === true) {
		game = new Game();
		game.startGame();
	}
});
