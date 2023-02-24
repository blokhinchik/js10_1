// Pythagorean theorem
function findThirdSide(a, b) {
  const cSquared = Math.pow(a, 2) + Math.pow(b, 2);
  const c = Math.sqrt(cSquared);
  return c;
}

const c = findThirdSide(5, 12);
console.log(c);

// Show number in money format
const numPlus = 1232323;
const positiveNumber = `+ ${numPlus.toLocaleString("en-us", {
  style: "currency",
  currency: "USD",
})}`;

console.log(positiveNumber);

const numMinus = -23.2132;
const negativeNumber = numMinus.toLocaleString("en-us", {
  maximumFractionDigits: 2,
});

console.log(negativeNumber);

// Format number in spaces

const num = 1232323;
const numSpace = num.toLocaleString();

console.log(numSpace);

const numWithPoint = 1223.65378;
const numWithPointSpace = numWithPoint.toLocaleString({
  maximumFractionDigits: 3,
});

console.log(numWithPointSpace);

// Write a password generator with length n
function generatePassword(n) {
  const regex =
    /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/0-9\:\;\<\=\>\?\@\[A-Z\]\^_\`\[a-z\]]/g;
  let password = "";
  for (let i = 0; i < n; i++) {
    password += String.fromCharCode(
      Math.floor(Math.random() * (126 - 33 + 1)) + 33
    ).match(regex);
  }
  return password;
}
console.log(generatePassword(8));

// calculate percentage with n numbers after dot
function calculate(firstNum, secondNum, precision) {
  let calc = (secondNum * 100) / firstNum;
  const percentage =
    Math.round(calc * Math.pow(10, precision)) / Math.pow(10, precision);
  return percentage;
}
console.log(calculate(200, 0.14, 1));
console.log(calculate(200, 50, 0));

// Get integer part of number and decimal
function getIntAndDecimal(input) {
  const integerPart = parseInt(input);
  const decimalPart = parseFloat(input) - Math.floor(parseFloat(input));
  const decimal = decimalPart.toFixed(2);
  return { integerPart, decimal };
}
console.log(getIntAndDecimal(2));
console.log(getIntAndDecimal(2.34));

// Check if prime
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(4));
console.log(isPrime(5));

// Check if number is Armstrong Number
function isArmstrong(n) {
  const str = n.toString();
  const len = str.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    const digit = parseInt(str[i]);
    sum += Math.pow(digit, 3);
  }

  return sum === n;
}

console.log(isArmstrong(4));
console.log(isArmstrong(153));
