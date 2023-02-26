//Create a function that accepts an arr as a parameter, and return the largest possible sum from adding continuous elements together.
var maxSequence = function(arr){
  //Create two variables, initialized to 0, to hold the maxSum and currentSum, which will be compared to each other in the loop
  let maxSum = 0;
  let currentSum = 0;

  //This for loop will pass through the array changing the index of the first element in the sum variables.
  for (let i = 0; i < arr.length; i++) {
    
    currentSum += arr[i];
    //Throws out an negative values if the current sum is negative
    if (currentSum < 0) {
      currentSum = 0;
    }
    //If the currentSum is more than the maxSum variable, then the currentSum variable overwrites the maxSum variable.
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  //All the iterations are finished and the maxSum is returned.
  return maxSum;
}
