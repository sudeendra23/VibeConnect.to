import React from 'react'
import { Typography, Container, withTheme } from '@mui/material';

import logo from '../3778209.jpg';
import plane from './plane.jpeg';
const  Patch01 = () => {

return (
  <div className='text-white'>
  <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-gradient  font-bold p-2'>
    Connecting the world, one face at a time.
    </p>
    <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    Video Conversations
    </h2>
    <div className='flex justify-center items-center'>
      <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
      Privacy You Can 
      </p>
     
    </div>
    <p className='md:text-2xl text-xl font-bold text-gray-500'>Experience crystal-clear video quality and lag-free communication .</p>
    <button className='bg-blue-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
  </div>
</div>
);

}
export default Patch01;