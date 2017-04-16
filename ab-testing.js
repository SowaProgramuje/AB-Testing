// A library for A/B testing


function drawOneCssProperty(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    testedElement.style[whatToTest] = optionA;
  } else {
    testedElement.style[whatToTest] = optionB;
  }
}

function drawOneOption(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    testedElement[whatToTest] = optionA;
  } else {
    testedElement[whatToTest] = optionB;
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

var userInfo = {
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,
    userLanguage: navigator.language,
    WindowWidth: window.innerWidth,
    WindowHeight: window.innerHeight,
    ScreenWidth: screen.width,
    ScreenHeight: screen.height,
    operationSystem: navigator.platform,
    userAgent: navigator.userAgent,
    isChome: !!window.chrome && !!window.chrome.webstore,
    isFirefox: typeof InstallTrigger !== 'undefined',
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
    
};

console.log(userInfo);

function eventLister(testesElementId) { 
    document.getElementById(testesElementId).addEventListener("click", addToLocalStorage)
};

function addToLocalStorage() {

};

export { testColor,  testTekst, testImage, testDisplay, testTextColor, testIframe, testVideo};
