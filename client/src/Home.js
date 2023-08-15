import styled from 'styled-components';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Navbar from './Navbar';
//fix responsiveness for background image
const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/FoodSelection');
  };
  return (
    <MainWrapper>
      <ElementsWrapper>
        <Navbar />
        {/* <LogoutButton />
        <LoginButton /> */}
        <Profile />
        <Header>
          Cooking <br></br>Companion
        </Header>

        <Button onClick={handleButtonClick}>Enter</Button>
        <p>Cooking Simplified: Your Ingredients, Endless Possibilities.</p>
      </ElementsWrapper>
    </MainWrapper>
  );
};

const ElementsWrapper = styled.div`
  background-image: url(${cooking});
  background-size: cover;
  background-position: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }

  /* width: 100vh; */
  /* background-color: orange; */
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
  height: 77px;
  font-size: 43px;
  width: 221px;
  background-color: #524333;
  color: #e3d7ba;
  border: none;
  border-radius: 38px;
  color: white;
  margin-left: 80px;

  &:hover {
    background-color: #635b48;
  }
`;

const Header = styled.h1`
  font-size: 87px;
  font-family: Arial, Helvetica, sans-serif;
  color: #524333;
  margin-left: 80px;
`;

export default Home;
