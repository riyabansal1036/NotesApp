// import React, { useState, useEffect } from 'react';
// const AddNote = ({ handleAddNote }) => {
// 	const [noteText, setNoteText] = useState('');
// 	const characterLimit = 200;

// const AddNote = ({ handleAddNote,  noteToEdit }) => {
//   const [noteText, setNoteText] = useState('');
//   const characterLimit = 200;

//   useEffect(() => {
//     if (noteToEdit) {
//       setNoteText(noteToEdit.text);
//     }
//   }, [noteToEdit]);


// 	const handleChange = (event) => {
// 		if (characterLimit - event.target.value.length >= 0) {
// 			setNoteText(event.target.value);
// 		}
// 	};

// 	const handleSaveClick = () => {
// 		if (noteText.trim().length > 0) {
// 			handleAddNote(noteText);
// 			setNoteText('');
// 		}
// 	};

// 	return (
// 		<div className='note new'>
// 			<textarea
// 				rows='8'
// 				cols='10'
// 				placeholder='Type to add a note...'
// 				value={noteText}
// 				onChange={handleChange}
// 			></textarea>
// 			<div className='note-footer'>
// 				<small>
// 					{characterLimit - noteText.length} Remaining
// 				</small>
// 				<button className='save' onClick={handleSaveClick}>
//         {noteToEdit ? 'Save Edit' : 'Save'}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default AddNote;


// import { useState, useEffect } from 'react';

// const AddNote = ({ handleAddNote, noteToEdit, handleEditNote }) => {
//   const [noteText, setNoteText] = useState('');
//   const characterLimit = 200;

//   useEffect(() => {
//     if (noteToEdit !== null) {
//       setNoteText(noteToEdit.text);
//     }
//   }, [noteToEdit]);

//   const handleChange = (event) => {
//     if (characterLimit - event.target.value.length >= 0) {
//       setNoteText(event.target.value);
//     }
//   };

//   const handleSaveClick = () => {
//     if (noteText.trim().length > 0) {
//       if (noteToEdit !== null) {
//         handleEditNote(noteToEdit.id, noteText);
//       } else {
//         handleAddNote(noteText);
//       }
//       setNoteText('');
//     }
//   };

//   return (
//     <div className={`note ${noteToEdit ? 'edit' : 'new'}`}>
//       <textarea
//         rows='8'
//         cols='10'
//         placeholder='Type to add a note...'
//         value={noteText}
//         onChange={handleChange}
//       ></textarea>
//       <div className='note-footer'>
//         <small>{characterLimit - noteText.length} Remaining</small>
//         <button className='save' onClick={handleSaveClick}>
//           {noteToEdit ? 'Save Edit' : 'Save'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddNote;




// import React, { useState, useEffect } from 'react';

// const AddNote = ({ handleAddNote, handleEditNote, noteToEdit, handleCancelClick }) => {
//   const [noteText, setNoteText] = useState('');
//   const characterLimit = 200;

//   useEffect(() => {
//     if (noteToEdit) {
//       setNoteText(noteToEdit.text);
//     }
//   }, [noteToEdit]);

//   const handleChange = (event) => {
//     if (characterLimit - event.target.value.length >= 0) {
//       setNoteText(event.target.value);
//     }
//   };

//   const handleSaveClick = () => {
//     if (noteText.trim().length > 0) {
//       if (noteToEdit) {
//         handleEditNote(noteToEdit.id, noteText);
//       } else {
//         handleAddNote(noteText);
//       }
//       setNoteText('');
//       if (handleCancelClick) {
//         handleCancelClick();
//       }
//     }
//   };

//   return (
//     <div className='note new'>
//       <textarea
//         rows='8'
//         cols='10'
//         placeholder='Type to add/edit a note...'
//         value={noteText}
//         onChange={handleChange}
//       ></textarea>
//       <div className='note-footer'>
//         <small>{characterLimit - noteText.length} Remaining</small>
//         <button className='save' onClick={handleSaveClick}>
//           {noteToEdit ? 'Save Edit' : 'Save'}
//         </button>
//         {handleCancelClick && (
//           <button onClick={handleCancelClick}>Cancel</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddNote;



import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
