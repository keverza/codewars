// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (!str) return "";
  let camelString;
  if (str.includes("_")) {
    camelString = str
      .split("_")
      .map((el, i) => {
        if (i === 0) {
          return el;
        } else {
          return el.charAt(0).toUpperCase() + el.slice(1);
        }
      })
      .join("");
  } else {
    camelString = str
      .split("-")
      .map((el, i) => {
        if (i === 0) {
          return el;
        } else {
          return el.charAt(0).toUpperCase() + el.slice(1);
        }
      })
      .join("");
  }

  console.log(camelString);
  return camelString;
}
