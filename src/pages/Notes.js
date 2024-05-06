import React, { useState } from 'react';
import './home.css';
//<img src="images/Training.jpg" alt="ai-pra" />

function Notes() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNote, setSelectedNote] = useState(null);
    const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  
    const handleAddNote = () => {
      if (newNote.trim() !== '') {
        const note = {
          id: Date.now(),
          text: newNote,
          timestamp: new Date().toLocaleString()
        };
        setNotes([...notes, note]);
        setNewNote('');
        setShowAddNoteModal(false);
      }
    };
  
    const handleDeleteNote = (id) => {
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    };
  
    const handleEditNote = (id) => {
      const noteToEdit = notes.find(note => note.id === id);
      setSelectedNote(noteToEdit);
      setShowAddNoteModal(true);
    };
  
    const handleSaveEdit = () => {
      const updatedNotes = notes.map(note =>
        note.id === selectedNote.id ? { ...note, text: newNote } : note
      );
      setNotes(updatedNotes);
      setNewNote('');
      setShowAddNoteModal(false);
      setSelectedNote(null);
    };
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredNotes = notes.filter(note =>
      note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="note-page">
        <h1>Notes</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <img className="background-images" src="images/N.jpg" alt="ai-pra" />
        <div className="note-list">
          {filteredNotes.map(note => (
            <div className="note-item" key={note.id}>
              <div>{note.text}</div>
              <div>{note.timestamp}</div>
              <div className="note-actions">
                <button onClick={() => handleEditNote(note.id)}>Edit</button>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <button className="add-note-button" onClick={() => setShowAddNoteModal(true)}>Add Note</button>
        {showAddNoteModal && (
          <div className="note-modal-overlay">
            <div className="note-modal">
              <textarea
                value={selectedNote ? selectedNote.text : newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Enter your note..."
              />
              <div className="modal-buttons">
                <button onClick={selectedNote ? handleSaveEdit : handleAddNote}>
                  {selectedNote ? 'Save' : 'Add'}
                </button>
                <button onClick={() => {
                  setShowAddNoteModal(false);
                  setSelectedNote(null);
                }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Notes;
  

