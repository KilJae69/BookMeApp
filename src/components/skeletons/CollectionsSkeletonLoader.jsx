const CollectionsSkeletonLoader = ({count = 8}) => {
   return (
     <div className="space-y-4">
       {[...Array(count)].map((_, index) => (
         <div
           key={index}
           className="flex animate-pulse flex-row items-center space-x-2"
         >
           <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
           <div className="flex-1 space-y-6 py-1">
             <div className="h-2 bg-gray-300 rounded">
               <div className="group flex flex-1 truncate p-2 text-sm">
                 <div className="flex w-14 rounded-md transition flex-shrink-0 items-center justify-between text-sm font-medium text-white">
                  
                 </div>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
   );
};

export default CollectionsSkeletonLoader;
