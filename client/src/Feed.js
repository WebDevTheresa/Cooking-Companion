import styled from 'styled-components';
import React from 'react';
import Sidebar from './SideBar';
import LoadRecipe from './LoadRecipe';
import LikesBar from './LikesBar';

const Feed = () => {
  return (
    <Wrapper>
      <Sidebar />
      <RecipeFeed>
        {JSON.parse(localStorage.getItem('recipeResults')).map((recipe) => {
          return (
            <ContentsWrapper key={recipe.id}>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <img
                src={recipe.image}
                alt="food"
                key={`${recipe.id}-image`}
                style={{ width: 400, height: 400 }}
              />
              <LikesBar recipe={recipe} />
            </ContentsWrapper>
          );
        })}
      </RecipeFeed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const RecipeFeed = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 120px;
  justify-content: center;
  padding: 60px;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
`;

const RecipeTitle = styled.p`
  inline-size: 350px;
  overflow-wrap: break-word;
`;
const ContentsWrapper = styled.div`
  border-bottom: solid 2px beige;
  padding: 37px;
`;
export default Feed;
