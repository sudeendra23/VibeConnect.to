import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { Grid, AppBar, Toolbar, Typography,Button }  from '@mui/material';
import log from './rt.jpeg'
import './tint.css'
function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();
    const username = !!localStorage.getItem('username')
    console.log(username);
    const handelLogOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

  return (
   
    <div className="flex justify-between items-center p-5 bg-black">
    <div className="flex items-center">
      <Link to={('/')} className="text-white text-xl font-bold">
        <img src={log} alt="Frie" className="h-16 w-auto mb-2" />
      </Link>
    </div>
    
    {isUserSignedIn ? (
      <>
        <div className="flex items-center">
          <div className="mr-4">
          <button onClick={() => navigate("/account")} className='bg-blue-gradient w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Account</button>
          </div>
          <div>
          <button onClick={handelLogOut} className='bg-blue-gradient w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Log Out</button>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex items-center">
          <div className="mr-4">
          <button onClick={() => navigate("/login")} className='bg-blue-gradient w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Login</button>
         
          </div>
          <div>
          <button onClick={() => navigate("/signup")} className='bg-blue-gradient w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-black'>SingUp</button>
         
          </div>
        </div>
      </>
    )}
  </div>

  );
}

export default Navbar

// <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
// <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
// <ul className='hidden md:flex'>
//   <li className='p-4'>Home</li>
//   <li className='p-4'>Company</li>
//   <li className='p-4'>Resources</li>
//   <li className='p-4'>About</li>
//   <li className='p-4'>Contact</li>
// </ul>
// <div onClick={handleNav} className='block md:hidden'>
//     {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
// </div>
// <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//   <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//     <li className='p-4 border-b border-gray-600'>Home</li>
//     <li className='p-4 border-b border-gray-600'>Company</li>
//     <li className='p-4 border-b border-gray-600'>Resources</li>
//     <li className='p-4 border-b border-gray-600'>About</li>
//     <li className='p-4'>Contact</li>
// </ul>
// </div>