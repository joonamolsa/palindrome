// Tuodaan readline-moduuli käyttäjän syötteen lukemista varten
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funktio, joka tarkistaa, onko annettu sana palindromi
function isPalindrome(word) {
  let length = word.length;
  for (let i = 0; i < length / 2; i++) {
    // Käydään läpi vain puolet sanasta
    if (word[i] !== word[length - 1 - i]) {
      // Verrataan vastakkaisia merkkejä
      return false; // Jos merkit eivät täsmää, ei ole palindromi
    }
  }
  return true; // Jos kaikki merkit täsmäävät, sana on palindromi
}

// Kysytään käyttäjältä sanaa ja tarkistetaan, onko se palindromi
rl.question("Syötä sana: ", (word) => {
  if (isPalindrome(word)) {
    console.log(`\"${word}\" on palindromi!`); // Tulostetaan, jos sana on palindromi
  } else {
    console.log(`\"${word}\" ei ole palindromi.`); // Tulostetaan, jos sana ei ole palindromi
  }
  rl.close(); // Suljetaan readline-liittymä
});
