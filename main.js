// Task #1: create input variable equal to a phrase
let input = 'We are all made of stardust.';

// Task #2: create vowels array equal to lowercase vowels a, e, i, o, u. This variable will not update.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Task #3: create resultsArray variable and set it equal to an empty array. (will serve as a place to store vowels from input string.)
const resultsArray = [];

// Task #4: create a loop that iterates through each letter of the phrase in the input variable.
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
 
  // Task #5: log the iterator numbered position in the for loop and run the code. Comment the code out once you receive the count of number of characters in your input string.
  //console.log(`inputIndex is ${inputIndex}`);

  // Task #10: whales double their e's & u's in their language. Write an if statement that checks if each letter in the input string is an 'e'. If so, use .push() to add inpiut[i] to the resultsArray. Place this code before the inner for loop (vowelIndex) that is inisde the outer for loop (inputIndex)
  if(input[inputIndex] === 'e') {
    resultsArray.push(input[inputIndex]);
  } // closing for doubling e

  // Task #11: repeate the double e code for u's.
  if(input[inputIndex] === 'u') {
    resultsArray.push(input[inputIndex]);
  } // closing for double u

  // Task #6: create a nested for loop inside the input for loop that iterates through the vowels array each time the input array runs
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {

    // Task #7: check your work. log the iterator number positions inside the inner for loop (vowels loop). You should see o through 4 repeated because there are 5 elements in the vowels array. Comment the code out once you receive the correct ouput.
    //console.log(`vowelIndex is ${vowelsIndex}`);

    // Task #8: inside the 2nd for loop (vowelsIndex) write a block of code that compares the input letter to every letter in the vowels array.
    if (input[inputIndex] === vowels[vowelsIndex]) {
      //console.log(input[inputIndex]);

      // Task #9: add the letters to resultsArray & then use console.log to print the resultsArray
      resultsArray.push(input[inputIndex])
        //console.log(resultsArray);

    } // Task #8 loop closing
  
  } //vowelsIndex for loop closing (task #6)

} //inputIndex for loop closing (task #4)

// Task #12: log resultsArray to console
//console.log(resultsArray);

// Task 13: to produce a proper whale language, we want to create a variable, capitalize the resultsArray elements, & put them together as one string
const resultString = resultsArray.join('').toLocaleUpperCase();
console.log(resultString);

// Task #14: run the program & sing the output outloud! Congrats! You officially speak whale! :) 
// to confirm the code runs right, change the input variable's value to 'turpentine and turtles'. The whale version should read UUEEIEEAUUEE.