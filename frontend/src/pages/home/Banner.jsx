import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-4 justify-between items-center gap-4'>
        
        <div className='md:w-1w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases...</h1>
            <p className='mb-4'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

        </div>

    </div>
  )
}

export default Banner