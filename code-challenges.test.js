// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Test Driven Development
// describe("funcName", () => {
//   it("what funcName will do", () => {
//     const var1 = ["1"]
//     const var1Output = ["2"]
//     const var2 = ["2"]
//     const var2Output = ["4"]
//     expect(funcName(var1)).toEqual(var1Output)
//     expect(funcName(var2)).toEqual(var2Output)
//   })
// })

// Pseudocode:
        //Paramenter will be an array, string, number, object
        //Argument: const and or perhaps var but not bug or gremlin
        //Create a function named someThingCool
        //Utilize some fancypants HOF with hash rocket fuel to remove, join, add, loop as assessor or mutator in the array object or string.  Maybe use a cool tool like random Math.floor(Math.random()) function to randomize the remaining elements or .sort(a,b) or ...spread operator, hey dont forget [...new Set()].
        //Return the array, or else you'll be undefined, unless its a fancypants single line HOF then perhaps you can get away without the RTN...

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Test Driven Development
// describe("secretCoderPin", () => {
//   it("takes in a string and returns a string with a coded message.", () => {
//     const secretCodeWord1 = "Lackadaisical"
//     const secretCodeWord1Output = "L4ck4d41s1c4l"
//     const secretCodeWord2 = "Gobbledygook"
//     const secretCodeWord2Output = "G0bbl3dyg00k"
//     const secretCodeWord3 = "Eccentric"
//     const secretCodeWord3Output = "3cc3ntr1c"
//     expect(secretCoderPin(secretCodeWord1)).toEqual(secretCodeWord1Output)
//     expect(secretCoderPin(secretCodeWord2)).toEqual(secretCodeWord2Output)
//     expect(secretCoderPin(secretCodeWord3)).toEqual(secretCodeWord3Output)
//   })
// })

    // Jest Test RTN:
    // ReferenceError: secretCoderPin is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total



const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
    // Pseudocode:
            //Paramenter will be a string
            //Argument: const secretCodeWord1, const secretCodeWord2, const secretCodeWord3
            //Create a function named secretCoderPin, that takes in a string and replaces all occurances of "a" to 4, "e" to 3, "i" to 1, and "o" to 0, for both upper and lower case letters.  First create new codedString variable to equal string .split() to separate and remove given character with a flag of 'i' to look at both upper and lowercase.  Then .join to re-insert the new character. Continue stacking this process for all a,e,i,&o.  
            // Then return new codedString for results. 

                // The below did not work for me and was scrapped. Its seems .replace only hits the first occurance and if using global flag 'i' still can not seem to stack as easy as .split().join().split().join
                            // let e=3
                            // let i=1
                            // let o=0
                            // return string.replace(a,e,i,o)

const secretCoderPin = (string) => {
    let codedString = string.split(/a/i).join('4').split(/e/i).join('3').split(/i/i).join('1').split(/o/i).join('0')
    return codedString
}
console.log(secretCoderPin(secretCodeWord1))
console.log(secretCoderPin(secretCodeWord2))
console.log(secretCoderPin(secretCodeWord3))

    // Jest Test Return PASS  
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.198 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 1.05s.


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Test Driven Development
// describe("wordsContaining", () => {
//   it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//     const letterA = "a"
//     const letterAOutput = ["Mango", "Apricot", "Peach"]
//     const letterE = "e"
//     const letterEOutput = ["Cherry", "Blueberry", "Peach"]
//     expect(wordsContaining(letterA)).toEqual(letterAOutput)
//     expect(wordsContaining(letterE)).toEqual(letterEOutput)
//   })
// })

