import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote
}) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          record={note.record}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
