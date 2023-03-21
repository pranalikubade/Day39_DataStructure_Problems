// Part 1 - Generate random 3-digit numbers and store them in an array
const arr = [];
for (let i = 0; i < 10; i++) {
arr.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Original Array:", arr);

// Part 2 - Find the 2nd largest and 2nd smallest elements without sorting
let largest = arr[0];
let secondLargest = arr[0];
let smallest = arr[0];
let secondSmallest = arr[0];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > largest) {
secondLargest = largest;
largest = arr[i];
} else if (arr[i] > secondLargest && arr[i] < largest) {
secondLargest = arr[i];
}
if (arr[i] < smallest) {
secondSmallest = smallest;
smallest = arr[i];
} else if (arr[i] < secondSmallest && arr[i] > smallest) {
secondSmallest = arr[i];
}
}
console.log("2nd largest:", secondLargest);
console.log("2nd smallest:", secondSmallest);

// Part 3 - Sort the array and find the 2nd largest and 2nd smallest elements
arr.sort((a, b) => a - b);
console.log("Sorted Array:", arr);
console.log("2nd largest:", arr[arr.length - 2]);
console.log("2nd smallest:", arr[1]);