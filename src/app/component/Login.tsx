'use client'

import { useRouter } from 'next/navigation';
import { AiOutlineArrowRight, AiOutlineUser, AiFillLock } from 'react-icons/ai';

const Login = () => {
    const router = useRouter();

    const redirect = (e)=>{
        e.preventDefault();
        router.push('/datasiswa');
    }

    return ( 
        <form onSubmit={redirect} className='flex flex-col p-10 gap-[30px] bg-blur rounded-lg border-main border-[2px] shadow-lg'>
            <div className="flex flex-row items-center gap-[10px]"> 
                <h1 className='text-white'><AiOutlineArrowRight size={25}/></h1>
                <h1 className='text-2xl font-bold text-white'>Welcome</h1>
            </div>
            <div className='relative py-[6px] px-[10px] flex flex-row items-center justify-start bg-gray-100 gap-[10px] rounded-md max-w-fit'>
                <div className=''>
                    <AiOutlineUser size={20}/>
                </div>
                <input type="text" placeholder='Username' className='bg-transparent text-lg focus:outline-none w-[30rem]'/>
            </div>
            <div className='relative py-[6px] px-[10px] flex flex-row items-center justify-start bg-gray-100 gap-[10px] rounded-md max-w-fit'>
                <div className=''>
                    <AiFillLock size={20}/>
                </div>
                <input type="password" placeholder='Password' className='bg-transparent text-lg focus:outline-none w-[30rem]'/>
            </div>
            <button className='bg-main text-white text-center py-[6px] hover:bg-main-hover shadow-lg rounded-md'>
                <h1 className='text-xl'>Sign In</h1>
            </button>
        </form>
        
     );
}
 
export default Login;