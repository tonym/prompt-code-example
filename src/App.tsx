import React from 'react';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';

export default function App() {
  return (
    <>
      <h1>Notes</h1>
      <NoteInput />
      <NotesList />
    </>
  );
}
