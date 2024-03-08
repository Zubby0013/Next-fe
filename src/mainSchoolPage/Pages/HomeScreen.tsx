import img from "../../assets/banner-img.png";
import img2 from "../../assets/beam.png";
import TypeWriter from "typewriter-effect";

import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useSchoolDataByName } from "../../pages/hook/useSchoolAuth";

const HomeScreen = () => {
  const { schoolName } = useParams();
  const { schoolInfo } = useSchoolDataByName(schoolName!);

  return (
    <div
      className="h-[91vh] w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <div className="w-[95%] h-full justify-center flex items-center">
        <div className="w-[100%] xl:w-[50%] h-full flex justify-center items-center flex-col md:w-[50%]">
          <div className=" font-[] md:text-[35px] xl:text-[60px] text-blue-950 text-[30px]">
            The Smarter Way to Learn.....
            <TypeWriter
              options={{
                strings: ["Anything", "AnyWhere", "AnyTime"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-[18px] md:text-[18px] xl:mr-[60px]">
            {schoolInfo?.info ? (
              schoolInfo?.info
            ) : (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              </div>
            )}
          </p>
          <div className="mt-[50px] flex w-[90%] h-[50px] rounded-[30px] overflow-hidden shadow-md md:w-[95%]">
            <input
              type="text"
              className="flex-1 outline-none p-4"
              placeholder="search template"
            />
            <div className="w-[10%] flex justify-center items-center text-[25px]">
              <IoSearch className="cursor-pointer" />
            </div>
          </div>
          {/* <Link to="/">
            <button className="hidden xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white sm:none mt-[20px]">
              Choose Template
            </button>
          </Link> */}
        </div>
        <div className="w-[50%] h-full xl:flex justify-center items-center md:w-[50%] hidden md:block">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
