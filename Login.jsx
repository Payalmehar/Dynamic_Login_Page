import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()
   
     const handleSubmit = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:3001/login', {email, password})
       .then(result => {console.log(result)
        if(result.data === "Success"){
            navigate('/admin')
        }
    })
       .catch(err => console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-content'>

             <div className='w-50 bg-white rounded p-3'>
                <form onSubmit ={ handleSubmit }>
                <h2>Login</h2>
                <div className='mb-2'>
                    <label htmlFor=' '>Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                        onChange={(e)=> setEmail(e.target.value) }/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control rounded-0' 
                        onChange={(e)=> setPassword(e.target.value)} />
                </div>
                </form>
                <p>Already Have an Account</p>
                <Link to="/admin" className='btn btn-success'>Login</Link>

             </div>
        </div>
    )
}

export default Login;