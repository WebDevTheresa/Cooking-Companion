import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  useEffect(() => {
    if (isAuthenticated && user) {
      fetch(`/createUser`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('cannot find user');
          }
          return res.json();
        })
        .then((data) => {})
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [user, isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Wrapper>
        {/* <Image src={user.picture} alt={user.name} /> */}
        <Header>Hello! {user.name}</Header>
        {/* <p>{user.email}</p> */}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #ffff;
`;

const Header = styled.h2`
  color: #382a0b;
`;
export default Profile;
