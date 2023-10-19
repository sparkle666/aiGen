import React from 'react'
import Navbar from './navbar'
import HeroButton from './button'

export const HeroContent = () => {
    return (
        <div className='text-white text-center p-10 space-y-6'>
            <h3 className='text-5xl font-semibold py-10'>Try Our AI Artwork Generator for Free</h3>
            <p className='font-light'>From logos and characters to digital artwork and photos,
                just describe the image you want and our AI image generating
                tool will create the perfect graphic for your project. It&apos;s FREE to try.
            </p>
            <p>Try aiGen for free by entering a prompt below</p>
            <HeroButton />
        </div>
    )
}

const Hero = () => {
    const imgOverlay = `linear-gradient(to top,rgba(14,26,31,0) 40%,#0e1a1f),
    linear-gradient(to bottom,rgba(14,26,31,0) 50%,#0e1a1f),
    linear-gradient(to bottom,rgba(14,26,31,.6),rgba(14,26,31,.6)), url(${'ai1.png'})`
    return (
        <div
            className='h-[100vh] w-full bg-[#0e1a1f] bg-no-repeat bg-cover p-10'
            style={{
                background: imgOverlay
            }}>
            <Navbar />
            <HeroContent />
        </div>
    )
}

export default Hero;
