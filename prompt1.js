// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// Summarize the question: given a string with or without spaces, replace all spaces with %20, and return the new string. Do not use replace or regular expressions.

// clarifying questions: will the input always be a string? Can I use split() or join() methods?

// no replace or regex, so... 
// 1. if I can use the split method, I could split the string using a space, " ", separator. Which will split the string into an array of substrings, minus the spaces.
// 2. then loop through the array and concat("%20") to each substring
// 3. after the loop, join() the array back together into a string and return the string

function makeURL(message) {
  if(typeof message != "string") {
    return "error: Please enter a string input";
  }
  if(!message.includes(" ")) {
    return message;
  }
  const words = message.split(" ");
  const urlArray = words.map(word => {
    return word.concat("%20");
  });
  const url = urlArray.join("");
  return url;
}

console.log(makeURL("Jasmine Ann Jones"));
console.log(makeURL(33));
console.log(makeURL("hi"));