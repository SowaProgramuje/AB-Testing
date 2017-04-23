// A library for A/B testing
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
    isChrome: !!window.chrome && !!window.chrome.webstore,
    isFirefox: typeof InstallTrigger !== 'undefined',
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
    isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0


};

 // isIE: /*@cc_on!@*/false || !!document.documentMode,
//      isEdge: !isIE && !!window.StyleMedia

// function detectUserAgent() { 
//     var userAgent;
//      if(!!window.chrome && !!window.chrome.webstore === true) {
//         userAgent = 'Chrome';
//      } else if(typeof InstallTrigger !== 'undefined') {
//         userAgent = 'Firefox';
//      } else if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
//         userAgent = 'Opera';
//     //  } else if( ) {
//     //     userAgent = 'IE';
//      } else if(!isIE && !!window.StyleMedia === true) {
//         userAgent = 'Edge';
//     //  } else if( ) {
//     //     userAgent = 'Safari';
//      } else {
//         alert('unknown');
//      }
// };

// Opera 8.0+
// Firefox 1.0+
// Safari 3.0+ "[object HTMLElementConstructor]" 
// Internet Explorer 6-11
// Edge 20+
// Chrome 1+
// Blink engine detection

console.log(userInfo);

function drawOneCssProperty(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  var randomNumber = Math.random();
  localStorage.setItem('testedElement', whatToTest);
  if (randomNumber < 0.5) {
    testedElement.style[whatToTest] = optionA;
    localStorage.setItem('testResult', 'optionA');
    console.log(optionA);
  } else {
    testedElement.style[whatToTest] = optionB;
    localStorage.setItem('testResult', 'optionB'); 
    console.log(optionB);
  }
}

function drawOneOption(whatToTest, optionA, optionB, elementId) {
  const testedElement = document.getElementById(elementId);
  localStorage.setItem('testedElement', whatToTest);
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    testedElement[whatToTest] = optionA;
    localStorage.setItem('testResult', 'optionA');
  } else {
    testedElement[whatToTest] = optionB;
    localStorage.setItem('testResult', 'optionB');
  }
}


function eventLister(testesElementId) { 
    document.getElementById(testesElementId).addEventListener('click', function() {
       localStorage.setItem('clickedElement', testesElementId);
    });
};

function testInOneSession() {
    if(sessionStorage.getItem('abTesting') != 'tested'){
        console.log('Testing now');
        sessionStorage.setItem('abTesting','tested');
    }
};

// function conditionalTesting() {
//     if () {

//     }
// }

eventLister('test-color');


function testColor(colorA, colorB, elementId) {
    console.log(9)
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

export { testColor,  testTekst, testImage, testDisplay, testTextColor, testIframe, testVideo};
