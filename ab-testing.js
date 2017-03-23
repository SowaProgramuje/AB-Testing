// A library for A/B testing

function testColor(colorA, colorB, elementId) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById(elementId);
  if (randomNumber < 0.5) {
    testedElement.style.backgroundColor = colorA;
  } else {
    testedElement.style.backgroundColor = colorB;
  }
}

function testTekst(textA, textB, elementId) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById(elementId);
  if (randomNumber < 0.5) {
    testedElement.innerHTML = textA;
  } else {
    testedElement.innerHTML = textB;
  }
}

function testImage(imageSrcA, imageSrcB, elementId) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById(elementId);
  if (randomNumber < 0.5) {
    testedElement.src = imageSrcA;
  } else {
    testedElement.src = imageSrcB;
  }
}

function testDisplay(elementId) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById(elementId);
  if (randomNumber < 0.5) {
    testedElement.style.display = 'none';
  } else {
    testedElement.style.display = 'inline-block';
  }
}

function testTextColor(colorA, colorB, elementId) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById(elementId);
  if (randomNumber < 0.5) {
    testedElement.style.color = colorA;
  } else {
    testedElement.style.color = colorB;
  }
}

export { testColor,  testTekst, testImage, testDisplay, testTextColor};
