function factorial(n) {
  if (n < 0) return 0n; // factorial of negative numbers is 0
  if (n === 0 || n === 1) return 1n;

  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }

  return result;
}

function amIWilson(p) {
  const factorialPMinus1 = factorial(BigInt(p - 1));
  const wilsonCondition = (factorialPMinus1 + 1n) % (BigInt(p) * BigInt(p));

  return wilsonCondition === 0n;
}

console.log(amIWilson(563));
