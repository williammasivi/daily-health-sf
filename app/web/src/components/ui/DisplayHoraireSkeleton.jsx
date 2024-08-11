export default function DisplayHoraireSkeleton() {
   return (
      <li className="bg-gray-200 p-5 rounded flex justify-between items-center animate-pulse">
         <div>
            <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
         </div>
         <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </li>
   );
}
