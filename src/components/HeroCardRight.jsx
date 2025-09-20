import { useEffect, useState } from "react";
import H_U_Pro from "../assets/hero_user_pro.webp";
import { Swiper, SwiperSlide } from "swiper/react";



const HeroCardRight = () => {

  const [heroslides, setheroslides] = useState([]);
  useEffect(() => {
    fetch("HeroSlideImage.json")
      .then((res) => res.json())
      .then((data) => setheroslides(data));
  }, []);

  const posts = [
    {
      id: 1,
      date: "20",
      month: "Aug",
      title: "Computer Filters Noise To Make You A Better Listener",
      author: "Jessica Smith",
    },
    {
      id: 2,
      date: "06",
      month: "Aug",
      title: "Ultimate Guide To Planning Your First Overseas Trip",
      author: "Jessica Smith",
    },
    {
      id: 3,
      date: "05",
      month: "Aug",
      title: "Exploring New Trends In Home Decor And Interior Design",
      author: "Jessica Smith",
    },
  ];
   

  return (
    <div className="bg-white shadow-md rounded-2xl py-10 mt-12">
      <div className="">
        <div className="flex justify-center ">
          <img
            src={H_U_Pro}
            alt="H_U_Pro"
            className="h-[150px] w-[150px] rounded-full"
          />
        </div>
        <div className="text-center pt-5">
          <h3 className="text-[22px] font-medium text-gray-500">
            @Md Abu Taleb Khan
          </h3>
          <p className="text-gray-400">
            MERN Stack Web Developer in Bangladesh
          </p>
          <button className="py-2 px-5 border border-gray-400 rounded-4xl mt-5 hover:border-[#FFA21E] duration-300 hover:text-[#FF4EB0]">
            Follow Me
          </button>
        </div>
        <div className="py-5 mx-5">
          <Swiper spaceBetween={20} slidesPerView={2} loop={true} speed={4000}>
            {heroslides.map((heroslide) => (
              <SwiperSlide key={heroslide.id}>
                <img
                  src={heroslide.image}
                  className="w-full h-30 object-cover rounded-xl shadow-md "
                  data-swiper-autoplay="1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* slide two */}
        <div className="py-2 mx-5">
          <Swiper spaceBetween={20} slidesPerView={2} loop={true} speed={4000}>
            {heroslides.map((heroslide) => (
              <SwiperSlide key={heroslide.id}>
                <img
                  src={heroslide.image}
                  alt={`Susu ${heroslide.id}`}
                  className="w-full h-30 object-cover rounded-xl shadow-md "
                  data-swiper-autoplay="1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* last part */}
        <div className="p-5">
          {/* Popular Posts */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <span className="w-3 h-3 bg-[#FF5671] rounded-full"></span>
              Popular Posts
            </h2>
            <div className="space-y-5">
              {posts.map((post) => (
                <div key={post.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-700 px-3 py-2 rounded-md w-16 h-16">
                    <span className="text-lg font-bold">{post.date}</span>
                    <span className="text-sm">{post.month}</span>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-gray-800 hover:text-pink-500 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-md text-gray-500"> by {post.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <span className="w-3 h-3 bg-[#FF5671] rounded-full"></span>
              Categories
            </h2>

            <div className="flex flex-wrap gap-3 mt-2">
              <p className=" font-medium cursor-pointer">
         
                <span className="text-purple-500">#</span> Entertainment
              </p>
              <p className=" font-medium cursor-pointer">
             
                <span className="text-orange-500">#</span> Gadget
              </p>
              <p className="font-medium cursor-pointer">
          
                <span className="text-blue-500 ">#</span> Ideas
              </p>
              <p className=" font-medium cursor-pointer">
          
                <span className="text-green-500">#</span> Inspiration
              </p>
              <p className=" font-medium cursor-pointer">
         
                <span className="text-yellow-500">#</span> Lifestyle
              </p>
              <p className=" font-medium cursor-pointer">
           
                <span className="text-red-500">#</span> Music
              </p>
              <p className=" font-medium cursor-pointer">
         
                <span className="text-indigo-500">#</span> Travel
              </p>
              <p className=" font-medium cursor-pointer">
            
                <span className="text-pink-500">#</span> Trending
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardRight;
