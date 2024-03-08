import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/next_logo-removebg-preview.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";
import linkden from "../../assets/linkden.png";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full bg-blue-950 flex justify-center items-center relative">
      <div className="absolute bottom-[800px] md:bottom-[400px] lg:bottom-[350px] right-[30px] py-2 px-3 w-[50px] h-[50px] flex justify-center items-center rounded-md shadow-md bg-blue-800 text-[22px] ">
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          className=" text-white font-bold cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </ScrollLink>
      </div>
      <div className="w-[85%] py-[20px] text-white grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div className="flex justify-center items-center">
          <div className="p-[20px] flex justify-center items-center flex-col gap-3">
            <img
              src={logo}
              alt=""
              className="w-[150px] h-[100px] object-contain"
            />
            <div className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              libero, placeat aliquam.
            </div>
            <div className="flex">
              <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
                <img
                  src={fb}
                  alt=""
                  className="w-[35px] h-[35px] object-cover"
                />
              </div>
              <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
                <img
                  src={ig}
                  alt=""
                  className="w-[35px] h-[35px] object-cover"
                />
              </div>
              <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
                <img
                  src={twitter}
                  alt=""
                  className="w-[35px] h-[35px] object-cover  "
                />
              </div>
              <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
                <img
                  src={linkden}
                  alt=""
                  className="w-[35px] h-[35px] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-[20px] col-span-3 grid grid-cols-2 md:grid-cols-3">
          <div className="h-full p-[30px]">
            <div className="mb-[10px] font-semibold text-[22px]">Assets</div>
            <ul>
              <li>consectetur</li>
              <li>ipsum</li>
              <li>laudantium</li>
              <li>nostrum</li>
              <li>eligendi</li>
            </ul>
          </div>
          <div className="h-full p-[30px]">
            <div className="mb-[10px] font-semibold text-[22px]">Resources</div>
            <ul>
              <li>consectetur</li>
              <li>ipsum</li>
              <li>laudantium</li>
              <li>nostrum</li>
              <li>eligendi</li>
            </ul>
          </div>
          <div className="h-full p-[30px]">
            <div className="mb-[10px] font-semibold text-[22px]">Research</div>
            <ul>
              <li>consectetur</li>
              <li>ipsum</li>
              <li>laudantium</li>
              <li>nostrum</li>
              <li>eligendi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
