import { useNavigate } from "react-router-dom";
import { assets } from "../assests/assets";

export const Navbar = () => {
    let navigate=useNavigate();
    return (
        <>
                <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={()=>{navigate(-1)}}className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                <img  onClick={()=>{navigate(1)}}className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
            </div>
            <div className="flex items-center justify-between gap-3">
                <button className="bg-white text-black text-[15px] p-2 rounded-full hidden md:block">Explore Premium</button>
                <button className="bg-white text-black text-[15px] p-2 rounded-full hidden md:block">INSTALL APP</button>
                <p className="bg-green-800 text-white w-9 h-9 flex items-center justify-center rounded-full cursor-pointer   ">P</p>

            </div>
        </div>
        <div className="flex items-center gap-3 mt-4 justify-evenly lg:justify-start ">
            <button className="bg-white text-black text-[15px] px-4 rounded-full ">ALL</button>
            <button className="bg-black text-white text-[15px] px-4 rounded-full ">MUSIC</button>
            <button className="bg-black text-white text-[15px] px-4 rounded-full ">PODCASTS </button>


        </div></>
    );
}