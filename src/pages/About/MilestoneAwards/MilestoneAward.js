import React, { useEffect } from 'react'
import BackgroundOverlay from '../../../components/Fragments/BackgroundOverlay'
import { background3, coba } from '../../../assets'

const MilestoneAward = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const title = 'Milestone & Award'
  return (
    <>
   <BackgroundOverlay content={title} gambar={background3}/>
    <div className='my-20 px-20 '>
      <img src={coba} alt='milestone'/>
    </div>
    {/* <div className='px-6 mb-24 -mt-8 xl:ml-80'>
      <img alt='milestone' src='https://www.uniquip.co.id/wp-content/uploads/2023/02/Awards-2-1-1024x724.jpg'/>
    </div> */}
    </>
  )
}

export default MilestoneAward

