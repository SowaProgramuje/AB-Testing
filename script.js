import './_style.scss';
import { testColor,  testTekst, testImage, testDisplay, testTextColor, testIframe, testVideo, eventLister, testInOneSession, testOnScreensBetweenResolution} from './ab-testing';

testColor('#d5d41a', '#d14d5f', 'test-color');

testTekst('Text A - testing text', 'Text B - testing text', 'test-text');

testImage('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToYkhgUMQlaPMIaTByj05ha3gcX1lbV7cvdq2ByjEHWZCzXv93', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mHpvjE_LmXQdrYaG9FWA9NYTUHuSOD9gmtmfJNApVfpwicFY', 'test-image');

testDisplay('test-display');

testTextColor('#262673', '#004d00','test-text-color');

testIframe('https://www.youtube.com/embed/a3ICNMQW7Ok', 'https://www.youtube.com/embed/iNJdPyoqt8U', 'test-iframe');

testVideo('http://mazwai.com/system/posts/videos/000/000/223/preview_mp4_3/lodewijk-van-eekhout_wiffling-grayleg-goose.mp4?1476537792', 'http://mazwai.com/system/posts/videos/000/000/202/preview_mp4_2/live-aloha.mp4?1446407106', 'test-video');
