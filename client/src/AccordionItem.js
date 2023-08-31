// AccordionItem.js
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

const AccordionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [chosenIngredients, setChosenIngredients] = useState([]);

  const [content, setContent] = useState([]);

  const toggleAccordion = (foodtype) => {
    fetch(`/getIngredients/?foodtype=${foodtype}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('cannot retrieve ingredients');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setContent(data.data);
        setIsOpen(!isOpen);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };
  const handleClick = (foodname) => {
    if (chosenIngredients.includes(foodname)) {
      setChosenIngredients(
        chosenIngredients.filter((food) => food !== foodname)
      );
    } else {
      setChosenIngredients([...chosenIngredients, foodname]);
    }

    const existingValue = localStorage.getItem('ingredients');
    const newValue = existingValue ? existingValue + ',' + foodname : foodname;
    localStorage.setItem('ingredients', newValue);
  };

  return (
    <AccordionWrapper>
      <Accordionitem>
        <Accordionbutton onClick={() => toggleAccordion(title)}>
          {title}
        </Accordionbutton>
        {isOpen && (
          <Accordioncontent>
            {content.map((item) => {
              return (
                <ContentsButton
                  key={item.name}
                  onClick={() => handleClick(item.name)}
                  style={{
                    backgroundColor: chosenIngredients.includes(item.name)
                      ? 'green'
                      : 'grey',
                    color: 'white',
                  }}
                >
                  {chosenIngredients.includes(item.name)
                    ? `${item.name} ✓ `
                    : `${item.name}`}
                </ContentsButton>
              );
            })}
          </Accordioncontent>
        )}
      </Accordionitem>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  width: 100%;
`;

const Accordionitem = styled.div``;

const Accordionbutton = styled.button`
  width: 100%;
  background-image: linear-gradient(
    to right,
    #603813 0%,
    #b29f94 51%,
    #603813 100%
  );
  padding: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

const Accordioncontent = styled.div`
  background-color: #f6f3f0;
  padding: 10px;
`;

const ContentsButton = styled.button`
  width: 107px;
  height: 37px;
  margin: 4px;
  border-style: none;
  border-radius: 44%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export default AccordionItem;
