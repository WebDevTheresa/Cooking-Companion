import { useState } from 'react';
import styled from 'styled-components';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
// import SideBar from './SideBar';
import { Link, NavLink } from 'react-router-dom';

const PostRecipe = () => {
  const navigate = useNavigate();
  const [addRecipe, setAddRecipe] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState();
  // console.log(addRecipe);

  const handlePost = () => {
    console.log();

    fetch(`/recipes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe: addRecipe }),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        setAddRecipe('');
        setDisplayRecipe(data.recipe);
        setIsButtonClicked(true);
        console.log('success message');
      })
      .catch((error) => console.log(error));
  };

  const handleRecipe = (event) => {
    const recipeText = event.target.value;
    setAddRecipe(recipeText);
  };

  const searchRecipes = () => {
    navigate(`/LoadRecipe`);
  };

  return (
    <MainWrapper>
      <Backbutton onClick={searchRecipes}>⮐</Backbutton>

      <TextAreaWrapper>
        <Wrapper>
          <NavigationLink to="/"> Home</NavigationLink>
          <NavigationLink to="/FoodSelection"> Ingredients</NavigationLink>
          <NavigationLink to="/LoadRecipe"> Recipes</NavigationLink>
        </Wrapper>
        <TextArea
          placeholder="What's the recipe?"
          onChange={handleRecipe}
          value={addRecipe}
        />
        <SubmitDiv>
          {isButtonClicked && <RenderedText>{displayRecipe}</RenderedText>}
          <Button onClick={handlePost}>Add Recipe</Button>
        </SubmitDiv>
      </TextAreaWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  /* border-bottom: solid 8px lightgrey; */
  margin: 0;
  background-image: url(${cooking});
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const TextArea = styled.textarea`
  border: solid 1px grey;
  text-decoration: none;
  resize: none;
  font-size: 25px;
  height: 200px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #215f00 0%,
    #e4e4d9 51%,
    #215f00 100%
  );
  margin: 10px;
  height: 80px;
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

const RenderedText = styled.div`
  margin: 20px;
  font-size: 18px;
  white-space: pre-wrap; /* Preserve line breaks and spaces */
`;

const Backbutton = styled.button`
  margin-bottom: 20px;
  background-color: #666600;
  margin-left: 10px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */

  /* align-items: center; */
  /* height: 100vh; */
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

const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 80px;
  background-color: #f7f0e6;
  padding: 30px;
  border-radius: 30px;
`;
export default PostRecipe;
