import { useState } from "react";
import bossImg from "./assets/boss.png"
import tomImg from "./assets/tom.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Comments() {
  const [Check, setCheck] = useState(true);
  const [text, setText] = useState([
    {
      paragraph:"Solar Saver exceeded my expectations in every way. From the initial consultation to the final installation, their team was professional and efficient. The whole process was seamless. Highly recommend!",
      profile: "@Joh Doe",
      img: bossImg,
    },
  ]);

  function rightBtn() {
    if (Check) {
      setText([
        {
          paragraph:"Choosing Solar Saver was one of the best decisions. The installation was quick and hassle-free, and their customer service was top-notch. I appreciate the transparency and the significant savings on my energy costs. Fantastic experience!",
          profile: "@Tom Davis",
          img: tomImg,
        },
      ]);
      setCheck(false);
    }
  }
  function leftBtn() {
    if (!Check) {
      setText([
        {
            paragraph:"Solar Saver exceeded my expectations in every way. From the initial consultation to the final installation, their team was professional and efficient. The whole process was seamless. Highly recommend!",
            profile: "@Joh Doe",
            img: bossImg,
        },
      ]);
      setCheck(true);
    }
  }
  return (
    <div className="w-full bg-[#1f1c19] pt-20 items-center hidden sm:flex  flex-col pb-10">
      {text.map((e, idx) => {
        return <div key={idx} className="bg-[#1f1c19] w-full flex flex-col sm:flex-row">
        <div className="w-1/2">
            <img src={e.img} alt="img" className="w-[60%] h-[550px] ml-[14%] rounded-lg"/>
        </div>
        <div className="w-1/2 p-4 ">
            <h1 className="text-white  text-left  text-5xl font-serif tracking-wide"> 
                {e.paragraph}
            </h1>
            <div className="flex mt-5 items-center gap-4">
             <img src={e.img} alt="img" className="w-[65px] h-[65px]  rounded-full object-fill"/>
            <span className="text-orange-400">{e.profile}</span>
            </div>
        </div>

        </div>;
      })}
      <div className="w-full flex justify-center bg-[#1f1c19] text-white text-3xl mt-10 ">
        <div className="sm:mr-46 flex gap-6">
          <FaArrowLeft onClick={leftBtn} />
          <FaArrowRight onClick={rightBtn} />
        </div>
      </div>
    </div>
  );
}

export default Comments;
