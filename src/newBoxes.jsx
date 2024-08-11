import houseimg from "./assets/svgi.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function NewBoxes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <div>
      <div  className="w-full bg-[#1f1c19] pb-10">
        <div className="w-full  flex justify-center flex-col items-center  mb-10 ">
          <h1 className=" text-[30px] mx-6 font-serif font-bold sm:text-[60px] uppercase text-white sm:text-center
          ">
            <span className="text-[#EB7F25] ">best</span> Equipment in the
            industry
          </h1>
          <p className=" mx-4 text-white text-center font-semibold">
            There are many variations of Solar Saver tools available, but the
            majority have suffered alteration in some form.
          </p>
        </div>
        {/* box1 */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3">
          <div
            className="ml-4 h-[320px] w-[90vw] my-2 rounded-2xl bg-[#1A1714] flex items-center flex-col  sm:h-[320px] sm:w-[330px] "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={houseimg} className="w-[150px] object-contain mb-2 " />
            <h1 className=" text-[30px] mx-2 font-serif font-bold sm:text-[30px] text-[#EB7F25] mb-4 ">
              PANELS
            </h1>
            <p className=" mx-4 text-white text-center font-semibold">
            Solar Saver offers industry-leading solar panels. Experience unparalleled efficiency and durability with our advanced technology.
            </p>
          </div>
          <div
            className="ml-4 h-[320px] w-[90vw] my-2 rounded-2xl bg-[#1A1714] flex items-center flex-col sm:h-[320px] sm:w-[330px] "
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <img src={houseimg} className="w-[150px] object-contain mb-2 " />
            <h1 className=" text-[30px] mx-2 font-serif font-bold sm:text-[30px] text-[#EB7F25] mb-4 ">
              INVERTERS
            </h1>
            <p className=" mx-4 text-white text-center font-semibold">
            Solar Saver supplies high-performance inverters. Our inverters ensure maximum energy conversion and system reliability.
            </p>
          </div>
          <div className="ml-4 h-[320px] w-[90vw] my-2 rounded-2xl bg-[#1A1714] flex items-center flex-col sm:h-[320px] sm:w-[330px]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
            <img src={houseimg} className="w-[150px] object-contain mb-2 " />
            <h1 className=" text-[30px] mx-2 font-serif font-bold sm:text-[30px] text-[#EB7F25] mb-4 ">
              BATTERIES
            </h1>
            <p className=" mx-4 text-white text-center font-semibold">
            Solar Saver provides state-of-the-art batteries. Enjoy consistent and long lasting energy storage with our premium solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBoxes;
