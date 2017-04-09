import './_style.scss';
import { testColor,  testTekst, testImage, testDisplay, testTextColor, testVideo, testIframe } from './ab-testing';

testColor('#d5d41a', '#d14d5f', 'test-color');

testTekst('Text A - testing text', 'Text B - testing text', 'test-text');

testImage('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToYkhgUMQlaPMIaTByj05ha3gcX1lbV7cvdq2ByjEHWZCzXv93', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mHpvjE_LmXQdrYaG9FWA9NYTUHuSOD9gmtmfJNApVfpwicFY', 'test-image');

testDisplay('test-display');

testTextColor('#262673', '#004d00','test-text-color');

testIframe('https://www.youtube.com/embed/a3ICNMQW7Ok', 'https://www.youtube.com/embed/iNJdPyoqt8U', 'test-iframe');

// testVideo('zrodloPlikuA.mp4', 'zrodloPlikuB.mp4', 'test-video');
