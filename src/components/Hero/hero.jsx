import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImg from "../../assets/heroImg.png";

const Hero = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full mt-[40px]"
        >
            <SwiperSlide>
                <div className="bg-[#F3F0F0] flex items-center justify-between px-[130px]">
                    <div className="max-w-[500px]">
                        <h1 className="font-bold text-[44px]">
                            Siz kutgan Xiaomi 12 Mi Laite
                        </h1>
                        <p className="text-[#545D6A]">
                            Orginallik va qulay narxni o'zida jamlagan Xiaomi 12
                            Mi Laite siz uchun eng yaxshi takliflarimizdan
                            biridir!
                        </p>
                        <button className="mt-[20px] px-[36px] py-[12px] bg-[#0F4A97] rounded-[6px] text-white hover:bg-[#0D3A7A] cursor-pointer">
                            Batafsil
                        </button>
                    </div>
                    <div>
                        <img src={heroImg} alt="Banner 1" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-[#E8F7FF] flex items-center justify-between px-[130px]">
                    <div className="max-w-[500px]">
                        <h1 className="font-bold text-[44px] text-[#0F4A97]">
                            Yangi Samsung Galaxy S23
                        </h1>
                        <p className="text-[#545D6A]">
                            Samsung Galaxy S23 innovatsion texnologiyalar bilan
                            jihozlangan va siz uchun eng yaxshi variant!
                        </p>
                        <button className="mt-[20px] px-[36px] py-[12px] bg-[#097D3D] rounded-[6px] text-white hover:bg-[#065E2B] cursor-pointer">
                            Batafsil
                        </button>
                    </div>
                    <div>
                        <img src={heroImg} alt="Banner 2" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-[#FFEBEB] flex items-center justify-between px-[130px]">
                    <div className="max-w-[500px]">
                        <h1 className="font-bold text-[44px] text-[#D60000]">
                            Apple iPhone 14 Pro Max
                        </h1>
                        <p className="text-[#545D6A]">
                            Eng yuqori darajadagi dizayn va samaradorlikka ega
                            iPhone 14 Pro Max faqat siz uchun!
                        </p>
                        <button className="mt-[20px] px-[36px] py-[12px] bg-[#D60000] rounded-[6px] text-white hover:bg-[#B00000] cursor-pointer">
                            Batafsil
                        </button>
                    </div>
                    <div>
                        <img src={heroImg} alt="Banner 3" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;
