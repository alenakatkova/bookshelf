import React from 'react';
import ReactDOM from 'react-dom';
import { Logo } from './components/logo';
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";

const LoginForm = ({onSubmit, buttonText}) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      login: login,
      password: password
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='login'>Login</label>
      <input
        id='login'
        type='text'
        name='login'
        onChange={(e) => setLogin(e.target.value)}
        required />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        required/>
      <button type='submit'>{buttonText}</button>
    </form>
  );
};

const App = () => {
  const [openDialog, setOpenDialog] = React.useState('none');

  const handleSubmit = (formData) => {
    console.log(formData);
  };

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
        <LoginForm onSubmit={handleSubmit} buttonText='Login'/>
        <button onClick={() => setOpenDialog('none')}>Close</button>
      </Dialog>

      <Dialog
        isOpen={openDialog === 'register'}
        aria-label='Register form dialog'
      >
        <LoginForm onSubmit={handleSubmit} buttonText='Register'/>
        <button onClick={() => setOpenDialog('none')}>Close</button>
      </Dialog>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));