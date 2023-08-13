// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from './Accordion';

const FoodSelection = () => {
  const accordionItems = [
    {
      title: 'Protien',
      content: 'Content for item 1...',
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

  return (
    <MainWrapper>
      <Accordion items={accordionItems} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
export default FoodSelection;
