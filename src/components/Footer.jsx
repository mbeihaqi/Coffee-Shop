import LogoImg from './imgs/logo.png';
function Footer() {
  return (
    <div className='mt-44 flex flex-col gap-12 lg:gap-3  pl-5 lg:px-12 font-extrabold text-xl lg:text-xs pb-5 '>
        <div>
            <img className='w-[10em] lg:w-[10em]' src={LogoImg} alt="logo"/>
        </div>
        <div className='flex flex-col gap-9 lg:flex lg:flex-row lg:justify-between lg:items-center'>
           <div className='flex flex-col gap-12 lg:flex-row'> 
            <div>
                <h3><a href="#">Cafe Menu</a></h3>
            </div>
            <div>
                <h3><a href="#">About Us</a></h3>
            </div>
            <div>
                <h3><a href="#">Find Us</a></h3>
            </div>
            <div>
                <h3>Alowishus Catering</h3>
            </div>
        </div>
        <div className='flex flex-col gap-2 mt-7'>
            <h3>Subscribe To Our Newsletter</h3>
            <input className='w-[90%] bg-gray-100 font-light pl-5 py-1 tracking-wider text-lg shadow-xl lg:text-xs lg:w-[100%]' placeholder='username@gmail.com' type="email"/>
        </div>
       </div>

        
    </div>
  )
}

export default Footer