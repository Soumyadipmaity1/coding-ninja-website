"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const members = [
    {
        name: 'Ayush Srivastava',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742151647/WhatsApp_Image_2024-02-01_at_22.09.08_ef0jcp.jpg",
        designation: "President",
    },
    {
        name: 'Rahul Lenka',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742129452/pfp_-_316_RAHUL_LENKA_jj0hg4.jpg",
        designation: "Vice-President",
    },
    {
        name: 'Krishh Chopra',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742142356/profile_pic_-_Krrish_Chopra_1_zbjgvd.jpg",
        designation: "Design & Branding Lead",
    },
    {
        name: 'Arghajit Acharjee',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1742145762/IMG_4665_unbbjh.jpg",
        designation: "Content Lead",
    },
    
    {
        name: 'Ankush Saini',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742152483/ankush_saini_xcin7n.jpg",
        designation: "Cloud Lead",
    },
    {
        name: 'Ayush Lohia',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742137862/photo_-_AYUSH_LOHIA_1_sxot0n.jpg",
        designation: "Marketing & PR Lead",
    },
    {
        name: 'Ojanshu Pati Tripathi',
        image: "https://res.cloudinary.com/dz2znn1tn/image/upload/v1742135022/oj_e8edq3.jpg",
        designation: "Web Dev Lead",
    },
];

const NinjaSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % members.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + members.length) % members.length);

    return (
        <section className="bg-gradient-to-b from-black to-orange-900 py-12 text-white relative">
            <div className="text-center mb-8">
                <h2 className="sm:text-5xl text-4xl font-bold event-title text-center mb-20 sm:mb-28">
                    Meet Our Ninjas
                </h2>
            </div>

            <div className="flex justify-center items-center relative">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 text-white text-3xl hover:text-orange-500 transition"
                >
                    <FaChevronLeft />
                </button>

                {/* Slide Container */}
                <div className="w-80 h-auto overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black bg-opacity-60 p-4 rounded-xl shadow-lg border border-white"
                        >
                            <img
                                src={members[current].image}
                                alt={members[current].name}
                                className="w-full h-64 object-cover rounded-lg -mt"
                            />
                            <h3 className="text-xl font-semibold mt-4">{members[current].name}</h3>
                            
                            <p className="text-sm text-gray-300">{members[current].designation}</p>
                            
                            
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 text-white text-3xl hover:text-orange-500 transition"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default NinjaSlider;