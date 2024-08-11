import house from "./assets/house.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
        once: true,
    });
  }, []);
  return (
      <div className=" w-full sm:h-[400px] flex justify-around items-center  gap-9 font-bold flex-col sm:flex-row bg-[#1A1714]   ">
        <div
          className="h-[360px] w-[320px] bg-[#1A1714] rounded-lg p-5 mb-6 mt-5 sm:w-[380px]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img className="py-4 " src={house} alt="" />
          <h1 className="text-[30px] text-white text-center">
            <span className="text-[#EB7F25] ">BASIC</span> PLAN
          </h1>
          <h6 className="text-white text-center">
            Efficient and affordable solar solutions for every Household.
            Perfect for Residential use.
          </h6>
          <p className="text-white mt-2 text-center">$1.50 / watt</p>
          <div className="h-[35px] w-[150px]  bg-[#EB7F25] flex justify-center items-center text-white rounded-xl text-[14px] mt-7  ml-16">
            <h3>Calculate solar</h3>
          </div>
        </div>
        <div
          className="h-[360px] w-[320px] bg-[#1A1714] rounded-lg p-5 mb-6 mt-5 sm:w-[380px]" 

          data-aos="fade-up" data-aos-anchor-placement="top-center">
          <img className="py-4 " src={house} alt="" />
          <h1 className="text-[30px] text-white text-center">
            <span className="text-[#EB7F25] ">PREMIUM</span> PLAN
          </h1>
          <h6 className="text-white text-center">
          Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates.
          </h6>
          <p className="text-white mt-2 text-center">$1.50 / watt</p>
          <div className="h-[35px] w-[150px]  bg-[#EB7F25] flex justify-center items-center text-white rounded-xl text-[14px] mt-7 ml-16">
            <h3 >Calculate solar</h3>
          </div>
        </div>
        <div
         className="h-[360px] w-[320px] bg-[#1A1714] rounded-lg p-5 mb-6 mt-5 sm:w-[370px]"
         data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img className="py-4" src={house} alt="" />
          <h1 className="text-[28px] text-white text-center">
            <span className="text-[#EB7F25] ">COMMERCIAL</span> PLAN
          </h1>
          <h6 className="text-white text-center">
          High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions.
          </h6>
          <p className="text-white mt-2 text-center">$1.50 / watt</p>
          <div className="h-[35px] w-[150px]  bg-[#EB7F25] flex justify-center items-center text-white rounded-xl text-[14px] mt-7 ml-16">
            <h3>Calculate solar</h3>
          </div>
        </div>
      </div>

  );
}

export default Cards;
