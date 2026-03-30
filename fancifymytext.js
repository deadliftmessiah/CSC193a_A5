function makeBigger() {
  alert("Hello, world!");
  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
  let textArea = document.getElementById("textInput");
  let fancyRadio = document.getElementById("fancy");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  let textArea = document.getElementById("textInput");
  let text = textArea.value.toUpperCase();

  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim();
    if (sentences[i].length > 0) {
      let words = sentences[i].split(" ");
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }

  textArea.value = sentences.join(". ");
}