// // declare function named "lengths"
// // that accepts a arguments named "arrayOfStrings"
// constlengths = (arrayOfStrings) => {

//   // we can log out our "arrayOfStrings"
//   console.log(arrayOfStrings);

//   // now, we want to "return" something... but what?

//   return whateverVariableYouWantToReturnHere;

// }






// const back = (somestr) =>{
// 	 somestr.split('') ==

// }

// console.log(back('hi'))



// var x = 1;
// for (var i = 0; i < 3; i++) {
	
//   x += 5 * i;
//   console.log([i])
// }
// console.log(x);

// const anagram = (one, two) =>{
// 	if (one.split('') == 's' && two.split('') == 'shell'){
// 		console.log(one)
// 		return true
// 	}else{
// 		return false
// 	}
// }

// console.log(anagram('sea', 'shell'))













// //round 1
 


const lengths = (arrayOfStrings) =>{
	
	const numberString = arrayOfStrings

for (let i = 0; i < numberString.length - 2; i++){
	numberString[i] += arrayOfStrings[i].length 
		};
		return numberString
};

console.log(lengths(['green', 'blue', 'bob', 'glob']))


// // //Round 2
// const transmogrifier = (x,y,z) =>{
// const sup = Math.pow((x * y), z);
// return sup
// }
// console.log(transmogrifier(5, 4, 3))


// //Round 3

// const sentence = "so you smell like sausage";

// const toonify = (accent, sentence) =>{
// 	if(accent === 'daffy'){
// 		console.log(sentence.split('s').join('th')), ('__<this array split')
// 	}
// }



// const tooney = (accent, sentence)=> {
// 	if(accent === 'daffy'){
// 		return sentence.replace(/s/g, 'th')
// 	} else if(accent === 'elmer'){
// 		return sentence.replace(/r/g, 'w')
// 	}else{
// 		return sentence
// 	}
// };
// console.log(tooney('daffy','you smell like sausage'))





// //Round 4

// const stringWord = 'hello'

// const wordReverse = (backwards) =>{
// 	//creating a new const with a broken up string in an array
// 	const wordInString = backwards.split(''); 
// 	console.log(wordInString, ' this is wordInString variable')

// 	// take the broken string in the array and flip it
// 	wordInString.reverse();
// 	console.log(wordInString, ' wordInString after its reversed')
// 	// backwars.split() = wordInString.reverse();

// 	//now I want to put the letters back together into the word as a string
// 	// loop through to grab each letter and concatnat them together into a new const
// 	for (let i = 0; i < wordInString.length; i++){
// 		//create a new const and assigning it to the backwords variable
// 		//then bring them together
// 		const newWord = wordInString[i] + '';
// 		//newWord is now the new const and trying to bring them together

// 		console.log(newWord, 'is this togther')
// 	}
	
// }



// //round 5



// const letterReverse = (someString) =>{
// 	//creating a new const to hold the split
// 	const newWord = someString.split('')
// 	//in the hopes that the string is now split
// 	console.log(newWord, 'is now someString')
// 	//take newWord and reverse it
// 	newWord.reverse().join(' ')
// 	console.log(newWord, 'does it work?')
// 	//it WORKED

// }

// //round 6

// const longest = (anArrayOfStrings) =>{
// 	//creating a new const to hold the array of strings
// 	let newArray = '';

// 	for (let i = 0; i < anArrayOfStrings.length; i++){
// 		if(anArrayOfStrings[i].length >= newArray.length){
// 			newArray = anArrayOfStrings[i]
// 		}
// 	}
// 	return newArray
// }

// //FINAL ROUND

// const repMaster = (input, someString) => {

//     return (someString(input) + 'proves that I am the rep MASTER!')
//     console.log(input,'jai')
//     console.log(someString, 'dafd')
// };

// const someString = (input) => {

// return input.toUpperCase()

// };
// repMaster('I finished the practice', someString);









// const sentOb = {
// 	sentence: 'blajajajjaj jajd jajd',
// 	addPeriod() {
// 		this.sentence += '.'
// 	}
// }

// sentOb.addPeriod = () =>{
// 	console.log('this')
// 	this.sentence += '.'
// }

// // nameSpacing
// const app = app  || {};




// const arr = [

// 	[1,2,3],
// 	[4,5,6]
// ]
// console.log(arr[0][1])
// //to call in the console it would be
// //arr [0] would show [1,2,3]
// //arr [1] would show [4,5,6]












