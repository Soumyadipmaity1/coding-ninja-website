"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const members = [
    {
        name: 'Bikram Aditya Munshi',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738177658/bikram_dwops8.jpg",
        designation: "President",
    },
    {
        name: 'Ayush Srivastava',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738176767/ayush_srivastava_o7jyo3.jpg",
        designation: "Vice-President",
    },
    {
        name: 'Sankalp Prajapati',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738178165/sankalp_xj7bzn.jpg",
        designation: "PR Marketing Lead",
    },
    {
        name: 'Pracheeta Gupta',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738177981/pracheeta_rienud.jpg",
        designation: "CyberSecurity Lead",
    },
    {
        name: 'Shubham Agarwal',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738178391/shubham_saym4f.jpg",
        designation: "Administration Lead",
    },
    {
        name: 'Harsh Singh',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738177874/harsh_bb7qm2.jpg",
        designation: "App Dev Lead",
    },
    {
        name: 'Ayush Suman',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738177491/ayush_suman_outaqe.jpg",
        designation: "CP Lead",
    },
    {
        name: 'Sankalp Singh',
        image: "https://res.cloudinary.com/dsuxecz0u/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738178298/sankalp_singh_ohq6ec.jpg",
        designation: "Cloud Lead",
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