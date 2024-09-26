import coffeeBanner from './imgs/coffee-banner.png';
function InstantCoffee() {
  return (

    <div className='mt-44 flex flex-col justify-center items-center gap-12 lg:flex-row'>
        <div className='w-[90%] flex flex-col gap-9 lg:w-[50%]'>
            <h3 data-aos='fade-up' className='text-4xl font-extrabold lg:text-3xl'>Instant Coffee At Your Home</h3>
            <p data-aos='fade-up' className='text-xl tracking-wide font-semibold leading-7 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi nobis tenetur aliquam pariatur natus ad. Quia architecto praesentium numquam totam laborum asperiores dolores esse fuga iste cupiditate! Ipsum, architecto!</p>
            <span data-aos='fade-up' className='w-[60%] text-xl bg-black text-white flex justify-center items-center font-semi-bold py-3
            lg:w-[30%] lg:text-xs lg:py-3 lg:cursor-pointer'>Download Your App</span>
        </div>
        <div data-aos='fade-up' className='flex justify-end'>
            <img className='w-[10em] lg:w-[11em] -rotate-12 translate-x-12' src={coffeeBanner} alt="" />
            <img className='w-[10em] lg:w-[11em] z-10' src={coffeeBanner} alt="" />
        </div>
    </div>
  )
}

export default InstantCoffee