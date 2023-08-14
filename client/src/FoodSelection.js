// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Accordion from './Accordion';
import background1 from './pictures/background1.png';
import { useNavigate } from 'react-router-dom';

const FoodSelection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  // const [ingredientChoice, setIngredientChoice] = useState();
  // const { _id } = useParams();
  // useEffect(() => {
  //   fetch(`/getIngredients`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('cannot retrieve ingredients');
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setIngredientChoice(data);
  //       // console.log(data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [_id]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const returnHome = () => {
    navigate(`/home`);
  };

  const accordionItems = [
    {
      title: 'Protien',
      content: (
        <Button
          onClick={handleClick}
          style={{
            backgroundColor: isClicked ? 'green' : 'grey',
            color: 'white', // Set text color based on the background
          }}
        >
          {isClicked ? 'Selected' : 'Select'}
        </Button>
      ),
    },
    {
      title: 'Vegetables',
      content: 'Content for item 2...',
    },
    {
      title: 'Dairy',
      content: 'Content for item 2...',
    },
    {
      title: 'Spices',
      content: 'Content for item 2...',
    },
  ];

  if (!FoodSelection) {
    return <div>Loading...</div>;
  }
  return (
    <MainWrapper>
      <button onClick={returnHome}>return</button>
      <h1>select your ingrdients</h1>
      <Accordion items={accordionItems} />
      <button>Next</button>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  background-image: url(${background1});
  background-repeat: repeat;
  background-size: auto;
  /* background-position: center; */
  height: 100vh;

  position: relative;
  /* left: 25%; */
  /* width: 50%; */
  /* height: 100vh; */
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const Button = styled.button`
  width: 90px;
  height: 37px;
  border-style: none;
  border-radius: 22%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
export default FoodSelection;
