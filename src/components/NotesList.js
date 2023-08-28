import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleEditNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleEditNote={() => handleEditNote(note.id, note.text)}
				/>
			))}
			<AddNote handleAddNote={handleAddNote}
			handleEditNote={handleEditNote}
			/>
		</div>
	);
};

export default NotesList;
