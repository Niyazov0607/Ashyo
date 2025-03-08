import React from "react";
import imgArtel from "../../assets/artel.png";
import imgApple from "../../assets/apple.png";
import imgSamsung from "../../assets/sumsungg.png";
import imgVivo from "../../assets/vivo.png";
import imgNokia from "../../assets/nokia.png";
import imgHu from "../../assets/huwave.png";
import imgMi from "../../assets/mi.png";

const Brands = () => {
    return (
        <div className="flex justify-center gap-5 cursor-pointer pt-84 text-[#545D6A] px-33 pt-[30px]">
            <div>
                <div>
                    <img src={imgArtel} alt="" />
                </div>
                <div className="pt-2">
                    <img src={imgApple} alt="" />
                </div>
            </div>
            <div>
                <div>
                    <img src={imgSamsung} alt="" />
                </div>
                <div className="pt-2">
                    <img src={imgVivo} alt="" />
                </div>
            </div>
            <div>
                <div>
                    <img src={imgNokia} alt="" />
                </div>
                <div className="pt-2">
                    <img src={imgHu} alt="" />
                </div>
            </div>
            <div>
                <div>
                    <img src={imgMi} alt="" />
                </div>
                <div>
                    <button className="bg-[#EBEFF3] px-[82px] py-[12px] rounded-[6px] mt-2 cursor-pointer text-[#134E9B] font-[500]">
                        Ko'proq
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Brands;
