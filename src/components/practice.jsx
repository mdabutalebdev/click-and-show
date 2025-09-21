// import { useEffect, useState } from "react";
// import HeroLeftCard from "../components/HeroLeftCard";

// const Hero = () => {
//   const [blogs, setblogs] = useState([]);
//   const [showdata, setshowdata] = useState(null);
//   const [category, setcategory] = useState([]);



//   useEffect(() => {
//     fetch("HeroData.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setblogs(data);
//         setshowdata(data[1]);
//       });
//   }, []);

//   function clickShowData(data) {
//     setshowdata(data);
//   }
//   function filterCategory(ctg){
//     console.log(setcategory(ctg));
    
     
//   }
//   return (
//     <div className="bg-[#F5F5FA] py-15">
//       <div className="flex gap-20 container mx-auto">
//         <div className="container mx-auto w-[70%]">
//           <HeroLeftCard blog={showdata} />
//         </div>
//         <div className="w-[30%]">
//           {/* <div className="flex flex-wrap items-center gap-5 py-5">
//             {
//             blogs.map((cate)=>(
//                <button
//                 onClick={() => filterCategory(cate)}
//                 className="border py-2 px-2 border-gray-400 cursor-pointer"
//               >
//                 {cate.category}
//               </button>
//             ))
//           }
//           </div> */}
//           <div className="px-5 py-5 border  border-gray-500">
//             {blogs.map((blog) => (
//               <h1
//                 onClick={() => clickShowData(blog)}
//                 className="border py-4 mb-2 px-5  border-gray-400 cursor-pointer"
//               >
//                 {blog.title}
//               </h1>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
