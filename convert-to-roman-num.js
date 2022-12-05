const convertToRoman = (num) => {
  const romanPairs = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  let currentValue = num;
  let romanNumeral = "";
    for (e in romanPairs){
      while (currentValue >= romanPairs[e]) {
        romanNumeral += e;
        currentValue -= romanPairs[e];
      }
    }
  return romanNumeral;
}

console.log(convertToRoman(36));
console.log(convertToRoman(9));// should return the string IX.