import React from 'react'
import { steps } from '../data/stepData'

interface StepProps {
    id: number,
    title: string,
    content: string
}

const HowItWorks = () => {
    return (
        <div className='space-y-4'>
            <h1 className='text-center text-3xl font-bold'>How It Works</h1>
            <p className="text-center">
                Our image generating AI is designed to be user-friendly
                and accessible to everyone.
                No matter your level of experience or expertise,
                you can easily create amazing images with our tool.
                Simply enter your prompt and let our AI do the
                rest - it&apos;s as easy as that!
            </p>
        </div>
    )
}

export default HowItWorks

export const StepSection = () => {
    return (
        <div className='space-y-5 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0'>
            {steps.map((step, index) => (
                <Step key={index} id={step.id} title={step.title}
                    content={step.content}
                />
            ))}
        </div>
    )
}



export const Step: React.FC<StepProps> = ({ id, title, content }) => {
    return (
        <div >
            <div >
                <p className="rounded-full border-2 border-red-600 w-[40px] h-[40px] text-center">
                    {id}
                </p>
            </div>
            <div className="rounded-sm">
                {title}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

