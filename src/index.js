import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavHeader, ContentBlock } from './App.js';

function App() {
  return (
    <div className=''>
      <NavHeader />
      <ContentBlock />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
