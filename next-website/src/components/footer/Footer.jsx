import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div
            className='h-12 flex items-center justify-between text-sm'
        >
            <p>©2023 Lamamia. All rights reserved.</p>
            <div className='flex gap-3'>
                <Image src='/1.png' width={15} height={15} className='opacity-60 cursor-pointer' />
                <Image src='/2.png' width={15} height={15} className='opacity-60 cursor-pointer' />
                <Image src='/3.png' width={15} height={15} className='opacity-60 cursor-pointer' />
                <Image src='/4.png' width={15} height={15} className='opacity-60 cursor-pointer' />
            </div>
        </div>

    )
}

export default Footer