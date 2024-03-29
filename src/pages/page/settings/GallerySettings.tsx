import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { createGallaryRestrict } from "../../api/schoolAPIs";
import { useGallary, useSchoolData } from "../../hook/useSchoolAuth";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { UnLazyImage } from "@unlazy/react";

document.title = "School's Gallery";

import { mutate } from "swr";

const GallerySettings = () => {
  const { data } = useSchoolData();
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);

    setImage(file);
    setAvatar(save);
  };

  useEffect(() => {
    let timimg = setTimeout(() => {
      if (avatar !== "") {
        setLoading(true);
        const formData = new FormData();
        formData.append("avatar", image);

        createGallaryRestrict(data?._id, formData).then((res) => {
          if (res.status === 201) {
            mutate(`api/view-gallary/${data?._id}`);
            toast.success(`Image Uploaded`);
            setLoading(false);
            setImage("");
            setAvatar("");
          } else {
            toast.error(`${res?.response?.data?.message}`);
            setLoading(false);
          }
        });
      }

      clearTimeout(timimg);
    });
  }, [avatar]);

  const { gallary } = useGallary(data?._id);

  let images = gallary?.data?.map((el: any) => {
    return { src: el.avatar };
  });

  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-full bg-white py-[20px] ">
        <LittleHeader name={document.title} />
        {data?._id && (
          <div className="flex justify-between items-end">
            <div className="mb-5 text-blue-950">
              Upload School Photos to your custom gallery here
            </div>
            <div>
              <div className=" flex items-center">
                <label
                  htmlFor="gallery-upload"
                  className="mb-3 px-5 py-3 border rounded-md m-2 overflow-hidden flex gap-2 items-center justify-center bg-blue-950 text-white text-[18px] cursor-pointer"
                >
                  {loading ? (
                    <div className="text-[12px] flex items-center gap-1">
                      <ClipLoader color="white" size={15} />
                      <span>Loading</span>
                    </div>
                  ) : (
                    <div className="text-[12px] flex items-center gap-1">
                      <BsCamera color="white" size={18} />
                      <span>Upload</span>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="gallery-upload"
                  className="hidden"
                  placeholder="Upload"
                  onChange={onHandleImage}
                />
              </div>
            </div>
          </div>
        )}

        <div className="p-2 min-h-[400px] mb-10 w-full border flex justify-start items-center transition-all duration-300">
          <div className="w-full">
            {gallary?.data?.length > 0 ? (
              <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
                {gallary?.data?.map((props: any) => (
                  <UnLazyImage
                    // blurhash="LKO2:N%2Tw=w]~RBVZRi};RPxuwH"
                    // srcSet="image-320w.jpg 320w, image-640w.jpg 640w"

                    thumbhash="1QcSHQRnh493V4dIh4eXh1h4kJUI"
                    src={props?.avatar}
                    autoSizes
                    className="w-full h-[300px] rounded-md flex object-cover "
                  />
                ))}

                {/* <img src={props?.avatar} /> */}

                {/* <PhotoAlbum
                  layout="rows"
                  photos={photos}
                  targetRowHeight={150}
                  onClick={({ index: current }) => setIndex(current)}
                />

                <Lightbox
                  open={open}
                  close={() => setOpen(false)}
                  slides={images}
                /> */}

                {/* <Lightbox
                  index={index}
                  advancedSlides={slides}
                  open={index >= 0}
                  close={() => setIndex(-1)}
                /> */}
              </div>
            ) : (
              <div>no image</div>
            )}
            {/* {gallary?.data?.length > 0 ? (
              <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
                {gallary?.data?.map((props: any) => (
                  <img
                    className="w-full h-[300px] rounded-md flex object-cover bg-red-600"
                    src={props?.avatar}
                  />
                ))}
              </div>
            ) : (
              <div>no image</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySettings;
