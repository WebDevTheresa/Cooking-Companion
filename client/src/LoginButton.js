import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LogInBtn onClick={() => loginWithRedirect()}>Log In</LogInBtn>;
};

const LogInBtn = styled.button`
  background-image: linear-gradient(
    to right,
    #eacda3 0%,
    #d6ae7b 51%,
    #eacda3 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
export default LoginButton;
