// Generate 10 random 3-digit numbers 
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100);
}

// Find the second largest and second smallest numbers in the array
let largest = numbers[0];
let secondLargest = numbers[0];
let smallest = numbers[0];
let secondSmallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  // Check for second largest
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
    secondLargest = numbers[i];
  }

  // Check for second smallest
  if (numbers[i] < smallest) {
    secondSmallest = smallest;
    smallest = numbers[i];
  } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
    secondSmallest = numbers[i];
  }
}

console.log("Random Numbers: " + numbers);
console.log("Second largest: " + secondLargest);
console.log("Second smallest: " + secondSmallest);
