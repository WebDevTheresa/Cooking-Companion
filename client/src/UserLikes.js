import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import { Link, NavLink } from 'react-router-dom';
import { display } from '@mui/system';
import DislikesNotesBar from './DislikesNotesBar';
const UserLikes = ({ SetDisplayLikes }) => {
  const [displayLikes, setDisplayLikes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/getSavedRecipes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDisplayLikes(data.recipe);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  if (!displayLikes) {
    return <div>Loading...</div>;
  }

  return (
    <MainWrapper>
      {/* <Backbutton onClick={returnHome}>⮐</Backbutton> */}
      <Wrapper>
        <NavigationLink to="/"> Home</NavigationLink>
        <NavigationLink to="/FoodSelection"> Ingredients</NavigationLink>
        <NavigationLink to="/LoadRecipe"> Recipes</NavigationLink>
      </Wrapper>

      <ShowLikesDiv>
        {displayLikes &&
          displayLikes.map((likes, index) => {
            const uniqueKey = `recipe_${index}`;
            return (
              <ContentsWrapper key={uniqueKey}>
                <TitleDiv>{likes.recipe.title}</TitleDiv>
                <DislikesNotesBar
                  displayLikes={displayLikes}
                  setDisplayLikes={setDisplayLikes}
                  recipeId={likes.recipe.id}
                />
                <RecipeImg
                  src={likes.recipe.image}
                  alt={likes.recipe.title}
                  style={{ width: 400, height: 400 }}
                />
              </ContentsWrapper>
            );
          })}
      </ShowLikesDiv>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;
const RecipeImg = styled.img`
  height: 200px;
  padding: 20px;
  width: 200px;
`;

const LikedUserRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;

  background-color: white;
`;
const TitleDiv = styled.div`
  inline-size: 350px;
  overflow-wrap: break-word;
`;
const ShowLikesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
`;

const ContentsWrapper = styled.div`
  border: solid 2px beige;
  padding: 15px;
  /* display: flex; */
  /* justify-content: center;
  flex-direction: row; */
`;

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
  margin: 0 0 20px 20px;

  flex-direction: column;
  justify-content: space-between;
  width: 190px;
  background-color: #f7f0e6;
  padding: 30px;
  border-radius: 30px;
`;

const Backbutton = styled.button`
  background-color: #666600;
  margin-left: 20px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;
export default UserLikes;
