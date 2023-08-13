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
  border: 1px solid #ccc;
`;

const Accordionitem = styled.div`
  border-top: 1px solid #ccc;
`;

const Accordionbutton = styled.button`
  width: 100%;
  background-color: #f5f5f5;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
`;

const Accordioncontent = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
`;

export default AccordionItem;
