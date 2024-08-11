import logo from "./assets/logo.png";
function Footer() {
  return (
    <div>
      <div className='bg-[url("./assets/footerimg.png")] w-full h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center '>
        <div className="flex flex-col">
          <h1 className="ml-8  sm:ml-0 text-[30px] sm:text-[60px] font-serif font-bold ">READY TO START?</h1>
          <p className="text-white mx-8 sm:mx-4">
            Our solar power experts will help you find the perfect solution for
            your home.
          </p>
          <div className="h-[35px] w-[150px] p-6  bg-[#EB7F25] flex justify-center items-center text-white rounded-xl text-[14px] ml-[110px]  sm:ml-[200px]  mt-6 sm:text-[15px]">
            <h3>Calculate solar</h3>
          </div>
      </div>
     </div>
        <div className=" w-full bg-[#1A1714] ">
            <div className="flex justify-center gap-14 sm:gap-0 sm:justify-between items-center  pt-16 pb-16  sm:flex-row flex-wrap">
          <img src={logo} className="w-[140px]" />
          <ul className="flex text-white gap-10 mr-10 flex-col sm:flex-row ">
          <li>Pricing</li>
          <li>About</li>
          <li>Tools</li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
    </div>
        <hr />
        <div className="flex justify-center items-center w-full pb-6">
        <p className="text-white mt-4">© 2024 Solar Saver. All rights reserved.</p>
        </div>
        </div>
    </div>
  );
}

export default Footer;
