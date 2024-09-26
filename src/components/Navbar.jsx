import LogoImg from './imgs/logo.png';
import {useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import prodImg1 from './imgs/drink2.png';
import prodImg2 from './imgs/drink1.png';
import prodImg3 from './imgs/drink3.png';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function AppearList(){
        setIsOpen(!isOpen);
    }
    const [isTrue, setIsTrue] = useState(false);
    function ShowCart(){
        setIsTrue(!isTrue);
    }

    const ProductsList = [
        {
            id: 1,
            name: 'Coffee Milk',
            img: prodImg1,
            price: '59.99',
        },
        {
            id: 2,
            name: 'Espresso Plus Milk',
            img: prodImg2,
            price: '40.00',
        },
        {
            id: 3,
            name: 'Coffee Milk',
            img: prodImg3,
            price: '25.99',
        },

        
        
    ]
    function ToAbout(){
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    }
    function ToCoffee(){
        document.getElementById('coffee').scrollIntoView({ behavior: 'smooth' });

    }
  return (
    <header className='flex flex-col  p-[0.9em] fixed top-0 w-[100%] bg-white shadow-lg z-50
    lg:flex lg:flex-row lg:items-center'>
        <div className='w-[100%] flex justify-between lg:w-fit'>
           <img className='w-[7em] object-contain lg:text-left lg:w-[8em] lg:ml-5' src={LogoImg} alt="logo" />
           <div className='flex items-center gap-2'>
              <i className="ri-shopping-bag-4-fill text-2xl lg:hidden lg:text-lg lg:cursor-pointer" onClick={() => ShowCart()}></i>
              <i className={ !isOpen ? "ri-menu-line flex text-2xl font-bold cursor-pointer lg:hidden" : "ri-close-fill text-3xl flex font-bold cursor-pointer lg:hidden" }  onClick={AppearList}></i>
           </div>
        </div>


        <ul className={isOpen ? 'h-screen bg-white w-[100%] flex flex-col gap-[3em] font-bold pt-[3em] translate-x-0 duration-[.6s] text-xl' : 'translate-x-[300em] hidden duration-[.6s] lg:flex lg:flex-row lg:translate-x-0 lg:font-bold lg:gap-[3em] lg:h-fit lg:w-[100%] lg:text-sm lg:justify-center lg:items-center'}>
            <li><NavLink to="/#about" onClick={() => ToAbout()}>About Us</NavLink></li>
            <li><NavLink to="/#coffee" onClick={() => ToCoffee()}>Coffee</NavLink></li>
            <li><Link to='/foodmenu'>Menu</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li className='flex lg:hidden'><Link to="/login">Log In</Link></li>
        </ul>


        <div className={isTrue ? 'flex flex-col bg-white text-black te pt-9  h-screen w-[100%] lg:absolute lg:top-12 lg:pt-23' : 'hidden '}>
            {ProductsList.map(p => (
            <div className='flex items-center justify-around lg:w-[100%]' key={p.id}>
            <div>
                <img className='w-[4em] h-[4em] object-contain lg:w-[6em] lg:h-[6em]' src={p.img}/>
            </div>
            <p className='text-xs font-bold lg:text-lg lg:tracking-wider lg:w-[10%]'>{p.name}</p>
            <div className='flex items-center gap-3 font-bold text-base lg:text-xl'>
                <span className='text-lg lg:text-2xl lg:cursor-pointer'>-</span>
                <span>1</span>
                <span className='text-base lg:cursor-pointer'>+</span>
            </div>
            <p className='text-xs font-bold lg:text-lg'>$ {p.price}</p>
            <i className="ri-delete-bin-6-line text-xs font-bold lg:text-lg"></i>
    </div>
    ))}
    <div className='flex justify-center'>
        <div className='fixed bottom-2 overflow-hidden w-[100%] flex gap-2 justify-between px-3'>
            <span className='bg-black text-white w-[50%] flex justify-center items-center py-1 font-bold text-base'>Total: $86.53</span>
            <span className='bg-black text-white w-[50%] flex justify-center items-center py-1 font-bold text-base'><Link to="/checkout">Checkout</Link></span>
        </div>
    </div> 
   </div>
        

        <div className='hidden lg:flex lg:text-[0.4em] lg:items-center lg:gap-3'>
            <i className="ri-shopping-bag-4-fill lg:text-lg lg:cursor-pointer" onClick={() => ShowCart()}></i>
            <span className='lg:bg-black lg:text-white lg:w-[10em] lg:h-fit lg:flex lg:justify-center lg:items-center lg:text-xs py-3 lg:font-bold lg:cursor-pointer rounded-lg'><Link to='/login'>Login</Link></span>
        </div>
        
    </header>
  )
}

export default Navbar