import { Link } from "react-router-dom"
function Login() {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='w-[90%] h-fit flex flex-col gap-12 py-12 shadow-lg border-2 border-solid border-black rounded-lg'>
            <h3 className='text-4xl font-extrabold text-center'>Sign In</h3>
            <div className='pl-5 flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="text" placeholder='Username' />
                  <input className='w-[95%] pl-2 font-bold outline-none text-[1em] h-[2.5em] shadow-lg' type="oassword" placeholder='Password' />
               </div>
               <a className='font-bold text-xs pl-2'>Forgot Password?</a>
            </div>
            
            <div className='flex items-center justify-between px-5 translate-y-7'>
                <p className='font-meduim text-xs'>Don't have an account?<span className='font-extrabold'><Link to="/signup">Sign up</Link></span></p>
                <span className='w-[30%] flex justify-center items-center bg-black text-white text-sm py-1 rounded-sm shadow-lg'><Link to='/'>Login</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Login