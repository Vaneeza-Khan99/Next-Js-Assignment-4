import React from 'react'
import Header from './components/Header'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='h-screen'>
          <Header></Header>    
          <div className='flex h-[80%] '>
            <div className='w-1/2 flex flex-col justify-center items-start space-y-8 pl-[176px]'> 
            <h1 className='font-[Libre Bodoni] width={496} font-bold text-[60px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='text-[#787054] font-[Libre Bodoni] w-[902px] h-[147px] text-[35px]'>
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className='bg-[#A29875] text-white w-[288px] h-[58px] font-[Libre Bodoni] text-[30px] rounded-xl hover:bg-amber-700	 '>Explore Now</button>
            </div>
            <div className='w-1/2 flex justify-center items-center'> 
            <Image src={"/images/slider-1.jpg.png"}
             alt="image" width={490} height={667}>
            </Image>
            </div>
          </div>
    </div>      

  )
}

export default Home
