import picture1 from '../assets/cats.jpg'
import picture2 from '../assets/chubaka.jpg'
import picture3 from '../assets/dogs.jpg'
import picture4 from '../assets/dyno.jpg'
import picture5 from '../assets/planets.jpg'

export const getRandomImg = () => {
  const pictureArray = [picture1, picture2, picture3, picture4, picture5];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  return pictureArray[randomIndex];
}