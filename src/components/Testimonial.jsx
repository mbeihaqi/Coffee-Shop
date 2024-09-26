import 'remixicon/fonts/remixicon.css';
import profileImg from './imgs/man.jpg';
import profileImg2 from './imgs/model2.png';
import profileImg3 from './imgs/model4.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, FreeMode} from 'swiper/modules';

function Testimonial() {    
    const breakpoints= {
        600:{
            slidesPerView: 3
        }
        
    }
  return (
    <div className='mt-44 grid place-items-center gap-7'>
        <h3 className='text-3xl font-extrabold'>Client Testimonial</h3>
        <p className='text-center text-xl tracking-wide px-3 lg:px-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi laboriosam officiis vel ullam, quam veniam.</p>
        <div className='lg:flex lg:items-center gap-5 mt-5'>
            <div className='hidden lg:flex lg:border-r-4 lg:border-solid lg:border-black lg:pr-7'>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg} alt="img"/>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg2} alt="img"/>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg3} alt="img"/>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg} alt="img"/>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg2} alt="img"/>
                <img className='lg:-mr-2 lg:w-[2.5em] lg:h-[2.5em] lg:object-cover lg:rounded-[50%]' src={profileImg3} alt="img"/>
            </div>
            <div>
                <div className='flex items-center justify-center gap-2 lg:justify-start'>
                <h3 className='text-center text-2xl font-extrabold lg:text-xs'>4.6</h3>
                <i className="ri-star-line text-2xl text-orange-600 lg:text-xs"></i>
            </div>
            <p className='text-lg font-bold tracking-wider lg:text-xs'>Rated by 25k on google</p>
            </div>
            
        </div>

        <Swiper 
        breakpoints={breakpoints}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode,Autoplay]}
      >
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>MOHAMMED</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg2} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>SAMI</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg3} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>ADAM</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>MOHAMMED</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg2} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>SAMI</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg3} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>ADAM</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>MOHAMMED</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg2} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>SAMI</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg3} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>ADAM</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>MOHAMMED</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg2} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>SAMI</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='flex justify-center shadow-2xl py-5'>
                <div className='w-[90%] flex flex-col gap-5'>
                <div className='h-[15em] w-[100%] object-contain'>
                    <img src={profileImg3} alt="img"/>
                </div>
                <div className='flex flex-col gap-3 justify-left items-start pl-2'>
                    <h3 className='text-2xl font-extrabold lg:text-xl'>ADAM</h3>
                    <div className='text-orange-600 flex gap-2 text-2xl lg:text-xl'>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-line"></i>
                         <i className="ri-star-line"></i>
                    </div>
                    <p className='text-left text-xl tracking-wide lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam nesciunt veniam perferendis reiciendis tempora vitae, nulla facilis commodi laboriosam.</p>
                </div>
                    
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial