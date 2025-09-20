import HeroImgOne from "../assets/hero_img_one.webp";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const HeroLeftCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl py-5 my-12 border-l-5 border-orange-500">
      <div className="flex mx-10 gap-5">
        <div className="w-[20%]">
          <img
            src={blog?.image}
            alt={blog?.alt}
            className="w-[178px] h-[170px] mt-3 rounded-2xl"
          />
        </div>
        <div className="w-[80%]">
          <h3 className="font-medium text-[30px]">{blog?.title}</h3>
          <div className="flex items-center gap-8 mt-3">
            <p>{blog?.shortDesc}</p>
            <p>
              <span>{blog?.comments}</span> comments
            </p>
          </div>
          <p className="pt-5">
             {blog?.description}
          </p>
        </div>
      </div>
      <div className="border-b border-dotted mx-10 h-1 mt-10"></div>
      <div className="flex items-center justify-between mx-10 pt-5">
        <div className="flex items-center gap-5">
          <p><span className="text-[#FFA21E]">#</span> {blog?.tags}</p>
          <p><span className="text-[#FF4EB0]">#</span> {blog?.tags1}</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1">
            <MdOutlineLocalFireDepartment />
            <span>{blog?.views}</span> views
          </p>
          <p className="flex items-center gap-1">
            <IoMdTime />
            {blog?.readTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftCard;
