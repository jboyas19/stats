function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

function getMin(numbers) {
  let min = numbers[0];
  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

function getMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

function getEvens(numbers) {
  let evens = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

function getOdds(numbers) {
  let odds = [];
  for (let num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  return odds;
}
