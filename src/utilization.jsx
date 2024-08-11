import img1 from "./assets/s1.png";
import img2 from "./assets/s2.png";
import img3 from "./assets/s3.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
function Utilization() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-[#1f1c19] overflow-x-hidden">
      <img
        src={img1}
        className="w-[80%] pb-8 sm:w-[50%]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <div className="w-full flex flex-col sm:flex-row">
        <div className="flex-col sm:w-1/2">
          <img
            src={img2}
            className="w-[60%] pb-8 sm:w-[75%]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={img2}
            className="w-[50%] pb-4 sm:w-[60%]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
       
        <div className="sm:w-1/2">
            <h1 className="text-4xl  text-white  font-bold  mt-4 text-center sm:text-5xl"><span className="text-[#EB7F25]  ">AI</span> Utilization</h1>
            <p className=" mx-6   sm:mx-6 text-white mt-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quae tempore ullam voluptatibus nobis sunt fugit laboriosam aspernatur architecto culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eos voluptatem hic facere sint repellendus delectus nisi ducimus voluptas esse!Lorem ipsum dolor sit, amet consectetur adipisicing elit. veniam quisquam tempore doloribus. Placeat quidem error, officiis veniam asperiores vero tempore dolorum.</p>
        </div>
        </div>
    </div>
  );
}

export default Utilization;
