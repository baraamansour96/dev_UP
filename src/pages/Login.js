import React, { useState } from 'react';
import './home.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'
//import  Validation from './LoginValidation';


function Login() {
const [values,setValues] = useState( { email:'', password: '' })
const navigate = useNavigate();
const [errors,setErrors]= useState({})
const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit = (event) =>{
   event.preventDefault();
   axios.post('http://localhost:3003/login', values)
    .then(res => {
     if(res.data === "Success"){
       /* alert("Success")*/
        navigate('/Home');
     }else{
        console.log(res)
        alert("Please check the password or email address as they are incorrect")
     }
    })
    .catch(err => console.log(err));
}

/*function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send login request to server
  };*/

  return (
    <div className='log'>
    <form onSubmit={handleSubmit} action='Home' method='post'>
     <center>
     <img className="login-logo" src="images/devo.jpg" alt="ai-pra" width="200px" />
     </center>
     <h1> Login systeem</h1>
     <input  type='text' name='username' placeholder='Username or Email'required></input>
     <input  type='password' name='password' placeholder='password' required></input>
     <input type='submit' value='Login'></input>
    </form>
   
    </div>
  );
}

export default Login;
