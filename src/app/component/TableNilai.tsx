import { AiTwotoneEdit } from "react-icons/ai";
import { BsFillTrashFill } from 'react-icons/bs';

const data = [
    {
      nomorInduk: "1001",
      nama: "nama1",
      alamat: "jl.bla bla bla",
      tgllahir: "dd-mm-yyyy",
    },
    {
      nomorInduk: "1001",
      nama: "nama1",
      alamat: "jl.bla bla bla",
      tgllahir: "dd-mm-yyyy",
    },
    {
      nomorInduk: "1001",
      nama: "nama1",
      alamat: "jl.bla bla bla",
      tgllahir: "dd-mm-yyyy",
    },
    {
      nomorInduk: "1001",
      nama: "nama1",
      alamat: "jl.bla bla bla",
      tgllahir: "dd-mm-yyyy",
    },
    {
      nomorInduk: "1001",
      nama: "nama1",
      alamat: "jl.bla bla bla",
      tgllahir: "dd-mm-yyyy",
    },
  ];

const TableNilai = () => {

  return (
    <table className="min-w-full divide-y divide-gray-200 rounded-lg">
  <thead className="">
    <tr className="">
      <th className="px-6 py-5 bg-main text-left text-xs leading-4 font-medium text-white uppercase tracking-wider rounded-tl-lg">
        Nama
      </th>
      <th className="px-6 py-5 bg-main text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
        Nomor Induk
      </th>
      <th className="px-6 py-5 bg-main text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
        Alamat
      </th>
      <th className="px-6 py-5 bg-main text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
        Tanggal lahir
      </th>
      <th className="px-6 py-5 bg-main text-left text-xs leading-4 font-medium text-white uppercase tracking-wider rounded-tr-lg">
        Action
      </th>
    </tr>
  </thead>
  <tbody className="border-main border-b-2">
    {data.map((item, index) => (
      <tr key={index} className="border-l-2 border-main border-r-2 bg-gray-100">
        <td className="px-6 py-4 whitespace-no-wrap">
          {item.nama}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {item.nomorInduk}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {item.alamat}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {item.tgllahir}
        </td>
        <td className="flex flex-row gap-[5px] items-center pt-[20px] pl-[25px]">
           <button className="text-blue-500"><AiTwotoneEdit /></button> 
           <button className="text-red-600"> <BsFillTrashFill /> </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  )
};

export default TableNilai;
