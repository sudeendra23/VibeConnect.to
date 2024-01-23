import React from 'react'
import Laptop from '../assets/laptop.jpg';
const Patch02 = () => {
    return(
      <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-gradient font-bold '>Bringing the world closer, one video call at a time.</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Experience Seamless Video Calls</h1>
          <p>
          Connect with friends, family, and colleagues with ease using our intuitive video chat app. Enjoy high-quality video and clear audio, no matter where you are.
          </p>
          <button className='bg-black text-[#47CCD9] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
    );
}
export default Patch02;