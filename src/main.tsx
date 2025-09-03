import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotesProvider } from './store/NotesContext';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotesProvider>
      <div className="container">
        <App />
      </div>
    </NotesProvider>
  </React.StrictMode>
);
