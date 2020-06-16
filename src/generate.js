const HSXKPasswd = require('hsxkpasswd');


const customSettings = {
  num_words: 2,
  word_length_min: 7,
  word_length_max: 12,
  case_transform: "CAPITALISE",
  separator_character: "NONE",
  padding_digits_before: 0,
  padding_digits_after: 2,
  padding_type: "FIXED",
  padding_character: "RANDOM",
  symbol_alphabet: [
    '.',
    '!',
    '?',
    '$',
    '-',
    ':',
    '~'
  ],
  padding_characters_before: 0,
  padding_characters_after: 1,
  random_increment: "AUTO"
};

module.exports = function generate() {
  const passwordGenerator = new HSXKPasswd.Generator(customSettings);
  const password = passwordGenerator.passwordSync(); // single password
  return password;
}
