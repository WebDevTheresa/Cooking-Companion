// Accordion.js
import React from 'react';
import AccordionItem from './AccordionItem';
import styled from 'styled-components';

const Accordion = ({ items }) => {
  return (
    <WrapperAccord>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </WrapperAccord>
  );
};

const WrapperAccord = styled.div`
  position: relative;
  width: 50%;
  left: 25%;
`;
export default Accordion;
