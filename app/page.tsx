'use client'
import Image from "next/image";
import TimeBox from "./TimeBox";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";


import React, {  useEffect, useState } from 'react';


export default function Home() {
  const QRstrings = [
    "98dsgFWffawef3aa87890123456789H2aAFWfwAFfaWf9twf3wadw3EFQEFf32e13d31234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67d90fwafWFfFWfwfawfFWA3456789",
    "A2dwaFpfaaeZ3s6789012345678902rAFWfQAFfaWf912wfF3FWGfdfdfvdfegf4g4g4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67F90fwafWFfFWfwfawfFWA3456789",
    "t2dwaFWffawef3456789012345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67F90fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef34d6789012345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef34567890jj345678902fAFWfwadwfawf3fgefgWFQEFfdQDDQ2d2wdq2f3f3gf  gfv3gEGEG3g3g3g3g3GGW3G3gw3g3GG3G3Gg3g3g3G3g3G3G3WAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67F90fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef3v56789012345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef34567890W2345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef3r56789012345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e132312geaseg4g4g4g5h6hffwfWFfwW465352442rg3g3WG3G3WG3g3gq4g5555453454345345466787879789gerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef3456789I12345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgarvfagerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789",
    "12dwaFWffawef3456789012345678902fAFWfwAFfaWf912wf3wadwfEFQEFf32e13231234r4ADWdwafdevevcfWDFWFWFWAFAffwfWFfwW465352442r3rwafesgfarsgragrgar789887979889879vfagerg45wfFWwffwfa67890fwafWFfFWfwfawfFWA3456789"
  ];
  const [pass,setPass] = useState('')
  const [QRvalue, setQRValue] = useState(QRstrings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * QRstrings.length);
      setQRValue(QRstrings[randomIndex]);
    }, 3000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [QRstrings]);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPass(event.target.value);
  };


  return (
    <>

    


    <div className="bg-black ">


    {pass !== 'Vinay123!' && (
      <div className="h-screen flex items-center justify-between text-center" >
        <input 
          type="text" 
          value={pass} 
          onChange={handleChange} 
          placeholder="password" 
          className="items-center mx-auto focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full block h-10
          border-gray-300 border shadow-sm rounded-md mt-1 mr-0 mb-0 ml-10 mr-10"
        />
        </div>
      )}

    {pass === 'Vinay123!' && ( <>
      <nav className="bg-black h-20">

</nav>

<nav className="bg-black h-12">
  <div className="mx-auto px-4 max-w-full">
    <div className="flex justify-end items-end h-full"> {/* Updated */}
      <div className="text-blue-400 text-xl">Close</div>
    </div>
  </div>
</nav>

  
  <div className="bg-white mt-0 ml-4 mr-4 rounded-t-lg">
  <div className="bg-blue-950 text-white font-semibold text-xl text-center py-2 items-center rounded-t-lg -ml-0.5 -mr-0.5">One Way Peak</div>
  <div className="justify-center p-4 flex">
  <QRCode value={QRvalue} size={200}/>
  </div>
  <TimeBox></TimeBox>

  </div>
    
    
    </>)}

   
  
  
 
  
</div>
    </>
  );
}
