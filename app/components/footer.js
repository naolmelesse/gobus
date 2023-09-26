import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3F72AF] mt-10 rounded-t-[4rem] text-white text-center md:text-left py-6 w-full">
      <div className="flex flex-col md:flex-row mx-auto justify-between items-center gap-10 w-4/5">

        <div>
          <a href="/" className="text-xl font-semibold">GoBus</a>
          <p className="mt-2">Making Travel Easy and Convenient</p>
          <div className="flex gap-5 py-2 text-2xl">
            <FaFacebook className="text-[#000] cursor-pointer hover:text-gray-700 transition duration-300"/>
            <FaTwitter className="text-[#000] cursor-pointer hover:text-gray-700 transition duration-300"/>
            <FaInstagram className="text-[#000] cursor-pointer hover:text-gray-700 transition duration-300"/>
            <FaYoutube className="text-[#000] cursor-pointer hover:text-gray-700 transition duration-300"/>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5  lg:gap-20 w-2/3">
        <div className="flex flex-col mt-4 mx-0 gap-1.5">
          <h3 className="text-[1rem] font-semibold text-[#fefefe]">Popular destinations</h3>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Addis Ababa</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Dire Dawa</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Jimma</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Mekele</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Bahir Dar</a>
        </div>

        <div className="flex flex-col mt-4 mx-0 gap-1.5">
          <h3 className="text-[1rem] font-semibold text-[#fefefe]">Partners</h3>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Trivago</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">MakeMyTrip</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Furgo</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Tripy</a>
        </div>

        <div className="flex flex-col mt-4 mx-0 gap-1.5">
          <h3 className="text-[1rem] font-semibold text-[#fefefe]">About</h3>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">About Us</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Contact</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Services</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Blog</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Careers</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Mobile version</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Offers</a>
        </div>

        <div className="flex flex-col mt-4 mx-0 gap-1.5">
        <h3 className="text-[1rem] font-semibold text-[#fefefe]">Info</h3>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">FAQs</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Refund</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Tickets</a>
          <a href="" className="hover:text-gray-400 transition duration-300 font-extralight text-[0.9rem]">Help Desk</a>
        </div>
        </div>

      </div>
        <div className="w-4/5 mx-auto">
          <hr className="my-2 "/>
          <div className="flex gap-2 lg:justify-between">
            <p className="f[1rem]t-extra text-[#000]light">&copy; {new Date().getFullYear()} GoBus</p>
            <p className="f[1rem]t-extra text-[#000]light">🧶 Crafted with 🖤 by Naol.</p>
          </div>
        </div>
    </footer>
  );
};


