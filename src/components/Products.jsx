import prodImg1 from './imgs/drink3.png';
import prodImg2 from './imgs/drink4.png';
import prodImg3 from './imgs/drink5.png';
import prodImg4 from './imgs/drink1.png';
import prodImg5 from './imgs/drink2.png';

function Products() {
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
        {
            id: 4,
            name: 'Cappuccino',
            img: prodImg4,
            price: '25.99',
        },
        {
            id: 5,
            name: 'Coffee Black',
            img: prodImg5,
            price: '15.00',
        },
    ]
  return (
    <div id='coffee' className='mt-48'>
        <h3 className='text-4xl font-[900] text-center'>Best Coffee</h3>
        <p className='text-xl text-center px-2 tracking-wide lg:px-44 lg:pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error fuga perferendis nulla quae debitis.</p>
        <div className='grid pt-12 gap-16 place-items-center lg:grid-cols-3 lg:gap-2'>
            {ProductsList.map(p => (
                <div data-aos='fade-left' className='w-[90%] flex flex-col gap-5 shadow-xl py-5 px-2' key={p.id}>
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

export default Products