// Jest Test RTN:
    // ReferenceError: wordsContaining is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

    // Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

    // Pseudocode:
            //Paramenter will be an array of strings, and string
            //Argument: 
            //Create a function named wordsContaining to filter array based on search criteria const letterA and letterE.
            //Utilize .filter to iterate through the array looking for words that contain the letter a and e, take those values and switch to lowercase then use .include to add those lowercase values back to search for the required letters and return only those words containing those letters.  
            //Return the array. 
    
    const wordsContaining = (array, search) => {
        return array.filter((value) => value.toLowerCase().includes(search.toLowerCase()));
    }

    console.log(wordsContaining(fruitArray,letterA))
    console.log(wordsContaining(fruitArray,letterE))

    // Jest Test Return FAIL  
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total
    // Snapshots:   0 total
    // Time:        0.18 s, estimated 1 s
    // Ran all test suites.
    //**not sure why the test failed stating TypeError: array.filter is not a function from line 138. **/

        // The below attempts did not work properly
            // const wordsContaining = (string) => {
            //     for(let i = 0; string)
            //         if (string === true){
            //             return string
            //         }
            //     }
            // }
            // console.log(fruitArray.filter(wordsContaining)) 

                    // function wordsContaining (array, string) {
                    //     let newFruitArray = array
                    //     let stringchecher = string
                    //     if (newFruitArray.filter(stringchecher))
                    //     return newFruitArray
                    // }

            // const wordsContaining = array.filter(newArray => newArray.contains(string))

            // const wordsContaining = array.filter(function (string){
            //     return array.indexOf(value).contains(string)
            // })

                // const wordsContaining = (array, string) => {
                //    let  newFruitArray = array.map(string)
                //     newFruitArray.contains(string){
                //         return newFruitArray
                //     }
                // }
            //  console.log(wordsContaining(fruitArray, letterA))
            // const wordsContaining = array => {
            //     array.filter(string)
            // }
            // console.log(wordsContaining(fruitArray, letterA))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Test Driven Development
// describe("fullHouse", () => {
//   it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
//     const hand1 = [5, 5, 5, 3, 3]
//     const hand1Output = ["2"]
//     const hand2 = [5, 5, 3, 3, 4]
//     const hand2Output = ["4"]
//     const hand3 = [5, 5, 5, 5, 4]
//     const hand3Output = ["4"]
//     const hand4 = [7, 2, 7, 2, 7]
//     const hand4Output = ["4"]
//     expect(fullHouse(hand1)).toEqual(hand1Output)
//     expect(fullHouse(hand2)).toEqual(hand2Output)
//     expect(fullHouse(hand3)).toEqual(hand3Output)
//     expect(fullHouse(hand4)).toEqual(hand4Output)
//   })
// })   

// Jest Test RTN:
    // ReferenceError: fullHouse is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// ** not sure where I lost control on this one.  Thought it was good but the console.logs only bring back true and undefined. The original testing on the count to find the pair and three of a kind worked by returning the key, value pair showing the full house but I could not lock down the right conditional statments to return the correct answer.
    // Pseudocode:
        //Paramenter will be an array.
        //Argument: const hand1,2,3,&4 
        //Create a function named fullHouse
        //Utilize an object to store the count of duplicate (dups) cards for pair and 3 of a kind (triple). take those results and utilize conditional statments if there is 2 of one kind and 3 of another kind then fullHouse is true, else false. 
        //Return the count and apply the conditional statements based on the count. 


// this one below almost worked but just returns all true, and undefinded, bad conditional logic. 
const fullHouse = (array) => {
    let countDups = {};
    array.forEach(element => {
        countDups[element] = (countDups[element] || 0) +1;
        // return countDups;
        if(countDups === { key: 2, key: 3 } || { key: 3, key: 2}) {
        console.log ("true")
        } else {
        console.log ("false")
        }
    })
}

console.log(fullHouse(hand4))
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))

// The below was the original test of the count scripting it seem to work
// const countDups = {};
// hand4.forEach(element => {
//     countDups[element] = (countDups[element] || 0) + 1;
// })
// console.log(countDups)
// ----> { '2': 2, '7': 3 } need to rtn true and be dynamic


