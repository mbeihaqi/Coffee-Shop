import Navbar from '../components/Navbar';
import ProfileImg from './imgs/man.jpg';
import React, { useEffect, useRef, useState } from 'react';
import Cleave from 'cleave.js/react';
function Profile() {
    const [cartValue, setCartValue] = useState('');
    const [monthValue, setMonthValue] = useState('');
    const [ccvValue, setCcvValue] = useState('');

    const cleaveRef = useRef();

    const CartChange = (event) => {
        const formattedValue = event.target.value;
        setCartValue(formattedValue);
    };
    const MonthChange = (event) => {
        const formattedValue = event.target.value;
        setMonthValue(formattedValue);
    };
    const CcvChange = (event) => {
        const formattedValue = event.target.value;
        setCcvValue(formattedValue);
    };
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col justify-center items-center gap-12 pt-24 pb-5 bg-white'>
            <div className='flex flex-col gap-1 lg:justify-start lg:items-start lg:w-[85%]'>
                <img className='w-[8em] h-[8em] object-cover rounded-full' src={ProfileImg} alt="profle" />
                <h3 className='text-center text-xl font-extrabold'>Username</h3>
            </div>
            
            <div className='w-[90%] flex flex-col justify-center items-center gap-3'>
                <div className='flex justify-start w-[95%]'>
                    <h3 className='font-extrabold text-lg'>PROFILE INFORMATIONS</h3>
                </div>
                <div className='flex flex-col w-[100%] gap-3 lg:grid lg:grid-cols-3 font-bold'>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="text" placeholder='FirstName'/>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="text" placeholder='LastName'/>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="text" placeholder='Username'/>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="email" placeholder='Email'/>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="tel" placeholder='Phone Number'/>
                    <input className='w-[100%] h-[2.5em] pl-3 rounded-sm shadow-lg outline-none border-none lg:pl-5' type="password" placeholder='Password'/>
                    <span className='w-[100%] h-[2.5em] bg-black text-white flex justify-center items-center text-lg font-bold tracking-wide rounded-sm shadow-lg lg:cursor-pointer lg:text-base lg:ml-1'>Edit</span>
                    </div>
                </div>       

            <div className='w-[90%] flex flex-col justify-center items-center gap-3'>
                <div className='flex justify-start w-[95%]'>
                    <h3 className='font-extrabold text-lg'>CART INFORMATIONS</h3>
                </div>
                <div className='flex flex-col w-[100%] gap-3 lg:grid lg:grid-cols-2 font-bold'>
                    <input className='w-[100%] h-[2.5em] pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='Name On Card'/>
                    <Cleave
                        placeholder='1234-5678-1234-5678'
                        className='w-[100%] h-[2.5em] pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                        ref={cleaveRef}
                        value={cartValue}
                        options={{
                            creditCard: true,
                            delimiter: '-',
                        }}
                        onChange={CartChange}
                    />
                    <div className='flex justify-center items-center w-[100%] gap-3'>
                        <Cleave
                            placeholder='MM/YY'
                            className='w-[100%] h-[2.5em] pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                            ref={cleaveRef}
                            value={monthValue}
                            options={{
                                date: true,
                                datePattern: ['m', 'y']
                            }}
                            onChange={MonthChange}
                        />
                        <Cleave
                            placeholder='123'
                            className='w-[100%] h-[2.5em] pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                            ref={cleaveRef}
                            value={ccvValue}
                            options={{
                               numeral: true,
                               numeralThousandsGroupStyle: 'thousand'
                            }}
                            onChange={CcvChange}
                        />
                    </div>
                    <span className='w-[100%] py-2 lg:py-1 bg-black text-white flex justify-center items-center text-lg font-bold tracking-wide rounded-sm shadow-lg lg:cursor-pointer'>Edit</span>
                </div>
                
            </div>     
        </div>
        
    </div>
  )
}

export default Profile