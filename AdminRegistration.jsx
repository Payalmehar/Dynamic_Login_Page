import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function AdminRegistration(){
 const[fname, setFname] = useState()
 const[lname, setLname] = useState()
 const[email, setEmail] = useState()
 const[password, setPassword] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/client', {fname, lname, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }


    return(
       
             <div className='d-flex vh-100 bg-primary justify-content-center align-centre'>
           <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2 >Admin Registration </h2>
                <div className='mb-2'>
                    <label htmlFor=' '>First Name</label>
                    <input type="fname" placeholder='Enter First Name' className='form-control'
                    onChange={(e)=> setFname(e.target.value)} />
                </div>
               <div className='mb-2'>
                    <label htmlFor=' '>Last Name</label>
                    <input type="lname" placeholder='Enter Last Name' className='form-control'
                     onChange={(e)=> setLname( e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                     onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Password</label>
                    <input type="password" placeholder='Enter Contact' className='form-control' 
                     onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <Link to="/" className='btn btn-success '>Submit</Link>
                <Link  to="/client" className='btn btn-success '>Client Register</Link>
            </form>
           </div>
        </div>
       
    )
}

export default AdminRegistration;