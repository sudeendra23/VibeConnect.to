import React from 'react';
import {useNavigate} from 'react-router-dom';  // <-- Importing useHistory

import Button from '@mui/material/Button';
import styles from "../style.js";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
function Account() {
  const navigate = useNavigate();

  const goToLobby = () => {
    navigate('/Lobby');
  };

  return (
    // <div className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center'>
    //   <h2 className='text-3xl'>ACCOUNT</h2>
    //   <Button variant="contained" onClick={goToLobby}>
    //     Go to the Lobby Screen
    //   </Button>
    // </div>

    <div className="bg-primary w-full overflow-hidden">
   

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
  );
}

export default Account;