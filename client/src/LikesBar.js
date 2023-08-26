import styled from 'styled-components';
import { React, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';

const LikesBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const { id } = useParams();
  console.log(isLiked);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
    debugger;
    // const requestData = {
    //   recipe: id,
    // };
    fetch(`/recipes/like`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe: isLiked }),
    })
      .then((response) => {
        if (response.status === 200) {
          setButtonActive(true);
          console.log('Recipe liked successfully');
        } else {
          console.log('Failed to like the recipe');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <RedButton onClick={handleButtonClick} active={isLiked}>
        {isLiked ? <FavoriteBorderIcon /> : <FavoriteBorderIcon />}
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
