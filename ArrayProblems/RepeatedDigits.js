const repeatedDigits = [];

for (let i = 10; i <= 99; i++) {
  const str = i.toString();
  if (str[0] === str[1]) {
    repeatedDigits.push(i);
  }
}

console.log("Digits that are repeated twice: ", repeatedDigits);
