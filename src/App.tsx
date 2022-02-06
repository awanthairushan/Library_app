import React from 'react';
import './App.css';
import LibraryPage from './views/libraryPage';
import "./assets/scss/main.scss";
import { ToastProvider } from 'react-toast-notifications';


function App() {
  return (
    <ToastProvider>
      <LibraryPage/>
    </ToastProvider>
  );
}

export default App;
