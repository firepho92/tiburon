import React from 'react';
import ContextProvider from './context/ContextProvider';
import AppWrapper from './components/AppWrapper';
import './App.css';

function App() {
  return (
    <ContextProvider>
    	<AppWrapper />
    </ContextProvider>
  );
}

export default App;
