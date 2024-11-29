import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { albumsData, assets, songsData } from "../assests/assets";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const Songitem = () => {
    const {id}=useParams();
    const singleData=albumsData[id];
    const { playWithId}=useContext(PlayerContext)
    return ( 
<>
<Navbar/>
<div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
    <img src={singleData.image} alt="" />
    <div className="flex flex-col">
        <p>PlayList</p>
        <h2 className=" text-5xl font-bold mb-4 md:text-7xl">{singleData.name}</h2>
        <h4>{singleData.desc}</h4>
        <p className="mt-1">
            <img src={assets.spotify_logo}  className="w-5 inline-block "alt="" />
            <b className="ml-2">Spotify</b> 1,323,154 likes 50 songs about 2 hr 30 min
          
         

        </p>
    </div>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
    <p><b className="mr-4">#</b> Title</p>
    <p>Album</p>
    <p className="hidden sm:block">Date Added</p>
    <img src={assets.clock_icon} alt="" className="w-4 m-auto" />
</div>
<hr />
{
    songsData.map((item,index)=>{return(
        <div onClick={()=>{playWithId(item.id)}} key={index}className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] cursor-pointer">
        <p><b className="mr-4" >{index+1}</b> 
        <img src={item.image} alt="" className="inline w-10 mr-5" />
        {item.name}</p>
        <p>{singleData.name}</p>
        <p className="hidden sm:block">12 days ago</p>
        <p className="m-auto text-center ">{item.duration}</p>
    </div> 
    )})
}
</>
     );
}
 
export default Songitem;