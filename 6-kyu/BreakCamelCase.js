// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  const str = string
    .split("")
    .map(el => (el === el.toUpperCase() ? ` ${el}` : el))
    .join("");
  return str;
}
