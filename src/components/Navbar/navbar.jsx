import React from "react";
import navLogo from "../../assets/logo-nav.svg";
import navTitle from "../../assets/logo-name.png";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between pt-[30px]">
            <div className="flex items-center pl-[115px] cursor-pointer">
                <div className="">
                    <img src={navLogo} alt="" />
                </div>
                <div>
                    <img src={navTitle} alt="" />
                </div>
            </div>
            <div className="flex justify-between ">
                <div className="flex bg-[#134E9B] mr-[10px] pr-[16px] pl-[25px] rounded-[6px] text-white cursor-pointer hover:bg-[#0F3A6B]">
                    <button className="flex items-center gap-3 cursor-pointer">
                        Kategorya <IoIosArrowDown />
                    </button>
                </div>
                <form className="relative flex items-center">
                    <input
                        className="pr-[345px] pl-[20px] outline-none rounded-[6px]  pt-[16px] pb-[16px] bg-[#EBEFF3]"
                        type="text"
                        placeholder="What are you looking for?"
                    />
                    <button
                        type="submit"
                        className="rounded-[6px] cursor-pointer bg-[#134E9B] pt-[16px] pr-[20px] pb-[16px] pl-[20px] absolute right-[0%] text-white hover:bg-[#0F3A6B]"
                    >
                        <BiSearch size={24} />
                    </button>
                </form>
            </div>
            <div className="flex items-center gap-[15px] pr-[130px] cursor-pointer">
                <p className="bg-[#EBEFF3] rounded-[6px] pt-[12px] pb-[12px] pl-[13px] pr-[13px] hover:bg-[#D1D5DB]">
                    <FaBalanceScale size={24} />
                </p>
                <p className="bg-[#EBEFF3] rounded-[6px] pt-[12px] pb-[12px] pl-[13px] pr-[13px] hover:bg-[#D1D5DB]">
                    <CiHeart size={24} />
                </p>
                <p className="bg-[#EBEFF3] rounded-[6px] pt-[12px] pb-[12px] pl-[13px] pr-[13px] hover:bg-[#D1D5DB]">
                    <RiShoppingBag3Line size={24} />
                </p>
                <p className="bg-[#EBEFF3] rounded-[6px] pt-[12px] pb-[12px] pl-[13px] pr-[13px] hover:bg-[#D1D5DB]">
                    <BsPerson size={24} />
                </p>
            </div>
        </div>
    );
};

export default Navbar;
