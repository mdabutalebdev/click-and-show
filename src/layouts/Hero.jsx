import { useEffect, useState } from "react";
import HeroLeftCard from "../components/HeroLeftCard";
 

const Hero = () => {
  const [blogs, setblogs] = useState([]);
  const [showdata, setshowdata] = useState(null)
  useEffect(() => {
    fetch("HeroData.json")
      .then((res) => res.json())
      .then((data) => {
        setblogs(data)
         setshowdata(data[1])
      });
  }, []);

  function clickShowData(data) {
       setshowdata( data)
  }
  return (
    <div className="bg-[#F5F5FA] py-15">
      <div className="flex gap-20 container mx-auto">
        <div className="container mx-auto w-[70%]">
           <HeroLeftCard  blog={showdata}/> 

        </div>
        <div className="w-[30%]">
          <div className="px-5 py-5 border  border-gray-500">
            {blogs.map((blog) => (
              <h1 onClick={()=>clickShowData( blog)} className="border-b py-2 border-gray-400 cursor-pointer">{blog.title}</h1>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
