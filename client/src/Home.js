import styled from 'styled-components';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Navbar from './Navbar';
import { useAuth0 } from '@auth0/auth0-react';
//fix responsiveness for background image
const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleButtonClick = () => {
    navigate('/FoodSelection');
  };
  return (
    <MainWrapper>
      <ElementsWrapper>
        <Navbar />
        <Profile />
        <Header>
          Cooking <br></br>Companion
        </Header>

        <Button onClick={handleButtonClick} disabled={!isAuthenticated}>
          Enter
        </Button>
        <Prompt>Please Log In to proceed</Prompt>
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

  color: #e3d7ba;
  border: none;
  border-radius: 38px;
  color: white;
  margin-left: 80px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#524333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
const Prompt = styled.p`
  margin-left: 100px;
`;
const Header = styled.h1`
  font-size: 87px;
  font-family: Arial, Helvetica, sans-serif;
  color: #524333;
  margin-left: 80px;
`;

export default Home;
