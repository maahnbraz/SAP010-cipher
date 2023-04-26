//import encode from "./index";
//import decode from "./index";

function cesarCipher(message, shift) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += message.charAt(i);
    }
  }
  return result;
}
