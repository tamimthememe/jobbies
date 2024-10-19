import Image from 'next/image'
import React from 'react'
import green from '../../../public/assets/images/Green Gradient.png'
import pink from '../../../public/assets/images/Pink Gradient.png'

const Gradients = () => {
  return (
    <div className='hidden dark:block' >
       <Image src={green} alt="Green Gradient" className='fixed max-md:w-64 max-md:top-32 top-6 left-[-4rem] -z-10 ' />
       <Image src={pink} alt="Pink Gradient" className='fixed  max-md:w-72 max-md:top-[-18rem] top-[-20rem] overflow-x-hidden right-0 -z-10' />
    </div>
  )
}

export default Gradients