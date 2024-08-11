import logo from "./assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./slider.css";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
function Navbar() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="h-[69px] w-full flex justify-between items-center bg-[#1A1714] overflow-x-hidden">
      <div className="mt-[-10px]">
        <div className={`zoomIn ${isShow ? "zoomOut" : ""}  sm:hidden block  `}>
          <div className="w-full flex justify-end">
            <button
              onClick={() => setShow(false)}
              className="text-xl  flex justify-end mt-2 mr-2"
            >
              <ImCross />
            </button>
          </div>
          <div className=" w-full ml-4 ">
            <ul className="mt-5">
              <li className=" flex  items-center gap-3 text-xl text-white font-mono  mt-1">
                <span className="text-black">
                  <FaHome />
                </span>
                Home
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <IoMdContact />
                </span>
                About Us
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaServicestack />
                </span>
                sevices
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaHandshake />
                </span>
                portfolio
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <MdContacts />
                </span>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End slider */}


      
      <div className=" w-full flex justify-between items-center">
      <div>
        <img className="w-[100px] sm:w-[100px] " src={logo} />
      </div>
      <div className=" items-center  hidden sm:flex text-[1.3vmax] ">
        <ul className="flex text-white gap-x-11 ">
          <li>Pricing</li>
          <li>About</li>
          <li>Tools</li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="mr-5 sm:hidden">
        <span className="text-white text-2xl" onClick={() => setShow(!isShow)}>
          {isShow ? (
            <span>
              <ImCross />
            </span>
          ) : (
            <span>
              <FaBars />
            </span>
          )}
        </span>
      </div>
      <div className="h-[35px] w-[150px] hidden bg-[#EB7F25]  text-white rounded-xl mr-5 text-[14px] sm:flex  justify-center items-center">
        <h3>Calculate solar</h3>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
