import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// import Profile from './Profile';

const Navbar = () => {
  return (
    <>
      <ButtonWrapper>
        <LoginButton />
        <LogoutButton />
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 65px;
`;

export default Navbar;
