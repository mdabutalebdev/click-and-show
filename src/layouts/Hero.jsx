import { useEffect, useState } from "react";
import HeroLeftCard from "../components/HeroLeftCard";

const Hero = () => {
  const [blogs, setblogs] = useState([]);
  const [categorys, setcategorys] = useState(null);
  const [showDetails, setshowDetails] = useState();
  console.log(categorys);

  useEffect(() => {
    fetch("HeroData.json")
      .then((Response) => Response.json())
      .then((blogdata) =>{setblogs(blogdata);
        setcategorys(blogdata[1])
        setshowDetails(blogdata[1])
      } );
       
  }, []);

  const dublicateCategoryRemove = [
    ...new Set(blogs.map((blog) => blog.category)),
  ];
  //jokhon filter category gula te click korbo
  function filterCategory(cate) {
    setcategorys(cate);
  }
  function showFullBlog(sfg) {
    setshowDetails(sfg);
  }
  const filterData = blogs.filter((blog) => blog.category == categorys);

  console.log(filterData);

  return (
    <div className="bg-[#F5F5FA] h-screen py-10">
      <div className="flex gap-20 container mx-auto">
        <div className="container mx-auto w-[70%]">
           <HeroLeftCard blog={showDetails}/>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center gap-5">
            {dublicateCategoryRemove.map((category, idx) => (
              <button
                key={idx}
                onClick={() => filterCategory(category)}
                className="border border-[#FF5671] px-3 py-2 rounded-md hover:bg-[#FF5671] hover:text-white duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10">
            {filterData.map((el, idx) => (
              <h3
                onClick={() => showFullBlog(el)}
                key={idx}
                className="border py-2 mb-2 px-5 text-xl font-medium text-gray-600  border-[#FF5671] cursor-pointer"
              >
                {el.title}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
