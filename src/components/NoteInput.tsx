import React, { useRef, useState } from 'react';
import { useNotes } from '../store/NotesContext';

export function NoteInput() {
  const { addNote } = useNotes();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = value.trim();
  const disabled = trimmed.length === 0;

  function submit() {
    if (disabled) return;
    addNote(trimmed);
    setValue('');
    // return focus to input for fast entry
    inputRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="row">
      <label htmlFor="noteText" className="sr-only">New note</label>
      <input
        id="noteText"
        ref={inputRef}
        type="text"
        placeholder="Type a note and press Add"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="New note"
        autoFocus
      />
      <button onClick={submit} disabled={disabled} aria-disabled={disabled} aria-label="Add note">
        Add
      </button>
    </div>
  );
}
