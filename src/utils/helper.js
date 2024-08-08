const cleanUp = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  // .replace(/[\n\r\s]+/g, ' ')
  // .trim();
};
// str.replace(/[\n\r\s]+/g, ' ').trim()
const replaceQuotes = (str) => {
  return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
};

const generateRandomString = (length) => {
  const ASCII_CHARS_SET =
    "!\"#$%&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^`abcdefghijklmnopqrstuvwxyz{|}";
  const MAX_WORD_LENGTH = 1;

  let result = "";

  let wordCharCounter = 0;
  const charactersLength = ASCII_CHARS_SET.length;
  for (let i = 0; i < length; i++) {
    wordCharCounter += 1;
    const randomIndex = Math.floor(Math.random() * charactersLength);
    if (wordCharCounter === MAX_WORD_LENGTH) {
      result += " ";
      wordCharCounter = 0;
    }

    result += (ASCII_CHARS_SET.charAt(randomIndex));
  }

  return result;
};

export { cleanUp, replaceQuotes, generateRandomString };
