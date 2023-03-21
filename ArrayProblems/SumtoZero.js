function sumToZero(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            console.log('The integers ' +arr[i]+ "," +arr[j]+ ', and '+arr[k]+ ' add to zero');
            return;
          }
        }
      }
    }
    console.log("There are no three integers in the array that add to zero.");
  }
  
  const nums = [1, 2, -3, 4, -1];
  sumToZero(nums);
  