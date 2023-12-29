const textArea = document.getElementById("input-text");
const fontSize = document.getElementById("font-size");
const fontName = document.getElementById("font-name");
const fontColor = document.getElementById("color-change");
const addText = document.getElementById("addText");


//Font Size click
fontSize.addEventListener("click", function () {
  textArea.style.fontSize = fontSize.value;
});

//Font Name click
fontName.addEventListener("click", function () {
  textArea.style.fontFamily = fontName.value;
});

//Font Color change
fontColor.addEventListener("change", function () {
  textArea.style.color = fontColor.value;
});

// add text to the next line
addText.addEventListener("click", function () {
  textArea.value += "\n";
});