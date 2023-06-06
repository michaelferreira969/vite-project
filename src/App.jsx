import React, { useState } from 'react';
import { LoginContainer } from './components/LoginContainer';
import { ImageContainer } from './components/ImageContainer';
import { GlobalStyle } from "./styles/Global";
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="container">
        <LoginContainer/>
        <ImageContainer/>
      </div>    
    </>
  );
}

export default App;

