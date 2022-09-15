"use strict";

const parcela1 = document.querySelector(".parcela1");
const parcela2 = document.querySelector(".parcela2");
const resultado = document.querySelector(".resultado");
const speakButton = document.querySelector(".speak-button");
const pauseSpeakButton = document.querySelector(".pause-speak-button");
const refreshButton = document.querySelector(".refresh-button");

let resultadoInterno;

class speechApi {
  constructor() {
    const SpeechToText =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    this.speechApi = new SpeechToText();
    this.output = resultado.output;
    this.speechApi.continuous = false;
    this.speechApi.lang = "pt-BR";

    this.speechApi.onresult = (e) => {
      console.log("resultado obtido");
      var resultIndex = e.resultIndex;
      var transcript = e.results[resultIndex][0].transcript;
      console.log(transcript);
      resultado.textContent = transcript;
    };
  }

  start() {
    this.speechApi.start();
  }

  stop() {
    this.speechApi.stop();
  }
}

refreshButton.addEventListener("click", function () {
  const random1 = Math.floor(Math.random() * 11);
  const random2 = Math.floor(Math.random() * 11);
  parcela1.innerText = random1;
  parcela2.innerText = random2;

  resultadoInterno = random1 + random2;
  // console.log(resultadoInterno);
});

// speakButton.addEventListener("click", function () {
//   const resultadoFala = prompt("Digite a resposta");

//   if (resultadoFala != resultadoInterno) {
//     console.log("Errado");
//   } else {
//     console.log("Certo");
//   }
// });

var speech = new speechApi();

speakButton.addEventListener("click", (e) => {
  speakButton.disabled = true;
  pauseSpeakButton.disabled = false;
  speech.start();
});

pauseSpeakButton.addEventListener("click", () => {
  speakButton.disabled = false;
  pauseSpeakButton.disabled = true;
  speech.stop();
});
