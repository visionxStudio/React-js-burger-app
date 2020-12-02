import React, { useState, useEffect }  from 'react';
import './App.css';
import Login from './components/Auth/Login/Login'
import fire from './config/firebaseConfig';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError('');
    setpasswordError('');
  }

  // function to handle the login of the user
  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch(err.code){
        case "auth/invalid-email" : 
        case "auth/user-disabled" :
        case "auth/user-not-found" :
          setEmailError(email.message);
          break;
        case "auth/wrong-password":
           setpasswordError(err.message);
           break;

      }
    })
  }

  // function to handle the signup request of the user

  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code){
        case "auth/email-already-in-use" : 
        case "auth/invalid-email" :
          setEmailError(email.message);
          break;
        case "auth/weak-password":
           setpasswordError(err.message);
           break;

      }
    })
  }

  // Function to handle the signout request
  const handleLogout = () => {
    fire.auth().signOut();
  }

  // Listening for authentication changes of the user
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  })


  return (
    <div className="App">
      <Login> </Login>
    </div>
  );
}

export default App;
