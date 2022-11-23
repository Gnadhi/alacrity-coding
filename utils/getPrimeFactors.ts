const getPrimeFactors = (n: number): Set<number> => {
  // This is O(n) is understand this is probally not the best solution
  var output: Set<number> = new Set([])

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      // This means n/2 is also a factor of n
      output.add(i);
    }
  }

  return output;
};

export default getPrimeFactors;
