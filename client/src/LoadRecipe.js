import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';

const LoadRecipe = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate(`/FoodSelection`);
  };

  return (
    <>
      <Backbutton onClick={returnHome}>⮐</Backbutton>
    </>
  );
};
const Backbutton = styled.button`
  background-color: #666600;
  margin: 10px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;
export default LoadRecipe;
