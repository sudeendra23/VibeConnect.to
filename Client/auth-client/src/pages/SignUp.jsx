import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, TextField, Button, Grid, Typography, Divider } from '@mui/material';
import styles from './styles.module.css';
function SignUp() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3001/register')
        .then((res) => {
            // console.log(res.data)
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/register', { email, username, password })
        .then(() => {
            alert('Registration Successful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            console.log('Unable to register user')
        })

    }

  return (
//     <div className="flex justify-center items-center h-screen" >
//     <div className="signup-card bg-white p-8 rounded-lg shadow-lg">
//         <div className="grid grid-cols-2 gap-4">
            
//             <div className="col-span-1">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
//                 <form onSubmit={handleSubmit} className='deviki' style={{
//                     width: '500px',
//                     height: '550px',
                    
//         }}>
                   
//                                 <input
//                                     type="email"
//                                     className="input-field block w-full mb-4 p-2 rounded border border-gray-300"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     style={{
//                                         width:'100%'
//                                     }}
//                                 />
//                                 <input
//                                     type="text"
//                                     className="input-field block w-full mb-4 p-2 rounded border border-gray-300"
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     required
//                                 />
//                                 <input
//                                     type="password"
//                                     className="input-field block w-full mb-4 p-2 rounded border border-gray-300"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="submit-button bg-[#00df9a] text-black w-full py-3 rounded-md font-medium"
//                                 >
//                                     Sign Up
//                                 </button>
                 
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>

<div className={styles.signup_container}>
<div className={styles.signup_form_container}>
    <div className={styles.left}>
        <h1>Welcome Back</h1>
        <Link to="/login">
        <button className='bg-black-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#47CCD9]'>Get Started</button>
        </Link>
    </div>
    <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            
            <input
            type="text"
            //                                     className="input-field block w-full mb-4 p-2 rounded border border-gray-300"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                
                className={styles.input}
            />
            <input
            type="email"
                                                
            placeholder="Email"
                value={email}
            onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
            />
            <input
            type="password"
            placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
            />
            
            <button type="submit" className={styles.green_btn}>
                Sing Up
            </button>
        </form>
    </div>
</div>
</div>
  )
}

export default SignUp
