import Mapel from "../component/Mapel";
import Navbar from "../component/Navbar";

const DataMapel = () => {
    return ( 
        <div className="w-screen h-screen pt-[10rem] bg-bg">
           <Navbar />
           <div className="flex flex-row flex-wrap justify-center">
           <Mapel />
           </div>
        </div>
     );
}
 
export default DataMapel;