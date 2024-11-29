import Home from "./Home";
import { Route,Routes, useLocation } from "react-router-dom";
import Songitem from "./Songitem";
import { useEffect, useRef } from "react";
import { albumsData } from "../assests/assets";
const Display = () => {
     const displayref=useRef();
     const location=useLocation();
     const isAlbum=location.pathname.includes("album");
    const albumid=isAlbum ? location.pathname.slice(-1) :"";
    const bgcolour=albumsData[Number(albumid)].bgColor;
   useEffect(()=>{
if(isAlbum){
    displayref.current.style.background=`linear-gradient(${bgcolour},#121212)`
}
else{
      displayref.current.style.background=`#121212`
}
   })
     
    return ( 
    <div ref={displayref} className="w-[100%] m-2 px-6 pt-4 bg-[#121212] rounded text-white overflow-auto lg:w-[75%] lg:ml-0">
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/album/:id' element={<Songitem/>} />


</Routes>

    </div>
     );
}
 
export default Display; 