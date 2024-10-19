import React from 'react'
import PricingCard from './PricingCard'
import { pricingData } from '../../../public/constants/constants'
import green from '../../../public/assets/images/Green Gradient.png'
import Image from 'next/image'

const Pricing = () => {
  const data = pricingData;

  return (
    <section className='relative mx-10 max-md:mx-2'>
       <p className="text-green-300 font-semibold text-center mb-2">
            Pricing
        </p>
        <h1 className="text-[3.2rem] max-lg:text-[3rem] max-md:text-[2rem] text-center max-md:text-left mx-20 max-lg:mx-10 max-md:mx-2 mb-16 font-semibold">
        Save hours of tedious work, apply for more and get quick responses
        </h1>
        <div className='flex flex-wrap justify-center gap-10'>
          {data.map((item,i)=>(
            <PricingCard key={i} data={item} />
          ))}
      </div>
    </section>
  )
}

export default Pricing