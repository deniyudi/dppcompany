import { Footer, Navbar } from 'flowbite-react'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <Navbar/>
        <div className='mx-20'>
        <p className='italic font-bold mb-6 text-[50px]'>The page can’t be found.</p>
        <p className='italic font-mono '>It looks like nothing was found at this location.</p>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound