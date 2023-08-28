import styled from 'styled-components';
import { React, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const DislikesNotesBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);

  const handleDiscardButton = () => {
    setIsLiked(!isLiked);
    //delete fetch triggers when button clicked
  };

  const handleAddNote = () => {
    setNoteAdded(!noteAdded);

    // text box should popup when clicked and the postend point should be called
  };

  return (
    <div>
      <RedButton onClick={handleDiscardButton} active={isLiked}>
        <DeleteOutlineIcon />
      </RedButton>
      <RedButton onClick={handleAddNote} active={noteAdded}>
        <NoteAddIcon />
      </RedButton>
    </div>
  );
};

const RedButton = styled.button`
  color: ${(props) => (props.active ? 'red' : 'black')};
  border: none;
  background-color: white;
`;
export default DislikesNotesBar;
