import { motion } from "framer-motion";
import img from "./assets/file.png"

function Hero() {

  return (
    <>
    <div className=" w-full bg-[#1A1714] overflow-x-hidden">

    
    <motion.div className=" w-full flex justify-center items-center flex-col py-16 "
    initial={{y:20}}
    animate={{y:"-35px"}}
    transition={{duration:1.5}}>
        <h1 className=" text-[40px] uppercase  text-center text-white tracking-tighter mx-[2px] font-bold sm:uppercase  sm:text-white sm:tracking-tighter sm:mx-[10px] sm:font-bold sm:text-[70px]"
        >
          <span className="text-[#EB7F25]"> Does Your Home</span> Need Quality
        </h1>
        <h1 className="uppercase text-[40px] mx-[30px] text-white  font-bold sm:text-[70px] sm:tracking-tighter  text-center"
         initial={{y:0}}
         animate={{y:"-30px"}}
         transition={{duration:0.5}}
        >
        Solar Panel Installation?
        </h1>
        <h5 className="text-[14px] mx-[60px] text-white sm:text-[19px] sm:mx-[150px]  text-center mt-4 sm:mt-0"
         initial={{y:0}}
         animate={{y:"-30px"}}
         transition={{duration:0.5}}
        >
          Trust our experienced solar power experts to customize the perfect
          solution for your home.
        </h5>
        <div className="h-[35px] w-[150px] p-2  bg-[#EB7F25] flex justify-center items-center text-white rounded-xl text-[14px] mt-7    sm:p-6 sm:text-[15px]"
        >
          <h3>Calculate solar</h3>
      </div>
    </motion.div>
    <div className=" mx-1 flex justify-center w-full mt-[-40px] sm:mt-[-80px]">
    <img src={img}  className="sm:w-[60%]   mb-6"/>
    </div>
    </div>
    </>
  );
}

export default Hero;
