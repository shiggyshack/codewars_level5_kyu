//Create a function, given two parameters integers m and n where 1 <= m <= n, that returns all of the numbers between those two numbers that when their factors are squared and total, will equal a perfect square itself.
function listSquared(m, n) {
  //This array will hold our tuples
  let finalArray = [];  
  //This outside for loop will take us through all integers between m and n, including them as well.
  for(let i = m ; i <= n ; i++){
    //This will hold our sum that we will test to see if it's a perfect square 
    let sum = 0; 
    for(let j = i ; j > 0; j--){
     //Reveals the factors of a number i and then adds the factors, as a square, to the running sum
     if(i%j===0){
       sum += j*j;
     } 
    }
    //If the sum is a perfect square itself, then the i value and the sum value get .push() to the finalArray
    if(Math.sqrt(sum)===Math.floor(Math.sqrt(sum))){
      finalArray.push([i, sum]);
    }
  }
  //Return the finalArray after all values from m to n are tested.
  return finalArray
}
