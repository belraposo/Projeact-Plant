import Search from '../../assets/search.png';
import Profile from '../../assets/profile.png';
import Menu from '../../assets/menu.png';
import { Box, Container } from './style';

function Header() {
  return(
    <Container>
      <nav>
        <h3> Plant Bell </h3>
        <ul>
          <li> About Us </li>
          <li> Our Products </li>
          <li> Contact Us </li>
        </ul>
        <Box>
          <div>
            <img src={Search} alt='Search' />
            <img src={Profile} alt='Profile' />
            <img src={Menu} alt='Menu' />
          </div>
        </Box>
      </nav>
    </Container>
  )
}

export default Header