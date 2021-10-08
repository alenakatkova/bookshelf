import React from 'react';
import ReactDOM from 'react-dom';
import { Logo } from './components/logo';

const App = () => {
  const alertClick = (e) => {
    alert(e.target.dataset.id);
  };

  return (
    <div>
      <Logo/>
      <h1>Bookshelf</h1>
      <button data-id='login' onClick={alertClick}>Login</button>
      <button data-id='register' onClick={alertClick}>Register</button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);