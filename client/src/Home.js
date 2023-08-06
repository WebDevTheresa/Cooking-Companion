import styled from 'styled-components';
// import react from 'react';

const Home = () => {
  return (
    <MainWrapper>
      <ElementsWrapper>
        <h1>Cooking Companion</h1>
        <button>Enter</button>
      </ElementsWrapper>
    </MainWrapper>
  );
};

const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MainWrapper = styled.div``;

export default Home;
