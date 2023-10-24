'use client'

import { useState } from "react";
import Login from "./component/Login";
import Image from "next/image";
import imgLogin from './images/login10.svg';
import Navbar from "./component/Navbar1";

export default function Home() {
  const[reg, setReg] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center bg-bg gap-[5rem]">
      <Navbar reg={reg}/>
      <div className="w-1/3 flex flex-col">
        <Login />
      </div>
      <div className="w-1/3 flex flex-col">
        <Image src={imgLogin} width={600} height={600} alt="Lupa gw cok"/>
      </div>
    </div>
  )
}
