import styled from 'styled-components';

const Navbar = () => {
  return (
    <div>
      <ButtonWrapper>
        <Button>Login</Button>
      </ButtonWrapper>
    </div>
  );
};
const Button = styled.button`
  border-style: none;
  background-color: #f49d0c;
  width: 60px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fef3c7;
  width: 100%;
  height: 60px;
`;

export default Navbar;
