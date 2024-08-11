import { useState } from "react";
import solarimg from "./assets/solar.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import bossImg from "./assets/boss.png"

function Carosel() {
  const [Check, setCheck] = useState(true)
const [text, setText] = useState([
  {
    paragraph:
      "Our team will conduct a comprehensive site assessment to evaluate your roof's condition, orientation, and shading. We use this data to create a customized solar panel layout that maximizes energy production.",
      step:"01",
      img:solarimg
  },
])

 function rightBtn() {
 if (Check) {
  setText([{
    paragraph:"Our team will conduct a comprehensive site assessment to evaluate your roof's condition, orientation, and shading. We use this data to create a customized solar panel layout that maximizes energy production.",
    step:"02",
    img:bossImg
  }])
  setCheck(false)
 }
 }
  function leftBtn() {
    if (!Check) {
      setText([{
        paragraph:"We handle all necessary permits and approvals required for your solar installation. This includes coordinating with local authorities and your utility company to ensure everything is in compliance with regulations.",
        step:"01",
        img:solarimg
      }])
      setCheck(true)
     }
  }
  return (
    <div>
    <div className="bg-[#1f1c19] pb-10 pt-20">

        {text.map((e, idx) => {
          return (
            <div key={idx} className="flex flex-col w-full items-center justify-center  sm:justify-around sm:gap-20 px-4 sm:px-0 gap-2 sm:flex-row">
              <div className= "sm:w-1/2  text-center p-4 ">
              <h1 className="text-5xl text-[#EB7F25] mb-5 font-bold">Step {e.step}</h1>
              <p className=" text-center text-white">{e.paragraph}</p>
              </div>
              <div className="sm:w-1/3 h-[440px] flex justify-center object-cover">
              <img src={e.img} alt="image" className="w-[100%]   object-cover rounded-xl" />
              </div>
            </div>
          );
        })}
   
    
    <div className="w-full flex justify-center  text-white text-3xl mt-8">
      <div className="sm:mr-[10px] flex gap-6">
      <FaArrowLeft onClick={leftBtn} />
      <FaArrowRight onClick={rightBtn}/>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Carosel;
