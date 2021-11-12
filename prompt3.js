// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// it's only repeated characters that are next to each other. The a at the end of the example does not effect the a's at the beginning of the string. Repeats, not duplicates.

function compress(message) {
  let counter = 1;
  let newMessage = "";
  for(let i = 0; i < message.length; i++) {
    if(message[i] === message[i + 1]) {
      counter++;
    } else {
      if(counter === 1){
        newMessage += message[i];
      } else {
        newMessage += counter + message[i];
        counter = 1;
      }
    }
  }
  return newMessage;
}

console.log(compress("aaabccdddda"));