var word = "lighthouse in the house";
function lettersLetters (str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  var letters = {};

   for (var i = 0; i < noSpaces.length; i++) {
      if (letters.hasOwnProperty(noSpaces[i])) {
        letters[noSpaces[i]]++;
      } else {
        letters[noSpaces[i]] = 1
      }
  }
  return letters;
}

console.log(lettersLetters(word));