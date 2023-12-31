import styled from 'styled-components';
import { React, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth0 } from '@auth0/auth0-react';

const LikesBar = ({ recipe }) => {
  const { user } = useAuth0();
  const [isLiked, setIsLiked] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [displayLikes, setDisplayLikes] = useState();

  console.log(isLiked);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);

    fetch(`/recipeLikes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe, email: user.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDisplayLikes(data.recipe);
        setButtonActive(true);
        console.log('success message');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <RedButton onClick={handleButtonClick} active={isLiked}>
        <FavoriteBorderIcon />
      </RedButton>
    </div>
  );
};

const RedButton = styled.button`
  color: ${(props) => (props.active ? 'red' : 'black')};
  border: none;
  background-color: white;
`;

export default LikesBar;
