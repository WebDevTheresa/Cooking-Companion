import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import { useParams } from 'react-router-dom';

const DislikesNotesBar = ({ recipeId, displayLikes, setDisplayLikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [clickNoteAdded, setClickNoteAdded] = useState(false);
  const [clickReadNote, setClickReadNote] = useState(false);
  const [deletedRecipe, setDeletedRecipe] = useState('');
  const [addRecipe, setAddRecipe] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState();
  //delete fetch triggers when button clicked

  useEffect(() => {
    const storedRecipeText = localStorage.getItem('recipeText');
    if (storedRecipeText) {
      setAddRecipe(storedRecipeText);
    }

    const storedSubmittedRecipe = localStorage.getItem('submittedRecipe');
    if (storedSubmittedRecipe) {
      setDisplayRecipe(storedSubmittedRecipe);
      setIsButtonClicked(true);
    }
  }, []);

  const handleDiscardButton = () => {
    setIsLiked(!isLiked);
    fetch(`/deleteRecipe/`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipeData: recipeId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDeletedRecipe(recipeId);
        const result = displayLikes.filter(
          (likedRecipe) => likedRecipe.recipe.id !== recipeId
        );
        // console.log(result)
        setDisplayLikes(result);
        debugger;
      })
      .catch((error) => console.error(error));

    // console.log(data);
  };
  // text box should popup when clicked and the postend point should be called
  const handleNoteSubmit = () => {
    setClickNoteAdded(!clickNoteAdded);
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
        localStorage.setItem('submittedRecipe', JSON.stringify(data.recipe));
      })
      .catch((error) => console.log(error));
  };

  const handleRecipe = (event) => {
    const recipeText = event.target.value;
    setAddRecipe(recipeText);
    localStorage.setItem('recipeText', recipeText);
  };
  const handleAddNote = () => {
    setClickNoteAdded(!clickNoteAdded);
  };

  const handleReadNote = () => {
    setClickReadNote(!clickReadNote);
    // should be able to read note that was posted, maybe when clicked a counter will show on the image
    // or when you hover over the icon it shows the note in a modal
  };

  return (
    <div>
      <DeleteButtonWithIcon onClick={handleDiscardButton} active={isLiked}>
        <DeleteOutlineIcon />
      </DeleteButtonWithIcon>
      <SubmitDiv>
        {clickNoteAdded && (
          <>
            <TextArea
              placeholder="Leave A Note"
              onChange={handleRecipe}
              value={addRecipe}
            />
            <NoteSubmitButton onClick={handleNoteSubmit}>
              Submit Note
            </NoteSubmitButton>
          </>
        )}

        {isButtonClicked && <RenderedText>{displayRecipe}</RenderedText>}
        <NoteButtonWithIcon onClick={handleAddNote} active={clickNoteAdded}>
          <NoteAddIcon />
        </NoteButtonWithIcon>
      </SubmitDiv>

      {/* <ReadButtonWithIcon onClick={handleReadNote} active={clickReadNote}>
        <MenuBookSharpIcon />
      </ReadButtonWithIcon> */}
    </div>
  );
};

const DeleteButtonWithIcon = styled.button`
  color: red;
  border: none;
  background-color: white;
  /* Add more shared styling here */
`;

const NoteButtonWithIcon = styled.button`
  color: ${(props) => (props.active ? 'green' : 'black')};
  border: none;
  background-color: white;
  /* Add more shared styling here */
`;

// const ReadButtonWithIcon = styled.button`
//   color: ${(props) => (props.active ? 'blue' : 'black')};
//   border: none;
//   background-color: white;
//   /* Add more shared styling here */
// `;

const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const RenderedText = styled.div`
  margin: 20px;
  font-size: 18px;
  white-space: pre-wrap; /* Preserve line breaks and spaces */
`;

const TextArea = styled.textarea`
  border: solid 1px grey;
  text-decoration: none;
  resize: none;
  font-size: 25px;
  height: 60px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

const NoteSubmitButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  margin-left: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export default DislikesNotesBar;