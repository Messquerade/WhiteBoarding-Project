// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Given an array as input, remove all duplicates in that array. Return the new array with no duplicates.
// The items in the array can be any data type? Or just numbers and strings?
// Do not use filter(). Then solve it with filter()
// Solve without recursion, then with recursion

// Loop within a loop?
// has to check if the current item is equal to any other item in the array
// so maybe, a for loop checking if array[i] === array[i + 1]

// works, but array items are no in a different order then expected. Does that matter?
// fixed it!

function dedupe(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

console.log(dedupe([7, 9, "hi", 12, "hi",  7, 53]));

// now use filter()
// so indexOf() gives you the first instance of that element in an array. So if an element's index is not equal to the indexOf() that element, it is a duplicate

function dedupeWithFilter(array) {
  const newArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });
  return newArray;
}

console.log(dedupeWithFilter([7, 9, "hi", 12, "hi",  7, 53]));