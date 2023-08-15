// AccordionItem.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <Accordionitem>
        <Accordionbutton onClick={toggleAccordion}>{title}</Accordionbutton>
        {isOpen && <Accordioncontent>{content}</Accordioncontent>}
      </Accordionitem>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  width: 100%;
  /* border: 1px solid #ccc; */
`;

const Accordionitem = styled.div`
  /* border-top: 1px solid #ccc; */
`;

const Accordionbutton = styled.button`
  width: 100%;
  background-image: linear-gradient(
    to right,
    #603813 0%,
    #b29f94 51%,
    #603813 100%
  );
  /* background-color: #e7e2da; */
  padding: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

const Accordioncontent = styled.div`
  background-color: #f6f3f0;
  padding: 10px;
`;

export default AccordionItem;
