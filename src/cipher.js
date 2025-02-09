const cipher = {
  encode: function (deslocamento, texto) {
    if (typeof deslocamento !== "number" || typeof texto !== "string") {
      throw new TypeError(
        "A mensagem precisa ser em palavras, e o deslocamento em números"
      );
    } else {
      let codificado = "";
      for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter.match(/[A-Z]/i)) {
          const codigo = texto.charCodeAt(i);
          if (codigo >= 65 && codigo <= 90) {
            caracter = String.fromCharCode(
              ((codigo - 65 + deslocamento) % 26) + 65
            );
          } else if (codigo >= 97 && codigo <= 122) {
            caracter = String.fromCharCode(
              ((codigo - 97 + deslocamento) % 26) + 97
            );
          }
        }
        codificado += caracter;
      }
      return codificado;
    }
  },

  decode: function (deslocamento, texto) {
    if (typeof deslocamento !== "number" || typeof texto !== "string") {
      throw new TypeError(
        "A mensagem precisa ser em palavras, e o deslocamento em números"
      );
    } else {
      let decodificado = "";
      for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter.match(/[A-Z]/i)) {
          const codigo = texto.charCodeAt(i);
          if (codigo >= 65 && codigo <= 90) {
            let resultado = codigo - 65 - deslocamento;
            while (resultado < 0) {
              resultado += 26;
            }
            caracter = String.fromCharCode((resultado % 26) + 65);
          } else if (codigo >= 97 && codigo <= 122) {
            let resultado = codigo - 97 - deslocamento;
            while (resultado < 0) {
              resultado += 26;
            }
            caracter = String.fromCharCode((resultado % 26) + 97);
          }
        }
        decodificado += caracter;
      }

      return decodificado;
    }
  },
};
export default cipher;
