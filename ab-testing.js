// A library for A/B testing
var xlMin = 1200;
var lgMax = 1199;
var lgMin = 992;
var mdMax = 991;
var mdMin = 768;
var smMax = 767;
var smMin = 576;
var xsMax = 575;
var xsMin = 0;

var userInfo = {
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,
    userLanguage: navigator.language,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    screenWidth: screen.width,
    screenHeight: screen.height,
    operationSystem: navigator.platform,
    userAgent: detectUserAgent(),
};

function detectUserAgent() { 
    var userAgent;
     if(!!window.chrome && !!window.chrome.webstore) {
        userAgent = 'chrome';
     } else if(typeof InstallTrigger !== 'undefined') {
        userAgent = 'firefox';
     } else if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        userAgent = 'opera';
     } else if(!isIE && !!window.StyleMedia) {
        userAgent = 'edge';
     } else if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification)) {
        userAgent = 'safari';
     } else {
        userAgent = 'unknown';
     }
     return userAgent;
};

console.log(userInfo);

function eventLister(testesElementId) { 
    document.getElementById(testesElementId).addEventListener('click', function() {
       localStorage.setItem('clickedElement', testesElementId);
    });
};


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
  eventLister(elementId);
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
  eventLister(elementId);
}

function testInOneSession() {
    if(sessionStorage.getItem('abTesting') != 'tested'){
        console.log('Testing now');
        sessionStorage.setItem('abTesting','tested');
    }
};

function testOnScreensBetweenResolution(minSreenResolution, maxSreenResolution, functionToTest) {
    if (screenWidth > minSreenResolution && screenWidth < maxSreenResolution) {
        functionToTest();
    } else {
        localStorage.setItem('testResult', 'Not tested - too small screen');
    }
}

function testOnParticularUserAgent(testOnThisUserAgent, functionToTest) {
    if (detectUserAgent() === testOnThisUserAgent.toLowerCase()) {
        functionToTest();
    } else {
        localStorage.setItem('testResult', 'not testes on' );
    }
}

function testOnParticularUserAgent(testOnThisUserAgent) {
    if (a === testOnThisUserAgent.toLowerCase()) {
        console.log('hurra')
    } else {
        localStorage.setItem('testResult', 'not testes on' );
    }
}

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

export { testColor,  testTekst, testImage, testDisplay, testTextColor, testIframe, testVideo, eventLister, testInOneSession, testOnScreensBetweenResolution};
