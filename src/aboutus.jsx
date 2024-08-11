import image from "./assets/solar3.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function Aboutus() {
    useEffect(() => {
        AOS.init({
          duration: 2500,
            once: true,
        });
      }, []);
  return (
    <div>
      <div className="flex justify-between flex-col sm:flex-row w-full bg-[#1A1714] overflow-x-hidden pt-10 ">
        <div className="mt-4 h-[500px] w-full  sm:h-[570px] sm:w-[70%] sm:mx-10  p-5 flex  justify-center  items-center flex-col "
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
          <h6 className="text-[#EB7F25]">About us</h6>
          <h1 className=" text-[40px] sm:text-[50px] font-serif text-[#EB7F25] font-bold mb-4">
            SOLAR SAVER
          </h1>
          <p className="text-justify text-[gray] mb-6 ">
            Solar Saver Is Revolutionizing The Solar Industry By Offering The
            Most Cost-Effective Solar Solutions In America. We Specialize In
            Providing Transparent, Instant Pricing For Solar Installations. With
            An Innovative AI Quoting Engine, They Ensure Personalized And
            Accurate Estimates For Each Customer.
          </p>
          <p className="text-[#EB7F25]">
            Solar Saver Also Offers Innovative Battery Solutions And Flexible
            Financing Options, Making Solar Energy More Accessible And
            Affordable.
          </p>
        </div>
        <div className="flex justify-center w-full mb-8 sm:mr-[40px] mt-4"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500">
            <img src={image} className="w-[300px]  sm:w-[70%]" alt="solar-image" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
