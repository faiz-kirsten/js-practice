/*
The function takes in the following values as parameters: 
string - Any variable containing a string 
shift - The value(A number) we want to shift our characters/alphabets to
This function encodes a message according to the given shift values
*/
function EncodeMessage(string, shift) {
    let alphabetArray = [], // An array containing the letters of the alphabet
        alphabetMap = new Map(), // Stores a number as a key and the alphabet as a value
        encodedStringArray = [], // An array containing the letters of the encoded message
        count = 0,
        alphabetShift, // Will contain the formula of the cipher shift
        stringArray = []; // An array containing each character in 'string' as an iteration

    // Each character of the alphabet is appended to 'alphabetArray' -  i iterates 26 times and increments by 1 each time
    // This will continue to change the unicode value in method String.fromCharCode().
    for (let i = 0; i < 26; i++) {
        alphabetArray.push(String.fromCharCode(i + 97));
    }
    // 'alphabetArray' is iterated through and sets the incrementer i as the key and the value of alphabetArray[i] as value for each key, i.e. {1: "a"} for the object/map 'mapAlphabet.
    for (i in alphabetArray) {
        alphabetMap.set(i, alphabetArray[i]);
    }

    // Each iteration/character in 'sentence' is appended to 'StringArray'
    for (i in string) {
        stringArray.push(string[i]);
    }

    // 'string' and 'alphabetMap' are iterated through using a nested for loop
    for (i in string) {
        for ([key, value] of alphabetMap) {
            // 'alphabetShift' is calculated by adding 'key' to 'shift' and using the modulus operator to return the remainder of the that calculation.
            // 26 is used to ensure that it is kept in the correct range of the alphabet
            alphabetShift = (Number(key) + Number(shift)) % 26;

            // Executes if the current iteration of string is the same as 'value' if it is converted to uppercase
            if (string[i] == value.toUpperCase()) {
                // 'alphabetArray' is indexed at 'alphabetShift' and is converted to uppercase, and appended to 'encodedStringArray'
                encodedStringArray.push(
                    alphabetArray[alphabetShift].toUpperCase()
                );
                // 'stringArray' is indexed at i and is replaced by the 'count' value of 'encodedStringArray'
                stringArray[i] = encodedStringArray[count];
                count++; // count is incremented by 1
            }
            // Executes if the current iteration of string is the same as 'value'
            else if (string[i] == value) {
                // Same logic applied in the first if statement but the letter is not converted to uppercase
                encodedStringArray.push(alphabetArray[alphabetShift]);
                stringArray[i] = encodedStringArray[count];
                count++;
            }
        }
    }

    // The join() method is used to combine the letters in 'stringArray' and display them as a string
    return stringArray.join("");
}

let sentence = "I know something you don't. Trust me?"; // The message to be encoded
const shiftValue = 15; // The value we want to shift our characters/alphabets to

// The original sentence and the encoded message - which is attained by using the EncodedMessage function - is displayed in the console.
console.log(`Original Message: ${sentence}
Encoded Message: ${EncodeMessage(sentence, shiftValue)}`);

/*
References:
Used to check whether my cipher was correct
- https://planetcalc.com/1434/
Used to check how to use the join method
- https://www.w3schools.com/jsref/jsref_join.asp
Used to check how to convert letters to numbers 
- https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
How to get the value of the letters when encoding the message - formula for determining cipher shift 
- https://www.khanacademy.org/computing/computer-science/cryptography/ciphers/a/shift-cipher
*/
