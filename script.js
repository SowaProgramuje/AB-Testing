import './_style.scss';

console.log('hello world');

let slonce = 'super slonce';
console.log(`Ale dzisiaj swieci ${slonce}`);


// pure JavaScript
function testColor(colorA, colorB) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById("test-color");
  if (randomNumber < 0.5) {
    testedElement.style.backgroundColor = colorA;
  } else {
    testedElement.style.backgroundColor = colorB;
  }
}

testColor('#d5d41a', '#d14d5f');


// jQuery:
// function testColor(colorA, colorB) {
//   var randomNumber = Math.random();
//   const testedElement = $('.test-color');
//   if (randomNumber < 0.5) {
//     testedElement.css('background-color', colorA);
//   } else {
//     testedElement.css('background-color', colorB);
//   }
// }

// testColor('#d5d41a', '#d14d5f');


function testTekst(textA, textB) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById("test-text");
  if (randomNumber < 0.5) {
    testedElement.innerHTML = textA;
  } else {
    testedElement.innerHTML = textB;
  }
}

testTekst('Text A - super header one', 'Text B - cool header two');


function testImage(imageSrcA, imageSrcB) {
  var randomNumber = Math.random();
  const testedElement = document.getElementById("test-image");
  if (randomNumber < 0.5) {
    testedElement.src = imageSrcA;
  } else {
    testedElement.src = imageSrcB;
  }
}

testImage('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToYkhgUMQlaPMIaTByj05ha3gcX1lbV7cvdq2ByjEHWZCzXv93', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mHpvjE_LmXQdrYaG9FWA9NYTUHuSOD9gmtmfJNApVfpwicFY');