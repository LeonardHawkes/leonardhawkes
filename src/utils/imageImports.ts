import pilotHelperImg from '../assets/PilotHelper.png';
import vtraxxImg from '../assets/Vtraxx.jpg';
import covidTrackerImg from '../assets/Covid-19.jpg';
import snakeGameImg from '../assets/SnakeGame.gif';
import flappyBirdImg from '../assets/FlappyBird.gif';
import javaQuizImg from '../assets/OnlineTest.gif';

//Map of image keys to imported images
const imageMap: Record<string, string> = {
    'pilotHelper': pilotHelperImg,
    'vtraxx': vtraxxImg,
    'covidTracker': covidTrackerImg,
    'snakeGame': snakeGameImg,
    'flappyBird': flappyBirdImg,
    'javaQuiz': javaQuizImg
};

/**
 * Get image by key
 * @param key The key to look up in the image map
 * @returns The imported image URL
 */
export const getImageKey = (key: string): string => {
    return imageMap[key] || '';
};

