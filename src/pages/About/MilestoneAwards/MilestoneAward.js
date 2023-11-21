import React from 'react'
import BackgroundOverlay from '../../../components/Fragments/BackgroundOverlay'
import { background3 } from '../../../assets'

const MilestoneAward = () => {
    const title = 'Milestone & Award'
  return (
    <>
   <BackgroundOverlay content={title} gambar={background3}/>
    <div className='my-20 px-6 '>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/New-Milestone-Uniquip-min-2048x1448.jpg'/>
    </div>
    <div className='px-6 mb-24 -mt-8 xl:ml-80'>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/Awards-2-1-1024x724.jpg'/>
    </div>
    </>
  )
}

export default MilestoneAward

