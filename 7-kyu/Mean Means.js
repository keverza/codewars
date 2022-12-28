// Take a list of n numbers a1, a2, a3, ..., aN to start with.

// Arithmetic mean (or average) is the sum of these numbers divided by n.

// Geometric mean (or average) is the product of these numbers taken to the nth root.
// Example

// List of numbers: 1, 3, 9, 27, 81

//     n = 5
//     Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
//     Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9

// Task

// You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.

function geo_mean(nums, arith_mean) {
  const missingNumber =
    arith_mean * (nums.length + 1) - nums.reduce((a, c) => a + c, 0);
  let n = nums;
  n.push(missingNumber);
  const multiplied = n.reduce((a, c) => a * c, 1);
  const geo = multiplied ** (1 / n.length);
  return geo;
}
