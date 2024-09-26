import icon1 from './imgs/icon1.png';
import icon2 from './imgs/icon2.png';
import icon3 from './imgs/icon3.png';
import coffeImg from './imgs/coffee-mid.png';
import { Link } from 'react-router-dom';
function About() {
return (
 <div id='about' className='mt-44 bg-white flex flex-col items-center justify-center'>
    <div className='w-[90%] text-center flex flex-col lg:justify-center lg:items-center gap-3'>
            <h3 className='text-4xl font-[800] tracking-wide'>Explore Our Alowishus</h3>
            <p className='text-lg tracking-wide font-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tempore alias magni omnis repellendus distinctio.</p>
        </div>
    <div className='grid lg:grid-cols-3 place-items-center gap-5 pt-5'>
        
        <div data-aos='fade-left' className='w-[90%] text-center flex flex-col gap-3 bg-white shadow-2xl py-7 '>
            <h3 className='text-4xl font-[800] tracking-wide'>Our Catering</h3>
            <p className='text-lg tracking-wide font-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='w-[100%] flex justify-center items-center'>
               <img className='w-[13em]' src={icon1} alt="img" />
            </div>
            <div className='w-[100%] flex justify-center items-center'>
               <span className='w-[70%] bg-black text-lg font-[600] text-white py-3 rounded-sm cursor-pointer'>Order Cathering</span>  
            </div>
        </div>

        <div data-aos='fade-left' className='w-[90%] text-center flex flex-col gap-3 bg-white shadow-2xl py-7'>
            <h3 className='text-4xl font-[800] tracking-wide'>The Food</h3>
            <p className='text-lg tracking-wide font-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='w-[100%] flex justify-center items-center'>
               <img className='w-[13em]' src={icon2} alt="img" />
            </div>
            <div className='w-[100%] flex justify-center items-center'>
               <span className='w-[70%] bg-black text-lg font-[600] text-white py-3 rounded-sm cursor-pointer'><Link to="/foodmenu">Food Menu</Link></span>  
            </div>
        </div>

        <div data-aos='fade-left' className='w-[90%] text-center flex flex-col gap-3 bg-white shadow-2xl py-7'>
            <h3 className='text-4xl font-[800] tracking-wide'>The Gelato</h3>
            <p className='text-lg tracking-wide font-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='w-[100%] flex justify-center items-center'>
               <img className='w-[13em]' src={icon3} alt="img" />
            </div>
            <div className='w-[100%] flex justify-center items-center'>
               <span className='w-[70%] bg-black text-lg font-[600] text-white py-3 rounded-sm cursor-pointer'> <Link to='/gelato'>Discover More</Link></span>  
            </div>
        </div>
    </div>

    <div className='flex flex-col gap-12 mt-28 lg:flex-row lg:h-fit lg:items-center'>
        <div data-aos="fade-up" className='flex justify-center lg:w-[50%] '>
            <img className='w-[30em] object-contain lg:h-fit' src={coffeImg} alt="img"/>
        </div>
        <div className='w-[90%] flex flex-col gap-5 ml-5 lg:w-[50%] lg:h-fit lg:justify-center'>
            <h3 data-aos="fade-up" className='text-4xl font-[800]
            lg:text-2xl'>Order Your <br/><span>Favorite Coffee</span> </h3>
            <p data-aos="fade-up" className='text-2xl font-[500] lg: text-lg lg:pr-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia nostrum nesciunt commodi labore, deleniti quidem soluta veritatis excepturi nulla!</p>
            <span data-aos="fade-up" className='w-[50%] bg-black text-white flex justify-center items-center py-3 text-2xl font-[500]
            lg:w-[25%] lg:text-xs lg:py-3 lg:cursor-pointer'>Order Now</span>
        </div>
    </div>
</div>
    
  )
}

export default About