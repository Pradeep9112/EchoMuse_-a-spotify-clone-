import { Navbar } from "./Navbar";
import { albumsData } from "../assests/assets";
import Albumitem from "./Albumitem";
import { songsData } from "../assests/assets";
import Biggesthits from "./Biggesthits";
const Home = () => {
    return ( 
        <>
        <Navbar/>
        <div className="m-5">
            <h1 className="font-bold text-4xl m-4">Featured Charts</h1>
            <div className="flex overflow-auto">
{albumsData.map((item,index)=>(<Albumitem keY={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div></div>
        <div className="m-5">
            <h1 className="font-bold text-4xl m-4">Today's biggest hits</h1>
            <div className="flex overflow-auto">
{songsData.map((item,index)=>(<Biggesthits keY={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div></div>
        </>
     );
}
 
export default Home;