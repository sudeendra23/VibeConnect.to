import React from 'react'
import Patch01 from '../components/Landgin01'
import Patch02 from '../components/Landing02'
import Newsletter from '../components/Landing03'
import Cards from '../components/Landing04'
import Footer from '../components/Footer'
function Home() {
  return (
   
     <div style={{
      background:'black'
     }}>
      <Patch01/>
      <Patch02/>
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home