/* Jordan Kittle's Treehouse FSJS Techdegree Project 4 - OOP Game App
 * 
 */
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase();
 	}

 	 /**
 	 *Adds the phrase to the DOM
 	 *
 	 */
 	addPhraseToDisplay(){
 		const div = document.getElementById('phrase');
 		const ul = div.firstElementChild;
 		const letters = this.phrase.split('');

 		letters.forEach((letter) => {
 			console.log(letter);
 		});

 		/*for (let letter in letters){
 			if(letters[letter] === ' '){
 				ul.innerHTML += `<li class="space"> </li>`;
 			} else {
 				ul.innerHTML += `<li class="hide letter ${letters[letter]}">${letters[letter]}</li>`;
 			}
 		}*/
 		const openSpan = `<span class="word">`;
 		const closeSpan = `</span>`;
 		ul.innerHTML = openSpan + ul.innerHTML;
 		ul.innerHTML += closeSpan;

 	}

 	/**
 	 *Checks if letter matches any letters in the phrase
 	 *@param {string} The letter to check
 	 *@return {boolean} Returns true or false if the letter matches any letters in the phrase;
 	 */
 	checkLetter(letter){
 		for(let i=0; i<this.phrase.length; i++){
 			return (this.phrase.includes(letter));
 		}
 	}

 	/**
 	 *Reveals matched letters on the screen
 	 *@param {string} The letter to reveal
 	 *
 	 */
 	showMatchedLetter(letter){
 		const ul = document.getElementById('phrase').firstElementChild; ;
 		const matchedElements = ul.querySelectorAll(`.${letter}`);
 		matchedElements.forEach((li) => {
 			li.classList.add('show');
 			li.classList.remove('hide');
 		} );
 	}
 }	