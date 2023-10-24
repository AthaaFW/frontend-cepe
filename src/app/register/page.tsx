'use client'

import { useState } from "react";
import { AiFillLock, AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import imgLogin from '../images/login10.svg';
import Navbar from "../component/Navbar1";

const Register = () => {
    const[reg, setReg] = useState(true);

    return ( 
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-bg gap-[5rem]">
        <Navbar reg={reg}/>
        <div className="w-1/3 flex flex-col">
        <form action="" className='flex flex-col p-10 gap-[30px] bg-blur rounded-lg border-main border-[2px] shadow-lg'>
            <div className="flex flex-row items-center gap-[10px]"> 
                <h1 className="text-white"><AiOutlineArrowRight size={25}/></h1>
                <h1 className='text-2xl font-bold text-white'>Register</h1>
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
        </div>
        <div className="w-1/3 flex flex-col">
        <Image src={imgLogin} width={600} height={600} alt="Lupa gw cok"/>
      </div>
        </div>
     );
}
 
export default Register;