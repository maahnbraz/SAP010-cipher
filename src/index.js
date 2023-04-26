//import cesarCipher from "./cipher"

function encode() {
  const shift = parseInt(document.getElementById("shift").value);
  const message = document.getElementById("message").value;
  const result = document.getElementById("result");
  result.value = cesarCipher(message, shift);
}

function decode() {
  const shift = parseInt(document.getElementById("shift").value);
  const message = document.getElementById("message").value;
  const result = document.getElementById("result");
  result.value = cesarCipher(message, -shift);
}
