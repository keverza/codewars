// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const unique = [...new Set(numbers)];
  const count = numbers.filter(el => el === unique[0]);
  const count2 = numbers.filter(el => el === unique[1]);
  return count2.length > count.length ? unique[0] : unique[1];
}
