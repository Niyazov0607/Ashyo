import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imgHeadphone from "../../assets/headphones.png";
import axios from "axios";
import {
    FaBalanceScale,
    FaChevronLeft,
    FaChevronRight,
    FaHeart,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router";

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        async function productData() {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                setProducts(res.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        productData();
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="relative p-4 mx-auto">
            <h1 className="mb-4 text-3xl font-bold ml-[131px]">
                Most Popular Products
            </h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="relative">
                    <div className="relative home__arrows">
                        <button
                            className="absolute z-10 left-20 top-50 text-[#545D6A] bg-white rounded-full p-3 cursor-pointer"
                            onClick={handlePrev}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="absolute z-10 right-20 top-50 text-[#545D6A] bg-white rounded-full p-3 cursor-pointer"
                            onClick={handleNext}
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        ref={swiperRef}
                        slidesPerView={4.4}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        centeredSlides={false}
                        breakpoints={{
                            640: { slidesPerView: 2.7 },
                            768: { slidesPerView: 3.7 },
                            1024: { slidesPerView: 4.7 },
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        className="p-4"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="my-4 bg-white rounded-lg w-[278px] shadow-md relative">
                                    <NavLink to={"/product/" + product.id}>
                                        {" "}
                                        <img
                                            className="w-full bg-[#EBEFF3] rounded-[6px]"
                                            src={imgHeadphone}
                                            alt={product.title}
                                        />
                                    </NavLink>
                                    <div className="p-4">
                                        <NavLink to={"/product/" + product.id}>
                                            <h3 className="cardTwo__title">
                                                {product.title}
                                            </h3>
                                        </NavLink>
                                        <p className="pt-3 text-lg font-bold">
                                            ${product.price}
                                        </p>
                                        <p className="text-[#F02C96] mt-2 bg-[#F02C961A] w-[151px] text-center px-[0px] py-[2px] rounded-[6px]">
                                            6 oy / 1 200 000 usz
                                        </p>
                                        <div className="relative flex cursor-pointer">
                                            <p className="absolute right-10 border-[#EBEFF3] rounded-[6px] p-2 border-2 bottom-0">
                                                <FaBalanceScale />
                                            </p>
                                            <p className="absolute right-0 bg-[#134E9B] rounded-[6px] p-2 bottom-0 cursor-pointer text-white border-2 border-[#134E9B]">
                                                <BiShoppingBag />
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="absolute top-2 right-2 bg-[#EBEFF3] rounded-[6px] cursor-pointer p-2"
                                        onClick={() =>
                                            toggleFavorite(product.id)
                                        }
                                    >
                                        {favorites.includes(product.id) ? (
                                            <FaHeart size={24} color="red" /> // Filled red heart
                                        ) : (
                                            <CiHeart size={24} color="black" />
                                        )}
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default Cards;
