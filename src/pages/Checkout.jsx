import CardsImg from './imgs/cards.png';
import React, { useEffect, useRef, useState } from 'react';
import Cleave from 'cleave.js/react';
import Navbar from '../components/Navbar';
import ProdImg from './imgs/drink3.png';
function Checkout() {
    const [cartValue, setCartValue] = useState('');
    const [monthValue, setMonthValue] = useState('');
    const [yearValue, setYearValue] = useState('');
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
    const YearChange = (event) => {
        const formattedValue = event.target.value;
        setYearValue(formattedValue);
    };
    const CcvChange = (event) => {
        const formattedValue = event.target.value;
        setCcvValue(formattedValue);
    };
  return (
    <div className='flex flex-col gap-8'>
        <Navbar/>
        <div className='flex flex-col lg:flex-row w-[100%] pt-24 lg:pt-0 justify-center items-center bg-white
        lg:flex-row lg:items-start lg:pt-24 lg:px-5 lg:gap-5'>
            <div className='w-[90%] flex flex-col pb-5'>
                <h3 className='text-xl font-extrabold'>Pay CarpoolVenom LLC</h3>
                <h3 className='text-xl font-extrabold pt-5'>TOTAL: $40.00</h3>
                <div className='flex items-center justify-between'>
                    <div>
                        <img className='w-[6em] h-[6em] object-contain' src={ProdImg}/>
                    </div>
                    <div>
                        <h3 className='font-extrabold'>Product Name</h3>
                        <p className='text-xs'>Qty:1</p>
                    </div>
                    <div>
                        <h3 className='font-extrabold'>$40.00</h3>
                        <p className='text-xs'>$40.00 each</p>
                    </div>
                </div>
            </div>



            <div className='w-[100%] pt-16 lg:pt-0 flex flex-col justify-center items-center gap-5'>
            <div className='w-[90%] flex flex-col gap-5'>
                <h3 className='text-xl font-extrabold pt-3 lg:pt-0'>BILLING ADDRESS</h3>
                <div>
                    <label className='text-lg font-bold'>FullName</label>
                    <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='Enter FullName'/>
                </div>
                <div>
                    <label className='text-lg font-bold'>Email</label>
                    <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="email" placeholder='Enter Email'/>
                </div>
                <div>
                    <label className='text-lg font-bold'>Adress</label>
                    <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='Enter Address'/>
                </div>
                <div>
                    <label className='text-lg font-bold'>City</label>
                    <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='Enter City'/>
                </div>
                <div className='flex flex-row gap-3'>
                    <div>
                        <label className='text-lg font-bold'>State</label>
                        <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='State'/>
                    </div>
                    <div>
                        <label className='text-lg font-bold'>Zip Code</label>
                        <input className='w-[100%] h-[2.5em] py-5 font-xs pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='12345'/>
                    </div>
                </div>
            </div>
            <div className='w-[90%] flex flex-col gap-5'>
                <h3 className='text-xl font-extrabold pt-3'>PAYMENT</h3>
                <div>
                    <label className='text-lg font-bold'>Accepted Cards</label>
                    <div className='flex justify-start'>
                        <img className='w-[18em] lg:w-[13em] object-contain' src={CardsImg} />
                    </div>
                    
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-bold'>Name On Card</label>
                    <input className='w-[100%] h-[2.5em] py-5 pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider' type="text" placeholder='Mr.name'/>
                </div>
                <div>
                    <label className='text-lg font-bold'>Credit Card Number</label>
                    <Cleave
                        placeholder='1234-5678-1234-5678'
                        className='w-[100%] h-[2.5em] py-5 pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                        ref={cleaveRef}
                        value={cartValue}
                        options={{
                            creditCard: true,
                            delimiter: '-',
                        }}
                        onChange={CartChange}
                    />
                </div>
                <div>
                    <label className='text-lg font-bold'>Exp Month</label>
                    <Cleave
                            placeholder='MM'
                            className='w-[100%] h-[2.5em] pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                            ref={cleaveRef}
                            value={monthValue}
                            options={{
                                date: true,
                                datePattern: ['m']
                            }}
                            onChange={MonthChange}
                        />
                </div>
                <div className='flex flex-row gap-3'>
                    <div>
                        <label className='text-lg font-bold'>Exp Year</label>
                        <Cleave
                            placeholder='YY'
                            className='w-[100%] h-[2.5em] py-5 pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                            ref={cleaveRef}
                            value={yearValue}
                            options={{
                                date: true,
                                datePattern: ['y']
                            }}
                            onChange={YearChange}
                        />
                    </div>
                    <div>
                        <label className='text-lg font-bold'>CVV</label>
                        <Cleave
                            placeholder='CVV'
                            className='w-[100%] h-[2.5em] py-5 pl-3 lg:pl-5 rounded-sm shadow-lg outline-none border-none lg:h-[3em] lg:tracking-wider'
                            ref={cleaveRef}
                            value={ccvValue}
                            options={{
                               numeral: true,
                               numeralThousandsGroupStyle: 'thousand'
                            }}
                            onChange={CcvChange}
                        />
                    </div>
                </div>
            </div>
            </div>
            
            
        </div>

        <div className='flex justify-center items-center lg:justify-end lg:px-9'>
               <span className='w-[90%] lg:w-[50%] lg:cursor-pointer text-lg font-bold py-1 bg-black text-white flex justify-center items-center'>PAY</span>
            </div>

        
        
    </div>
  )
}

export default Checkout