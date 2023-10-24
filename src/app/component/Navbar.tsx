import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen bg-main text-white flex flex-row py-3 px-10 justify-between items-center absolute top-0 left-0">
      <div>
        <h1 className="text-2xl font-bold">CEPE</h1>
      </div>
      <div className="flex space-x-4 flex-row items-center">
        <Link href="/datasiswa">
          <h4 className="text-white">Data Siswa</h4>
        </Link>
        <Link href="/nilaisiswa">
          <h4 className="text-white">Nilai Siswa</h4>
        </Link>
        <Link href="/datamapel">
          <h4 className="text-white">Data Mapel</h4>
        </Link>
        <Link href="/">
          <button className="rounded-full border-white border-[2px] text-white px-[15px] py-[5px] hover:bg-white hover:text-main">
            <h1 className="text-lg">Logout</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

