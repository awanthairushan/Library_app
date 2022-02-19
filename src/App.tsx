import React from 'react';
import LibraryPage from './views/libraryPage';
import "./assets/scss/_layout.scss";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
      <LibraryPage/>
    </ToastProvider>
  );
}

export default App;
