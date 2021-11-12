// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// use an algorithm to sort an array without using sort()
// is the array always numbers? Are we always trying to sort the numbers lowest to highest?

// I'm going to assume we are sorting numbers from smallest to largest

// Quick Sort: breaks the problem into sub-problems, until it is easy enough to solve
// can be done iteratively or recursively
// Select a pivot element of the array (either first or last)
// Partitioning: If any element is greater than the pivot, it goes to the right, if it is smaller, it goes to the left. Equal does not matter.
// Repeat process for left and right side of the pivot

// So the pivot changes at each step of the algorithm, as the array changes order
// the recursive way makes way more sense

function quickSort(array, start, end) {
  // termination case? or base case?
  if(start >= end) {
    return;
  }

  // partition = where the sorting happens
  let index = partition(array, start, end);

  // call quicksort on the new sides of the array
  // aka everything less than the last pivot point
  quickSort(array, start, index - 1);
  // aka everything greater than the last pivot point
  quickSort(array, index + 1, end);
}

// partition is it's own separate function ha
function partition(array, start, end) {
  const pivotValue = array[end];
  let pivotIndex = start;
  for(let i = start; i < end; i++) {
    if(array[i] < pivotValue) {
      // swap elements
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }
  // put the pivot in the middle? Switch Swap
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  return pivotIndex;
}

let array = [9, 2, 7, 12];
quickSort(array, 0, array.length - 1);
console.log(array);
