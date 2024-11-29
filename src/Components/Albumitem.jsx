import { useNavigate } from "react-router-dom";

const Albumitem = ({ image, name, desc, id }) => {
    const navigate=useNavigate();
   let handleNavigate=(id)=>{
    navigate(`/album/${id}`)
   }

    return (
        <div onClick={()=>{handleNavigate(id)}} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-2">{name}</p>
            <p className="text-sm text-slate-200">{desc}</p>
        </div>
    );
}

export default Albumitem;