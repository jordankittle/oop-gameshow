/* Jordan Kittle's Treehouse FSJS Techdegree Project 4 - OOP Game App
 * 
 */
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase();
 	}

 	addPhraseToDisplay(){
 		const div = document.getElementById('phrase');
 		const ul = div.firstElementChild;
 		const letters = this.phrase.split('');
 		for (let letter in letters){
 			if(letters[letter] === ' '){
 				ul.innerHTML += `<li class="space"> </li>`;
 			} else {
 				ul.innerHTML += `<li class="hide letter">${letters[letter]}</li>`;
 			}
 		}

 	}
 }