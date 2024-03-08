import { FaPhone } from "react-icons/fa6";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import img from "../../assets/mainLogoW.png";

const Footer = () => {
  return (
    <div className="w-full m-h-[60vh] flex justify-center items-center border-b mt-[20px]">
      <div className="w-[90%] h-full bg-white flex justify-around items-center flex-col">
        <div className="text-center grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[10px] h-[30vh] w-[400px] p-6">
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-950 text-[white] font-[700] flex justify-center items-center">
                <img src={img} alt="" />
              </div>
              <div className="font-[600]">
                <p className="text-start">Edu.ng</p>
                <p>School Center</p>
              </div>
            </div>
            <div className="font-[400]">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur recusandae nostrum dolorem placeat necessitatibus.
                Ipsam!
              </p>
            </div>
          </div>
          <div className="rounded-[10px] h-[30vh] p-6 ">
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <FaPhone className="text-white" />
              </div>
              <div className="font-[200]">
                <p className="text-start">Call</p>
                <p>+23499494949</p>
              </div>
            </div>
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <IoIosTimer className="text-white" />
              </div>
              <div className="font-[200]">
                <p className="text-start">Work Time</p>
                <p>Mon - Fri 8 AM - 5 PM</p>
              </div>
            </div>
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <CiLocationOn className="text-white" />
              </div>
              <div className="font-[200]">
                <p className="text-start">Address</p>
                <p>34, Shevron street, Lekki Lagos</p>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] h-[30vh] p-6">
            <div className="mb-[15px] flex justify-between items-center flex-col">
              <div className="font-[700] text-center w-full h-[100%]">
                Quick Link
              </div>
              <p>About us</p>
              <p>Our Clases</p>
              <p>Schedule</p>
              <p>Recent Events</p>
              <p>Our News</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
