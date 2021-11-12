// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true


// so like the duplicates problem but with string [ ] and a for loop
// if there are no duplicate characters, return true. If there is a duplicate character, return false

function uniqueCheck(message) {
  for(let i = 0; i < message.length; i++) {
    for(let j = i + 1; j < message.length; j++) {
      if(message[i] === message[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(uniqueCheck("hello"));
console.log(uniqueCheck("copyright"));
