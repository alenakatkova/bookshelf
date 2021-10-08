import React from 'react';
import ReactDOM from 'react-dom';
import { Logo } from './components/logo';
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";

const App = () => {
  const [openDialog, setOpenDialog] = React.useState('none');

  return (
    <div>
      <Logo/>
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenDialog('login')}>Login</button>
        <button onClick={() => setOpenDialog('register')}>Register</button>
      </div>

      <Dialog
        isOpen={openDialog === 'login'}
        aria-label='Login form dialog'
      >
        Login
      </Dialog>

      <Dialog
        isOpen={openDialog === 'register'}
        aria-label='Register form dialog'
      >
        Register
      </Dialog>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));