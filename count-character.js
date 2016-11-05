var word = "lighthouse in the house";
function lettersLetters (str) {
  var noSpaces = str.split(" ").join("").toLowerCase().split("");
  var letters = {};

  noSpaces.forEach(function(character, i){
    if (letters.hasOwnProperty(character)){
      letters[character].push(i)
    } else {
      letters[character] = [i]
    }
  })
}
  return letters;
}

console.log(lettersLetters(word));