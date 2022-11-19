// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  console.log("current ", s);
  let str = s.trim().split("");
  while (str.includes("#")) {
    let index = str.findIndex(el => el === "#");
    if (index) {
      str.splice(index - 1, 2);
    } else {
      str.shift();
      console.log(str.join(""));
    }
  }

  return str.join("");
}
