import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditIcon from '@mui/icons-material/Edit';

const DislikesNotesBar = ({ recipeId, displayLikes, setDisplayLikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [clickNoteAdded, setClickNoteAdded] = useState(false);
  const [clickReadNote, setClickReadNote] = useState(false);
  const [deletedRecipe, setDeletedRecipe] = useState('');
  const [addRecipe, setAddRecipe] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState();
  const [notes, setNotes] = useState();

  const fetchNotes = () => {
    fetch(
      `/getNotes/?id=${recipeId}&userEmail=${
        JSON.parse(localStorage.getItem('user')).email
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('cannot find note');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setNotes(data.notes);
        setAddRecipe(data.notes.length ? data.notes[0].note : '');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDiscardButton = () => {
    setIsLiked(!isLiked);
    fetch(`/deleteRecipe/`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipeData: recipeId,
        userEmail: JSON.parse(localStorage.getItem('user')).email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDeletedRecipe(recipeId);
        setNotes([]);
        const result = displayLikes.filter(
          (likedRecipe) => likedRecipe.recipe.id !== recipeId
        );

        setDisplayLikes(result);
      })
      .catch((error) => console.error(error));
  };

  const handleNoteSubmit = () => {
    setClickNoteAdded(!clickNoteAdded);
    fetch(`/recipes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note: addRecipe,
        id: recipeId,
        userEmail: JSON.parse(localStorage.getItem('user')).email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAddRecipe(data.note);
        console.log();
        setNotes([{ note: data.note }]);
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

  const handleEditNote = (event) => {
    setClickReadNote(!clickReadNote);
    fetch(`/patchARecipe`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipeId: recipeId, updatedRecipe: addRecipe }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('success message after PATCH');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <SubmitDiv>
        {notes &&
          !!notes.length &&
          notes.map((note, index) => {
            return <p key={index}>{note.note}</p>;
          })}
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
          {notes && notes.length ? <EditIcon /> : <NoteAddIcon />}
        </NoteButtonWithIcon>
      </SubmitDiv>

      <DeleteButtonWithIcon onClick={handleDiscardButton} active={isLiked}>
        <DeleteOutlineIcon />
      </DeleteButtonWithIcon>
    </div>
  );
};

const DeleteButtonWithIcon = styled.button`
  color: red;
  border: none;
  background-color: white;
`;

const NoteButtonWithIcon = styled.button`
  color: ${(props) => (props.active ? 'green' : 'black')};
  border: none;
  background-color: white;
`;

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
  white-space: pre-wrap;
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
