let number = 1597;

function isFibonacci(number) {
  let fibonacciSequence = [0, 1];
  
  for (let currentFib of fibonacciSequence) {
      if (currentFib >= number) break;
      
      let nextFib = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
      fibonacciSequence.push(nextFib);
  }
  
  return fibonacciSequence.includes(number);
}

if (isFibonacci(number)) {
  console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}
