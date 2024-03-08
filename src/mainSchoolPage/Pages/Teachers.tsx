import pix from "../../assets/icon1.png";
import img from "../../assets/teacher1.jpg";
import pix1 from "../../assets/teacher2.jpg";
import pix2 from "../../assets/teacher3.jpg";
import pix3 from "../../assets/icon4.png";
import { FaPlus } from "react-icons/fa";

const Teachers = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="h-full w-[95%]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-[23px] mt-[50px] font-[600] uppercase xl:text-[35px]">
            Our Awesome Teachers
          </div>
          <p className="text-center font-[500] md:w-[50%] mb-[20px]">
            Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
            interdum, mauris quis cursus sodales, urn
          </p>
        </div>
        <div className="text-center grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[10px] h-[70vh] overflow-hidden relative">
            <div className="h-[88%] w-[100%] bg-slate-200 rounded-[20px] overflow-hidden">
              <img src={img} alt="" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-start mt-[5px] font-[500]">
                Andderson Cooper
              </h1>
              <h1 className="text-start font-[600] text-blue-950">
                Instructor
              </h1>
            </div>
            {/* <div className="w-[60px] h-[60px] bg-[#F8A232] rounded-[50%] flex justify-normal items-center top-[420px] right-0 absolute left-[250px]">
              <FaPlus className="absolute text-[25px] right-[18px] text-[white]" />
            </div> */}
          </div>
          <div className="rounded-[10px] h-[70vh] overflow-hidden relative">
            <div className="h-[88%] w-[100%] bg-slate-200 rounded-[20px] overflow-hidden">
              <img src={pix1} alt="" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-start mt-[5px] font-[500]">
                Andderson Cooper
              </h1>
              <h1 className="text-start font-[600] text-blue-950">
                Instructor
              </h1>
            </div>
            {/* <div className="w-[60px] h-[60px] bg-[#F8A232] rounded-[50%] flex justify-normal items-center top-[420px] right-0 absolute left-[250px]">
              <FaPlus className="absolute text-[25px] right-[18px] text-[white]" />
            </div> */}
          </div>
          <div className="rounded-[10px] h-[70vh] overflow-hidden relative">
            <div className="h-[88%] w-[100%] bg-slate-200 rounded-[20px] overflow-hidden">
              <img src={pix2} alt="" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-start mt-[5px] font-[500]">
                Andderson Cooper
              </h1>
              <h1 className="text-start font-[600] text-blue-950">
                Instructor
              </h1>
            </div>
            {/* <div className="w-[60px] h-[60px] bg-[#F8A232] rounded-[50%] flex justify-normal items-center top-[420px] right-0 absolute left-[250px]">
              <FaPlus className="absolute text-[25px] right-[18px] text-[white]" />
            </div> */}
          </div>
          <div className="rounded-[10px] h-[70vh] overflow-hidden relative">
            <div className="h-[88%] w-[100%] bg-slate-200 rounded-[20px] overflow-hidden">
              <img src={img} alt="" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-start mt-[5px] font-[500]">
                Andderson Cooper
              </h1>
              <h1 className="text-start font-[600] text-blue-950">
                Instructor
              </h1>
            </div>
            {/* <div className="w-[60px] h-[60px] bg-[#F8A232] rounded-[50%] flex justify-normal items-center top-[420px] right-0 absolute left-[250px]">
              <FaPlus className="absolute text-[25px] right-[18px] text-[white]" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
