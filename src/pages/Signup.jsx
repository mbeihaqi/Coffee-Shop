import { Link } from "react-router-dom"
function Signup() {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='w-[90%] h-fit flex flex-col gap-12 py-12 shadow-lg border-2 border-solid border-black rounded-lg'>
            <h3 className='text-4xl font-extrabold text-center'>Sign Up</h3>
            <div className='pl-5 flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="text" placeholder='FirstName' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="text" placeholder='LastName' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="email" placeholder='Email' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="tel" placeholder='Phone Number' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="text" placeholder='Username' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="password" placeholder='Password' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="password" placeholder='Confirm Password' />
               </div>
            </div>
            
            <div className='flex items-center justify-between px-5 translate-y-7'>
                <p className='font-meduim text-xs'>Have an account?<span className='font-extrabold'><Link to="/login">Login</Link></span></p>
                <span className='w-[30%] flex justify-center items-center bg-black text-white text-sm py-1 rounded-sm shadow-lg'><Link to='/login'>Signup</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Signup