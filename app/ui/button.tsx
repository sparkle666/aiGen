import React from 'react'

const HeroButton = () => {
    return (
        <div className='space-y-3'>
            <input type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs" />
            <div>
                <button className="btn btn-primary">Generate AI Image</button>
            </div>
        </div>
    )
}

export default HeroButton