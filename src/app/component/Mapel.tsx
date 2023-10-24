import { AiTwotoneEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const data = [
  {
    mapel: "MTK",
    bobot: 2.0,
  },
  {
    mapel: "IPS",
    bobot: 1.5,
  },
  {
    mapel: "B. Indo",
    bobot: 1.0,
  },{
    mapel: "IPS",
    bobot: 1.5,
  },
  {
    mapel: "B. Indo",
    bobot: 1.0,
  },{
    mapel: "IPS",
    bobot: 1.5,
  },
  {
    mapel: "B. Indo",
    bobot: 1.0,
  },{
    mapel: "IPS",
    bobot: 1.5,
  },
  {
    mapel: "B. Indo",
    bobot: 1.0,
  },
];

const Mapel = () => {
  return (
    <>
      {data.map((item, index) => (
        <div
          className="w-[200px] h-[200px] shadow-lg rounded-lg border-[2px] border-gray-500 flex flex-col justify-center items-center p-4 bg-main m-4 gap-[10px] border-t-8 border-t-white"
          key={index}
        >
          <h1 className="text-xl text-white font-bold">{item.mapel}</h1>
          <h1 className="text-white">Bobot = <span className="font-bold text-white">{item.bobot}</span></h1>
          <div className="flex flex-row items-center">
          <button className="text-blue-500 border-[1px] border-blue-500 rounded-l-md p-2 hover:bg-blue-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300 ease-in-out">
          <AiTwotoneEdit />
          </button>
          <button className="text-red-500 border-[1px] border-red-500 rounded-r-md p-2 hover:bg-red-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300 ease-in-out">
          <BsFillTrashFill />
          </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mapel;
