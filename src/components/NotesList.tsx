import React from 'react';
import { useNotes } from '../store/NotesContext';

function titleFrom(content: string): string {
  return content.trim().slice(0, 32); // requirement: first 32 chars, no ellipsis required
}

export function NotesList() {
  const { state } = useNotes();

  if (state.notes.length === 0) {
    return <p aria-live="polite">No notes yet.</p>;
  }

  return (
    <ul aria-label="Notes list">
      {state.notes.map(note => (
        <li key={note.id}>
          {titleFrom(note.content)}
        </li>
      ))}
    </ul>
  );
}
