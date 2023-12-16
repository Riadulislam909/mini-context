//From here we learn how to access and send data
import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //data fetch in UserContext

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
            e.preventDefault()
            setUser({username, password})
    }
    return (
        <div>
           <h2>Login</h2>
           <input type="text" placeholder='username'
           value={username} onChange={(e)=> setUsername(e.target.value)}/>
           <input type="text" placeholder='password'
           value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <br />
           <button onClick={handleSubmit}>Submit</button> 
        </div>
    );
};

export default Login;