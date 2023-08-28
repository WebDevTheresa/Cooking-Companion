import styled from 'styled-components';
import { React, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DislikesBar = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleDiscardButton = async () => {
    setIsLiked(!isLiked);
    const url = `/deleteRecipe/${id}`; // Replace with the actual endpoint URL

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Delete response:', data);
        // Handle successful delete, e.g., update UI or show a success message
      } else {
        throw new Error('Delete request failed');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <RedButton onClick={handleDiscardButton} active={isLiked}>
        <DeleteOutlineIcon />
      </RedButton>
    </div>
  );
};

const RedButton = styled.button`
  color: ${(props) => (props.active ? 'red' : 'black')};
  border: none;
  background-color: white;
`;
export default DislikesBar;
