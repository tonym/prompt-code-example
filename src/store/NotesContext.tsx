import React, { createContext, useContext, useReducer, useMemo } from 'react';

type NoteId = string;

export interface Note {
  id: NoteId;
  content: string;     // full text
  createdAt: number;   // Date.now()
}

interface NotesState {
  notes: Note[];
}

type Action =
  | { type: 'ADD_NOTE'; payload: { content: string } };

const initialState: NotesState = { notes: [] };

function generateId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `n_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function reducer(state: NotesState, action: Action): NotesState {
  switch (action.type) {
    case 'ADD_NOTE': {
      const content = action.payload.content.trim();
      if (content.length === 0) return state;
      const next: Note = { id: generateId(), content, createdAt: Date.now() };
      return { notes: [next, ...state.notes] };
    }
    default:
      return state;
  }
}

interface NotesContextValue {
  state: NotesState;
  addNote: (content: string) => void;
}

const NotesContext = createContext<NotesContextValue | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = (content: string) => dispatch({ type: 'ADD_NOTE', payload: { content } });

  const value = useMemo(() => ({ state, addNote }), [state]);

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error('useNotes must be used within a NotesProvider');
  return ctx;
}
