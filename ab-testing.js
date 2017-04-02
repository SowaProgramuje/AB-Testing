// A library for A/B testing


function drawOneCssProperty(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    testedElement.css(whatToTest, optionA);
  } else {
    testedElement.css(whatToTest, optionB);
  }
}

function drawOneOption(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    testedElement.whatToTest = optionA;
  } else {
    testedElement.whatToTest = optionB;
  }
}

function testColor(colorA, colorB, elementId) {
    drawOneCssProperty('backgroundColor', colorA, colorB, elementId);
}

function testTextColor(colorA, colorB, elementId) {
    drawOneCssProperty('color', colorA, colorB, elementId);
}

function testDisplay(elementId) {
    drawOneCssProperty('display', 'none', 'inline-block', elementId);
}

function testTekst(textA, textB, elementId) {
    drawOneOption('innerHTML', textA, textB, elementId);
}

function testImage(imageSrcA, imageSrcB, elementId) {
    drawOneOption('src', imageSrcA, imageSrcB, elementId);
}

function testIframe(iframeSrcA, iframeSrcB, elementId) {
    drawOneOption('src', iframeSrcA, iframeSrcB, elementId);
}

function testVideo(videoSrcA, videoSrcB, elementId) {
    drawOneOption('src', videoSrcA, videoSrcB, elementId);
}

// function drawOneOption(whatToTest, optionA, optionB, elementId) {
//     const testedElement = document.getElementById(elementId);
//     var randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//         var testedProperties;
//         for (i = 0, i < whatToTest.length, i += 1) {
//             testedProperties += whatToTest[i];
//         };
//         testedElement.testedProperties = optionA;
//     } else {
//         testedElement.testedProperties = optionB;
//     }
// }


// function testColor(colorA, colorB, elementId) {
//   var randomNumber = Math.random();
//   const testedElement = document.getElementById(elementId);
//   if (randomNumber < 0.5) {
//     testedElement.style.backgroundColor = colorA;
//   } else {
//     testedElement.style.backgroundColor = colorB;
//   }
// }

// function testTekst(textA, textB, elementId) {
//   var randomNumber = Math.random();
//   const testedElement = document.getElementById(elementId);
//   if (randomNumber < 0.5) {
//     testedElement['innerHTML'] = textA;
//   } else {
//     testedElement['innerHTML'] = textB;
//   }
// }

// function testImage(imageSrcA, imageSrcB, elementId) {
//   var randomNumber = Math.random();
//   const testedElement = document.getElementById(elementId);
//   if (randomNumber < 0.5) {
//     testedElement.src = imageSrcA;
//   } else {
//     testedElement.src = imageSrcB;
//   }
// }

// function testDisplay(elementId) {
//   var randomNumber = Math.random();
//   const testedElement = document.getElementById(elementId);
//   if (randomNumber < 0.5) {
//     testedElement.style.display = 'none';
//   } else {
//     testedElement.style.display = 'inline-block';
//   }
// }
//
// function testTextColor(colorA, colorB, elementId) {
//   var randomNumber = Math.random();
//   const testedElement = document.getElementById(elementId);
//   if (randomNumber < 0.5) {
//     testedElement.style.color = colorA;
//   } else {
//     testedElement.style.color = colorB;
//   }
// }

export { testColor,  testTekst, testImage, testDisplay, testTextColor, testIframe, testVideo};
