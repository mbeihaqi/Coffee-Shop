import Navbar from '../components/Navbar';
import food1 from './imgs/food1.png';
import food2 from './imgs/food2.png';
import food3 from './imgs/food3.png';
import food4 from './imgs/food4.png';
import food5 from './imgs/food5.png';
import drink1 from './imgs/drink1.png';
import drink2 from './imgs/drink2.png';
import drink3 from './imgs/drink3.png';

function FoodMenu() {
    const ProductsList = [
        {
            id: 1,
            name: 'Choco Crescendo',
            img: food1,
            price: '20.99',
        },
        {
            id: 2,
            name: 'Chocolate Cake',
            img: food4,
            price: '20.99',
        },
        {
            id: 3,
            name: 'Iced Indulgence',
            img: drink1,
            price: '35.00',
        },
        {
            id: 4,
            name: 'Black Coffee',
            img: drink2,
            price: '15.50',
        },
        {
            id: 5,
            name: 'Golden Crescent',
            img: food2,
            price: 40.00,
        },
        {
            id: 6,
            name: 'Jam Croissant',
            img: food3,
            price: 25.99,
        },
        {
            id: 7,
            name: 'Milk Coffee',
            img: drink3,
            price: '49.00',
        },
        {
            id: 8,
            name: 'Small Chocolate Cakes',
            img: food5,
            price: '20.99',
        },
    ]
  return (
    <div id='foodmenu' className='overflow-hidden bg-white'>
        <Navbar/>
        <h3 className='text-4xl font-[900] text-center mt-32'>Food Menu</h3>
        <p className='text-xl text-center px-2 tracking-wide lg:px-32 lg:pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error fuga perferendis nulla quae debitis.</p>
        <div className='grid pt-12 gap-16 place-items-center lg:grid-cols-3 lg:gap-2'>
            {ProductsList.map(p => (
                <div className='w-[90%] flex flex-col gap-5 shadow-xl py-5 px-2' key={p.id}>
                    <div className='flex justify-center items-center'>
                        <img className='w-[15em] lg:h-[13em] object-contain' src={p.img}/>
                    </div>
                    <h4 className='text-3xl font-extrabold tracking-wide pl-2 lg:text-xl'>{p.name}</h4>
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

export default FoodMenu