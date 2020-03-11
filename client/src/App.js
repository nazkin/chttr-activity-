import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />

      </BrowserRouter>

    </div>
  );
}

export default App;
