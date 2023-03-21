const birthMonths = new Map();
const startYear = 92;
const endYear = 93;
const numPeople = 50;

for (let i = 0; i < numPeople; i++) {
  const birthMonth = Math.floor(Math.random() * 12) + 1;
  const birthYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  const birthDate = new Date(birthYear, birthMonth, 0);

  if (birthMonths.has(birthMonth)) {
    birthMonths.get(birthMonth).push(birthDate);
  } else {
    birthMonths.set(birthMonth, [birthDate]);
  }
}

console.log("Birth months:", birthMonths);

for (const [month, birthdays] of birthMonths.entries()) {
  if (birthdays.length > 1) {
    console.log(`Month ${month}: ${birthdays.length} people`);
  }
}
