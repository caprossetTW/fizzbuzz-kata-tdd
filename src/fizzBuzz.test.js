const getFizzBuzz = require('./fizzBuzz.js');

describe('fizzBuzz', ()=> {
  // Refactoring with parameterized test
  test.each([
    [1, 1],
    [3, "Fizz"],
    [12, "Fizz"],
    [5, "Buzz"],
    [10, "Buzz"],
    [15, "FizzBuzz"],
    [0, "FizzBuzz"],
    [303, "Fizz"],
    [7, 7]
  ])("if given %p returns %p", (given, expected) => {
    expect(getFizzBuzz(given)).toBe(expected);
  });

  test("if given 1 returns 1", () => {
    // given
    const n = 1;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("if given 3 returns Fizz", () => {
    // given
    const n = 3;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });

  test("if given 12 returns Fizz", () => {
    // given
    const n = 12;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });

  test("if given 5 returns Buzz", () => {
    // given
    const n = 5;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "Buzz";
    expect(actual).toBe(expected);
  });

  test("if given 10 returns Buzz", () => {
    // given
    const n = 10;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "Buzz";
    expect(actual).toBe(expected);
  });

  test("if given 15 returns FizzBuzz", () => {
    // given
    const n = 15;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "FizzBuzz";
    expect(actual).toBe(expected);
  });

  test("if given 0 returns FizzBuzz", () => {
    // given
    const n = 0;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "FizzBuzz";
    expect(actual).toBe(expected);
  });

  test("if given 303 returns Fizz", () => {
    // given
    const n = 303;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });

  test("if given 7 returns 7", () => {
    // given
    const n = 7;
    
    // when
    const actual = getFizzBuzz(n);
    
    // then
    const expected = 7;
    expect(actual).toBe(expected);
  });
});