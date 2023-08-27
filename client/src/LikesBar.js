import styled from 'styled-components';
import { React, useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';

const LikesBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [saveRecipe, setSaveRecipe] = useState();
  const [displayLikes, setDisplayLikes] = useState();

  console.log(isLiked);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };
  // debugger;
  useEffect(() => {
    // if (saveRecipe)
    fetch(`/recipeLikes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe: saveRecipe }),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        setSaveRecipe();
        setDisplayLikes(data.recipe);
        setButtonActive(true);
        console.log('success message');
      })
      .catch((error) => console.log(error));
  }, []);

  const likesSaved = localStorage.getItem('recipe');

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
