import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import Category from "../../components/Categories/category";
import cardImg from "../../assets/cardImg.png";
import imgPhone from "../../assets/imgPhone.png";
import CardsTwo from "../../components/CardsTwo/cardsTwo";
import { useParams } from "react-router";
import axios from "axios";

const Detail = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});

    const monthlyPrice = productInfo.price ? productInfo.price / 6 : 0;

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(
                    `https://dummyjson.com/products/${id}`
                );
                console.log("Fetched product:", res.data);
                setProductInfo(res.data);
            } catch (error) {
                console.error("Error fetching product:", error.message);
            }
        }
        fetchProduct();
    }, [id]);
    return (
        <>
            <Header />
            <Navbar />
            <Category />
            <div className="pt-15 ml-[131px]">
                <h1 className="text-2xl font-bold">{productInfo.title}</h1>
                <div className="flex mt-5 space-x-5">
                    <div className="space-y-2.5">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-[#EBEFF3] rounded-[6px] p-3"
                            >
                                <img src={cardImg} alt={`Card ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className=" bg-[#EBEFF3] rounded-[6px] px-[80px]">
                        <img
                            src={imgPhone}
                            alt="Phone"
                            className="rounded-[6px]"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-[20px]">
                            <p className="font-[400] text-[16px] text-[#515D6C]">
                                Narxi
                            </p>
                            <p className="text-[32px] font-[700]">
                                {productInfo.price}$
                            </p>
                        </div>
                        <div>
                            <button className="bg-[#EBEFF3] py-[19px] px-[97px] rounded-[6px]">
                                Oyiga {monthlyPrice.toFixed(2)} uszdan muddatli
                                to’lov
                            </button>
                        </div>
                        <div className="flex items-center pt-[10px] gap-[14px]">
                            <div>
                                <button className="py-[18px] px-[55px] rounded-[6px]  border-[#134E9B] border-2 text-[#134E9B]">
                                    Savatga qo‘shish
                                </button>
                            </div>
                            <div>
                                <button className="py-[18px] px-[71px] rounded-[6px]  bg-[#134E9B] border-2 border-[#134E9B] text-white">
                                    Xarid qilish
                                </button>
                            </div>
                        </div>
                        <div className="text-[#06172DB2] items-center pt-[20px] space-y-[21px]">
                            <p>Yetkazib berish O’zbekiston bo’ylab</p>
                            <p>Do’kondi o’zidan olib ketishingiz mumkin</p>
                            <p>
                                Tahminiy yetkazib berish vaqti 1 kundan 3
                                kungacha......
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CardsTwo />
        </>
    );
};

export default Detail;
