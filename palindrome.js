const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(word) {
  let length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

rl.question("Syötä sana: ", (word) => {
  if (isPalindrome(word)) {
    console.log(`\"${word}\" on palindromi!`);
  } else {
    console.log(`\"${word}\" ei ole palindromi.`);
  }
  rl.close();
});
