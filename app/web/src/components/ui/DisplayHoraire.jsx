import { FaPills } from "react-icons/fa";
import { AiOutlineDelete } from 'react-icons/ai';
export default function DisplayHoraire({ medication, time, handleDelete }) {
   return (
      <li className="p-5 border-gray-200 border bg-white rounded flex justify-between items-center">
         <div>
            <h3 className="text-xl font-bold">{medication}</h3>
            <p className="text-sm">{time}</p>
         </div>
         <div className="flex items-center gap-3">
            <AiOutlineDelete
               onClick={handleDelete}
               size={24}
               className="fill-red-500 hover:cursor-pointer hover:fill-red-900"
            />
            <FaPills
               size={24}
               className="text-green-700"
            />
         </div>
      </li>
   );
}