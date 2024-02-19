'use client'

import React, {  useEffect, useState } from 'react';




export default function TimeBox() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000);
    
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

      const formattedTime = currentDateTime.toLocaleTimeString();
    const formattedDate = currentDateTime.toLocaleDateString();
  

  return (
    
    <div className="rounded-t-lg">
    <div className="flex rounded-t-lg ml-4 mr-4 h-12"  >
    <span  id="move" className="text-white text-xl whitespace-nowrap font-bold pt-2">{formattedTime} {formattedDate}</span>
      <div className="w-1/3 bg-rose-500 rounded-tl-lg"></div>
      <div className="w-1/3 bg-violet-400 "></div>
      <div className="w-1/3 bg-teal-500 rounded-tr-lg"></div>
    </div>

    
    <div className='ml-4 mr-4 ' style={{ 
      backgroundImage: "url('/new2.png')",
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      height: '275px', // Adjust height as needed
    }}>



      {/* Content goes here */}


      <div className="flex h-full w-full">
  <div className="w-4/5 h-full grid grid-rows-4 ">
    <div className=" text-right pt-2 font-bold text-black text-2xl ">GRAND CENTRAL</div>
    <div className=" text-right font-bold text-black text-5xl mr-2 ">1</div>
    <div className=" text-right pt-2 font-bold text-black text-2xl ">WH PLNS</div>
    <div className=" text-right font-bold text-black text-5xl mr-2">4</div>
    <div className=" text-right pt-4 font-bold text-black text-2xl">&nbsp;</div>
  </div>
  <div className="w-1/5 h-full">
    <img src='/logohehe3.png' style={{ 
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      height: '275px', // Adjust height as needed
    }}  />
  </div>
</div>
      
    </div>

    <div className='bg-white h-24'>
    </div>

    <div className="bg-white text-black justify-between items-center border-dotted border-2 border-blue-900 border-t-2 border-b-0 border-l-0 border-r-0 p-4 flex">
  <span className="font-semibold text-sm text-blue-950 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </svg> &nbsp;
    Actions
  </span>

  <span className="text-sm text-blue-950 flex items-center ml-4 font-semibold">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg> 
    Details
  </span>
</div>
<div className='bg-black h-12'>

</div>
    
  </div>
    
    );
  }