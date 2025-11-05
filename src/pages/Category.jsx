import React from "react";
import img1 from "../assets/d1.jpg";
import img2 from "../assets/d2.jpg";
import img3 from "../assets/d3.jpg";
import img4 from "../assets/d4.jpg";
import img5 from "../assets/d5.jpg";
import img6 from "../assets/d6.jpg";

const Category = () => {
  return (
    <div className="w-full h-140 bg-[#121927] pt-4 ">
      <div className="text-5xl text-center bg-linear-to-b from-purple-800 to-sky-400 bg-clip-text text-transparent">
        <h1>Categories</h1>
      </div>
      <div className="flex items-center justify-center gap-4 mt-16">
        <div>
          <div className=" w-60 h-56 rounded-full">
            <img className="w-full h-full rounded-full" src={img1} alt="" />
          </div>
          <h1 className="text-white text-2xl text-center mt-3">Muscle Fit</h1>
        </div>
        <div>
          <div className=" w-60 h-56 rounded-full">
            <img className="w-full h-full rounded-full" src={img2} alt="" />
          </div>
          <h1 className="text-white text-2xl text-center mt-3">Slim Fit</h1>
        </div>
        <div>
          <div className=" w-60 h-56 rounded-full">
            <img className="w-full h-full rounded-full" src={img3} alt="" />
          </div>
          <h1 className="text-white text-2xl text-center mt-3">Pullover</h1>
        </div>
        <div>
          <div className=" w-60 h-56 rounded-full">
            <img className="w-full h-full rounded-full" src={img4} alt="" />
          </div>
          <h1 className="text-white text-2xl text-center mt-3">Quick Dry</h1>
        </div>
        <div>
          <div className=" w-60 h-56 rounded-full">
            <img className="w-full h-full rounded-full" src={img6} alt="" />
          </div>
          <h1 className="text-white text-2xl text-center mt-3">Half Sleeve</h1>
        </div>
      </div>
      <div className="text-white text-5xl flex items-center justify-center gap-2 mt-8">
        <i class="ri-arrow-left-double-line"></i>
        <div className="w-5 h-5 bg-[#b57edc] inline-block hover:w-7 hover:h-7 hover:rounded-full hover:bg-[#4b1c71]"></div>
        <div className="w-7 h-7 bg-[#4b1c71] inline-block hover:rounded-full hover:w-9 hover:h-9 hover:bg-[#b57edc]"></div>
        <div className="w-5 h-5 bg-[#b57edc] inline-block hover:w-7 hover:h-7 hover:rounded-full hover:bg-[#4b1c71]"></div>
        <i class="ri-arrow-right-double-line"></i>
      </div>
    </div>
  );
};

export default Category;
