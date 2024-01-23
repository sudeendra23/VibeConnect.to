import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { TextField, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import styles from './styles2.module.css';
function Login() {
    const [users, setUsers] = useState([])
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
            console.log(res.data)
        })
    }


    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3001/login', { username, password })
            const token = response.data.token
            alert('Login successful')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/account')
            window.location.reload();
            localStorage.setItem('token', token)
            localStorage.setItem('username', "vishal")
        } catch (error) {
            console.log('Login Error', error)
        }
    }


  return (
    // <div className='bunny' style={{ display: 'flex', height: '100vh', backgroundColor: 'rgb(218,219,241)' }}>
    //   <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
    //     <Grid item xs={12}>
    //       <Typography variant="h4" align="center">
    //         Welcome to our App
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={12}>
    //         <Typography variant="h6" align="center">
    //         Shankar Dhada MBBS Uha Uha
    //     </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
    //     <Card style={{ minWidth: 300, padding: 16 }}>
    //       <CardContent>
    //         <Typography variant="h5" align="center" gutterBottom>
    //           Login
    //         </Typography>
    //         <form onSubmit={handleLogin}>
    //           <TextField
    //             label="Username"
    //             fullWidth
    //             variant="outlined"
    //             margin="normal"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //           <TextField
    //             label="Password"
    //             fullWidth
    //             variant="outlined"
    //             margin="normal"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             fullWidth
    //             type="submit"
    //             className="blackTextButton"
    //             style={{ marginTop: 16, color: 'black' }}
    //           >
    //             Login
    //           </Button>
    //         </form>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </div>

    <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleLogin}>
						<h1 style={{
              marginBottom:'40px'
            }}>Login to Your Account</h1>
						<input
            label="Username"
            placeholder='Username'
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                          marginBottom:'20px'
                        }}
							className={styles.input}
						/>
						<input
            label="Password"
            placeholder='Password'
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                          marginBottom:'20px'
                        }}
							className={styles.input}
						/>
					
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className=' w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#47CCD9] bg-black'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
  )
}

export default Login