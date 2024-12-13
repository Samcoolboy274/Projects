var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 60;

result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
  var textLength = myText.value.length;

  // Restrict input to the limit
  if (textLength > limit) {
    myText.value = myText.value.substring(0, limit);
    textLength = limit;
  }

  result.textContent = textLength + "/" + limit;

  if (textLength >= limit) {
    myText.style.borderColor = "red";
    result.style.color = "red";
  } else {
    myText.style.borderColor = "#b2b2b2";
    result.style.color = "#737373";
  }
});
