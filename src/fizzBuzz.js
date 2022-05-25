function getFizzBuzz(n) {
  const fizz = (n % 3) === 0;
  const buzz = (n % 5) === 0;
  const fizzBuzz = fizz && buzz;
  
  if(fizzBuzz) {
     return "FizzBuzz";
  }
  
  if(fizz) {
     return "Fizz";
  }
  
  if(buzz) {
    return "Buzz";
  } 

  return n;
}

module.exports = getFizzBuzz;