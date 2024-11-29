import { useNavigate } from 'react-router-dom';
import {assets} from '../assests/assets'
const Sidebar = () => {
    const navigate=useNavigate();
    return (  
      <div className="h-full w-[25%] p-2 flex-col gap-2 text-white hidden lg:flex">
<div className="h-[15%] bg-[#121212] rounded flex flex-col justify-around">
    <div onClick={()=>{navigate('/')}} className="flex items-center gap-3 pl-8 cursor-pointer">
        <img  className='w-6' src={assets.home_icon} alt="" />
        <p className='text-lg font-bold'>HOME</p>
    </div>
     <div className="flex items-center gap-3 pl-8 cursor-pointer">
        <img  className='w-6' src={assets.search_icon} alt="" />
        <p className='text-lg font-bold'>SEARCH</p>
    </div>
</div>
<div className='h-[85%] bg-[#121212] rounded'>
    <div className='flex items-center justify-between p-4'>
<div className='flex items-center gap-3'>
    <img  className="w-8" src={assets.stack_icon} alt="" />
    <p className='font-semibold'>Your Library</p>
</div>
<div className='flex items-center gap-2'>
    <img className='w-5' src={assets.plus_icon} alt="" />
    <img className='w-5 ' src={assets.arrow_icon} alt="" />
</div>
    </div>
    <div className='bg-[#242424]  rounded flex flex-col  items-start gap-2 p-4 m-2 font-semibold'>
        <h1 >create your playlist</h1>
        <p className='font-light'>it's ease we will help you</p>
        <button className='bg-white rounded-full text-[15px] mt-2 text-black  px-4 py-2 '>Create Playlist</button>
    </div>
    <div className='bg-[#242424]  rounded flex flex-col  items-start gap-2 p-4  m-2 font-semibold'>
        <h1 >Let's find some podcasts to follow</h1>
        <p className='font-light'>we'll keep you update on new episodes</p>
        <button className='bg-white rounded-full text-[15px] mt-2 text-black  px-4 py-2 '>Browse podcasts</button>
    </div>
</div>
      </div>
    );
}
 
export default Sidebar;