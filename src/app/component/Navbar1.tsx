'use client'
import Link from "next/link";

const Navbar = ({ reg }) => {
  return (
    <div className="w-screen bg-main text-white flex flex-row py-3 px-10 justify-between items-center absolute top-0 left-0">
      <div>
        <h1 className="text-white text-xl font-bold">CEPE</h1>
      </div>
      {reg ? (
        <Link href='/'>
        <button className="rounded-full border-white border-[2px] text-white px-[15px] py-[5px] hover:bg-white hover:text-main">
          <h1 className="text-sm">Login</h1>
        </button>
        </Link>
      ) : (
        <Link href='/register'>
        <button className="rounded-full border-white border-[2px] text-white px-[15px] py-[5px] hover:bg-white hover:text-main"
        >
          <h1 className="text-sm">Register</h1>
        </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
