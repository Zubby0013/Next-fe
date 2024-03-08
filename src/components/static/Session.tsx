import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";
import { displaySession, displaySessioned } from "../../global/reduxState";
import { FaCheckDouble } from "react-icons/fa6";
import {
  useSchoolData,
  useSchoolSessionData,
} from "../../pages/hook/useSchoolAuth";

const Session: FC = () => {
  // const { data } = useSchoolData();
  const dispatch = useDispatch();
  const session = useSelector((state: any) => state.sessionToggle);

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(displaySession(true));
      dispatch(displaySessioned(false));
    } else {
      document.startViewTransition(() => {
        dispatch(displaySession(true));
        dispatch(displaySessioned(false));
      });
    }
  };

  // const [state, setState] = useState<string>("");

  // const changeImage = (e: any) => {
  //   const file = e.target.files[0];

  //   const formData: any = new FormData();
  //   formData.append("avatar", file);
  //   setState(file);
  //   console.log(state);

  //   if (state) {
  //     const timer = setTimeout(() => {
  //       clearTimeout(timer);
  //     }, 1000);
  //   }
  // };

  const arrayData = Array.from({ length: 0 });
  const { data } = useSchoolData();
  const { schoolInfo } = useSchoolSessionData(data?._id);
  return (
    <div className="border w-[250px] bg-blue-50 shadow-sm min-h-42 rounded-md p-1 ">
      <p className="text-[14px] mt-2 font-bold ml-2">
        Academic Sessions created
      </p>
      <div className="flex flex-col items-between  w-full">
        {schoolInfo?.length > 0 ? (
          <div>
            {schoolInfo?.map((props: any, i: number) => (
              <div>
                {i < 3 && (
                  <div
                    key={`${i + props}`}
                    className="w-full"
                    onClick={() => {
                      if (!document.startViewTransition) {
                        dispatch(displaySessioned(false));
                      } else {
                        document.startViewTransition(() => {
                          dispatch(displaySessioned(false));
                        });
                      }
                    }}
                  >
                    <div className="text-[12px] w-full py-2 font-medium  duration-300 transition-all hover:bg-blue-950 p-2 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between border">
                      <div>Session: {props?.year}</div>
                      <div className="text-[17px]"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-1 mt-3">
            <FaCheckDouble size={13} />
            <p className="mt-3 text-[12px] font-medium">
              session hasn't been decleared
            </p>
          </div>
        )}
      </div>

      <div className="mt-4" />
      <hr />
      <div
        className="flex w-full justify-center items-center cursor-pointer hover:text-blue-900 transition-all duraion-300 mt-2"
        onClick={handleToggleMenuFalse}
      >
        <p className="font-bold">+</p>
        <p className="p-2 text-center break-words text-[12px] font-bold uppercase ">
          Add New Session
        </p>
      </div>
    </div>
  );
};

export default Session;
