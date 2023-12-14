import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ClientRegistration(){
    const[fname, setFname] = useState()
 const[lname, setLname] = useState()
 const[email, setEmail] = useState()
 const[password, setPassword] = useState()
 const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/admin', {fname, lname, email, password})
    .then(result => {console.log(result)
    navigate('/')})
    .catch(err => console.log(err))

  }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-centre'>
           <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2 >Client Registration</h2>
                <div className='mb-2'>
                    <label htmlFor=' '>First Name</label>
                    <input type="fname" placeholder='Enter First Name' className='form-control'
                    onChange={(e)=> setFname(e.target.value)} />
                </div>
               <div className='mb-2'>
                    <label htmlFor=' '>Last Name</label>
                    <input type="lname" placeholder='Enter Last Name' className='form-control'
                     onChange={(e)=> setLname(e.target.value)} />
                </div>
               <div className='mb-2'>
                    <label htmlFor=' '>Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                     onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' 
                     onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <button className='btn btn-success '>Submit</button>
            </form>
           </div>
        </div>
    )
}

export default ClientRegistration;
