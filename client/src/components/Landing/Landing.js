import React from "react";
import Lottie from "lottie-react"
import Face from "./FaceScan.json";
const Landing = () => {
    const choices = [
        {
          logo: "ellipse",
          position: "Teacher",
          
        },
        {
          logo: "ellipse",
          position: "Student",
          
        },
        
      ];
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg"
    >
      <div className="flex-1 flex items-center justify-center ">
        <Lottie animationData={Face}/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl ">
              Hello there!
              <br />
            </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            Let's take a tour of our attendance portal
          </h4>
          
          
        </div>
      </div>
    </section>
     <section id="choice" className="py-10 bg-gray-800 relative">
     <div className="mt-8 text-gray-100 text-center">
       
       <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
         {choices?.map((choice, i) => (
           <div
             key={i}
             className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
           >
             <div
               style={{
                 background: '(rgb(8,145,170)' ,
               }}
               className="w-32 h-32 flex items-center justify-center rounded-full"
             >
               <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                 <ion-icon name={choice.logo}></ion-icon>
               </div>
             </div>
             <p className="text-xl mt-3">{choice.position}</p>
           </div>
         ))}
       </div>
     </div>
   </section>
   </>
  );
};

export default Landing;