//The gap function is calling upon two other functions, isPrime and findDifference, to complete the task of finding the first occurence of two primes  between m and n having a specified difference equal to g

function gap(g, m, n) {
    //Created a new array to hold all of the primes between m and n.
    let arrayOfPrimes = [];
  for(let j = m; j <= n; j++){
      //Used isPrime function to find all of the primes, between m and n, and add them to the arrayOfPrimes
      if(isPrime(j)){
        arrayOfPrimes.push(j);
      }
  }
  //Once the arrayOfPrimes is completed, use the findDifference function to find the first two elements who have the specified distance between them, return null if no such elements exists.
  return findDifference(arrayOfPrimes, g);
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findDifference(numbers, difference) 
{
  for (let k = 0; k < numbers.length - 1; k++) 
  {
    if (numbers[k + 1] - numbers[k] === difference) 
    {
      return [numbers[k], numbers[k + 1]];
    }
  }
  return null;
}

