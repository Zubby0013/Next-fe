document.title = "Teacher's Lession Notes";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { MdAutoAwesome } from "react-icons/md";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useNotes, useSchoolData } from "../../hook/useSchoolAuth";

const AdminLessonNote = () => {
  const { data } = useSchoolData();
  const { notes } = useNotes(data?._id);

  return (
    <div>
      <LittleHeader name="Teacher's Lesson Notes" />
      <div className="min-h-[82vh] text-blue-950">
        <div>
          <div className="flex float-end"></div>
          <div className="py-9 w-full mt-24 p-3 border-b-2">
            <p className="font-bold mb-7">Lesson Note</p>
            <div className="">
              <div>
                {notes?.data?.lessonNotes?.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:grid-cols-2  xl:grid-cols-3 ">
                    {notes?.data?.lessonNotes?.map((props: any) => (
                      <NavLink
                        key={props?._id}
                        to={`/lesson-note/${props?._id}`}
                      >
                        <div
                          className={`min-h-[200px] shadow-sm border flex justify-center items-center flex-col rounded-md `}
                        >
                          <div className="card-body text-gray-500 px-2 ">
                            <div className="h-14 w-full flex justify-center items text-[30px]">
                              <FaBook />
                            </div>
                            <div className="flex flex-col text-center">
                              <h2 className="font-medium">
                                {props?.topic ? (
                                  props?.topic
                                ) : (
                                  <div className="opacity-50">No Topic</div>
                                )}
                              </h2>
                              <p className="pt-5 text-left text-[12px] ">
                                {props?.summary ? (
                                  props?.summary
                                ) : (
                                  <div className="opacity-50">No summary</div>
                                )}
                              </p>

                              <div className="text-[12px] w-full flex justify-start  mt-10 font-medium">
                                <p>{props?.classes}</p>
                                <p>{props?.subject}</p>
                                <p
                                  className={`${
                                    props?.adminSignation
                                      ? "text-green-500 font-bold"
                                      : "text-red-500 font-bold"
                                  }`}
                                >
                                  {props?.adminSignation
                                    ? "Approved"
                                    : "Not-Approved"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <div className=" mt-32 w-full h-full flex flex-col items-center justify-center ">
                    <MdAutoAwesome />
                    <div className="opacity-50 mt-5">
                      No Lesson note Published yet
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLessonNote;
