const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.getElementById("error");

convertBtn.addEventListener("click", function () {
  const speechSynth = window.speechSynthesis;
  const enteredText = text.value.trim();

  if (!enteredText) {
    error.textContent = "Nothing to Convert! Please enter some text.";
    return;
  }

  if (!speechSynth.speaking) {
    error.textContent = "";
    const utterance = new SpeechSynthesisUtterance(enteredText);
    speechSynth.speak(utterance);
    convertBtn.textContent = "Sound is Playing...";

    utterance.onend = () => {
      convertBtn.textContent = "Play Converted Sound";
    };
  }
});
