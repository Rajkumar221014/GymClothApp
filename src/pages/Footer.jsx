import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-130 bg-[#121927] pt-20">
      <div className="  flex justify-around ">
        <div className="text-5xl ">
          <h1 className="text-white">Claivo</h1>
          <div className="pt-10 text-3xl text-gray-300">
            <h1>Train Station Street,</h1>
            <h1 className="pt-2">Okhla,Delhi</h1>
            <h1 className="pt-4">9134895467</h1>
            <div className="text-3xl flex gap-5 pt-2 text-white">
                <div><i class="ri-instagram-line"></i></div>
                <div><i class="ri-facebook-circle-line"></i></div>
                <div><i class="ri-youtube-line"></i></div>
            </div>
          </div>
        </div>
        <div className="" >
           <h1 className="text-white text-5xl">Page</h1>
          <div className="pt-10 text-3xl text-gray-300">
            <h1>Home</h1>
            <h1 className="pt-3">Shop</h1>
            <h1 className="pt-3">Products</h1>
            <h1 className="pt-3">Article</h1>
            <h1 className="pt-3">Contact Us</h1>
            
          </div>
        </div>
        <div>
            <h1 className="text-white text-5xl">Info</h1>
          <div className="pt-10 text-3xl text-gray-300">
            <h1>Shipping Policy</h1>
            <h1 className="pt-3">Return & Refund</h1>
            <h1 className="pt-3">Support</h1>
            <h1 className="pt-3">FAQs</h1>
            
            
          </div>
        </div>
        <div>
            <h1 className="text-white text-5xl">Join Newsletter</h1>
          <div className="pt-10 text-3xl text-gray-300">
            <h1>Home</h1>
          <h1>Subscribe and promotions</h1>
         <div>
            <input className="border p-2 mt-4 rounded-3xl" type="email" name="" id="" placeholder="Enter Your Email..... " /><div className="bg-black cursor-pointer rounded-full inline-block"><i class="ri-arrow-right-line"></i></div>
         </div>
           
            
          </div>
        </div>
      </div>
     <div className="text-white pt-10 pl-24 pr-24">
         < hr/>
     </div>
     <div className="  text-white pt-5 pl-24 flex">
        <h1>Copyright<i class="ri-copyright-line"></i>2025 Claivo.All Rights Reserved</h1>
        <div className="w-1 h-4 bg-gray-100 ml-5 mt-1"></div>
        <div className="flex gap-4 ml-4">
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
        </div>
        <div className="flex gap-5 ml-96 text-3xl">
            <div><i class="ri-visa-line"></i></div>
            <div><i class="ri-paypal-line"></i></div>
            <div><i class="ri-alipay-line"></i></div>
            <div><i class="ri-mastercard-line"></i></div>
            <div><i class="ri-alipay-line"></i></div>
        </div>
     </div>
    </div>
  );
};

export default Footer;
