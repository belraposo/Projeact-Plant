import { AboutBox, Container, PlantImage, SocialMedia } from './style';
import Plant from '../../assets/plant.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/insta.png';
import Twitter from '../../assets/twitter.png';

function Main() {
  return(
    <Container>
      <AboutBox>
        <h5> Oxygen Plant </h5>
        <h1> KEEP YOUR PLANTS HEALTHY </h1>
        <p> Plants reduce stres levels and boost your mood. Making them perfect for your home and your work space, too. </p>
        <button> See More </button>
      </AboutBox>
      <PlantImage>
        <img src={Plant} alt='Plant' />
      </PlantImage>
      <SocialMedia>
        <img src={Facebook} alt='Facebook' />
        <img src={Instagram} alt='Instagram' />
        <img src={Twitter} alt='Twitter' />
        <span></span>
      </SocialMedia>
    </Container>
  )
}

export default Main;