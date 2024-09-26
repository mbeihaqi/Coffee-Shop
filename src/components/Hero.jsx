import heroImg from './imgs/hero1.png';
import cafe from './imgs/cafe.png';
import Navbar from './Navbar';
function Hero() {
  return (

    <div className='lg:flex lg:justify-center'>
        <Navbar/>
    <div className='mt-24 w-[90%] flex flex-col ml-4 gap-9
    lg:flex-row lg:gap-2'>
        <div className='flex flex-col gap-9 lg:gap-5'>
            <h2 className='text-6xl font-[900] tracking-wide
            lg:text-6xl'>Alowishus Delicious <span className='flex gap-3'><h3>Coffee</h3> <img className='hidden lg:block w-[1em] lg:object-contain' src={cafe}/></span>  </h2>
            <p className='text-2xl font-bold tracking-wide
            lg:text-lg lg:tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, distinctio.</p>
            <div className='flex flex-col w-[100%] justify-center items-center gap-3 lg:flex-row lg:justify-start'>
               <span className='bg-black text-white shadow-xl w-[100%] h-fit flex justify-center items-center py-4 text-xl font-[500] rounded-lg cursor-pointer
               lg:w-[25%] lg:gap-3 lg:py-3 lg:text-xs'>Download App</span>
               <span className='bg-white text-black shadow-xl w-[100%] h-fit flex justify-center items-center py-4 text-xl font-[500] rounded-lg cursor-pointer
               lg:w-[25%] lg:gap-3 lg:py-3 lg:text-xs'>Shop Coffee</span>
            </div>
        </div>
        

        <div className='lg:w-[50%] lg:flex lg:justify-center relative'>
            <img className='lg:w-[100%] lg:object-contain' src={heroImg} alt="" />
            <img className='object-contain w-[5em] absolute top-0 right-4' src={cafe}/>
        </div>
    </div>
    </div>
  )
}

export default Hero