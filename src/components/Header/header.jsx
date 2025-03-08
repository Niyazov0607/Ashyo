import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Uz");

    const languages = ["Uz", "En", "Ru"];

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };
    return (
        <div className="flex items-center justify-between pt-3 pr-[130px] pl-[130px]">
            <div className="flex items-center gap-8 cursor-pointer text-[#545D6A]">
                <p className="flex items-center">
                    <CiLocationOn />
                    Tashkent
                </p>
                <p className="flex items-center">About Us</p>
                <p className="flex items-center">Products</p>
                <p className="flex items-center">Contacts</p>
            </div>
            <div className="flex items-center gap-10 cursor-pointer">
                <p>+998(71) 123-45-67</p>
                <div className="relative">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <p>{selectedLang}</p>
                        <IoIosArrowDown
                            className={`transition-transform ${
                                isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </div>
                    {isOpen && (
                        <div className="absolute right-0 w-32 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                            {languages.map((lang) => (
                                <p
                                    key={lang}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleLanguageChange(lang)}
                                >
                                    {lang}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
