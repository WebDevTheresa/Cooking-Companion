import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <ButtonWrapper>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
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
