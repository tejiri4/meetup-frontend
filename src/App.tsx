import React from 'react';

import './App.scss';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Chat text="Hello all!" end white />
    </div>
  );
}

export default App;
