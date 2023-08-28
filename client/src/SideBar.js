import styled from 'styled-components';
import React, { useEffect, useState } from 'react'; // Corrected capitalization
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserLikes from './UserLikes';

const Sidebar = () => {
  // const [displayLikes, setDisplayLikes] = useState();

  // const [buttonActive, setButtonActive] = useState(false);

  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate(`/UserLikes`);
  };

  return (
    <div>
      <Wrapper>
        <NavigationLink to="/"> Home</NavigationLink>
        <NavigationLink to="/FoodSelection"> Ingredients</NavigationLink>
        <AddRecipeButton onClick={handleSaveClick}>My Likes</AddRecipeButton>
      </Wrapper>
    </div>
  );
};

const NavigationLink = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #c47d1f;
    width: 70%;
    border-radius: 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 80px;
  margin-left: 20px;
  background-color: #f7f0e6;
  padding: 30px;
  border-radius: 30px;
`;

const AddRecipeButton = styled.button`
  background-image: linear-gradient(
    to right,
    #649173 0%,
    #dbd5a4 51%,
    #649173 100%
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
export default Sidebar;
