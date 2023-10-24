import Navbar from "../component/Navbar";
import TableNilai from "../component/TableNilai";

const DataSiswa = () => {
    return ( 
        <div className="w-screen h-screen px-[5rem] pt-[5rem] bg-bg">
        <Navbar />
        <div className="w-full border-b-2 border-main">
            <TableNilai />
        </div>
        </div>
     );
}
 
export default DataSiswa;