// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

const queueTime = (queue, till) => {
  const tills = [];
  for (let i = 0; i < till; i++) {
    tills.push(0);
  }
  
  for (let i = 0; i < queue.length; i++) {
    const smallest = Math.min(...tills);
    const index = tills.indexOf(smallest);
    tills[index] += queue[i];
  }
  
  return Math.max(...tills);
}

console.log(queueTime([5,3,4], 1))
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// console.log(queueTime([10,2,3,3], 2))
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// 0 0
// 10 2
// 10 5
// 10 8

// console.log(queueTime([2,3,10], 2))
// should return 12

// 0  0
// 2  3
// 12 3

// n tills
// make array of n tills
// iterate through the queue array
// 
// compare which is smallest
// add next person's time to the smallest total
// return biggest total



