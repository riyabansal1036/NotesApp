// import { MdDeleteForever } from 'react-icons/md';

// const Note = ({ id, text, date, handleDeleteNote,handleEditNote }) => {
// 	return (
// 		<div className='note'>
// 			<span>{text}</span>
// 			<div className='note-footer'>
// 				<small>{date}</small>
// 				<button onClick={handleEditNote}>Edit</button>
// 				<MdDeleteForever
// 					onClick={() => handleDeleteNote(id)}
// 					className='delete-icon'
// 					size='1.3em'
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Note;



// 
import { useState } from 'react';
const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveEditClick = () => {
    if (editedText.trim().length > 0) {
      handleEditNote(id, editedText);
      setEditing(false);
    }
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <div className='note'>
      {editing ? (
        <>
          <textarea
            rows='8'
            cols='10'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <div className='note-footer'>
            <button onClick={handleSaveEditClick}>Save Edit</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div className='note-footer'>
            <small>{date}</small>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => handleDeleteNote(id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};
export default Note; 