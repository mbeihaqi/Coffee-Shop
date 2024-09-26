import Navbar from '../components/Navbar';
import ice1 from './imgs/Ice Cream1.png';
import ice2 from './imgs/Ice Cream2.png';
import ice3 from './imgs/Ice Cream3.png';
import ice4 from './imgs/Ice Cream4.png';

function Geloto() {
    const ProductsList = [
        {
            id: 1,
            name: 'Chocolate Ice Cream',
            img: ice1,
            price: '20.99',
        },
        {
            id: 2,
            name: 'Ice Cream 3 Boule',
            img: ice2,
            price: '35.00',
        },
        {
            id: 3,
            name: 'Pink Ice Cream',
            img: ice3,
            price: '15.50',
        },
        {
            id: 4,
            name: 'Chocolate Ice Cream',
            img: ice4,
            price: '15.50',
        },
      
    ]
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <h3 className='text-4xl font-[900] text-center mt-32'>Ice Cream Menu</h3>
        <p className='text-xl text-center px-2 tracking-wide lg:px-32 lg:pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error fuga perferendis nulla quae debitis.</p>
        <div className='grid pt-12 gap-16 place-items-center lg:grid-cols-3 lg:gap-2'>
            {ProductsList.map(p => (
                <div className='w-[90%] flex flex-col gap-5 shadow-xl py-5 px-2 ' key={p.id}>
                    <div className='flex justify-center items-center'>
                        <img className='w-[15em] lg:h-[13em] object-contain' src={p.img}/>
                    </div>
                    <h4 className='text-3xl font-extrabold tracking-wide pl-2 lg:text-2xl'>{p.name}</h4>
                    <p className='text-xl tracking-wider px-2 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas.</p>
                    <div className='flex justify-between px-2 items-center'>
                        <h4 className='text-3xl font-extrabold tracking-wide lg:text-2xl'>${p.price}</h4>
                        <span className='w-[45%] flex justify-center items-center bg-black text-white text-lg py-3 font-bold shadow-lg
                        lg:w-[35%] lg:text-xs lg:cursor-pointer'>Add To Card</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Geloto