"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
const HeroContent = () => {
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push("/register"); 
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center   mt-2 w-full m-auto z-[20]"
        >
            <div className="h-full w-[60%] flex flex-col justify-center align-middle items-center m-auto text-start  ">

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-3 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <h1
                        className="mb-4 text-8xl leading-none tracking-tight text-white"
                        style={{ letterSpacing: 2, fontFamily: "myFirstFont" }}
                    >
                        SUNKEN <br /> CIPHER
                    </h1>
                    <p
                        className="mb-6 text-2xl font-normal text-white-500 dark:text-gray-300 text-left"
                        style={{ fontFamily: "Roboto" }}
                    >
                        Let us commence the APS Game of SunkenCipher.
                    </p>
                </motion.div>


             
                <motion.a
                    variants={slideInFromLeft(2,2)}
                    onClick={handleRegisterClick}
                    className="py-2 px-[4rem] -ml-6 flex items-center mt-75 justify-center text-center text-white text-2xl cursor-pointer rounded-lg  h-16
               bg-cyan-500 hover:bg-cyan-900 shadow-lg shadow-indigo-900/30
               border border-transparent hover:border-blue-900 transition duration-300 ease-in-out transform hover:scale-105 "
                >
                    Register
                </motion.a>


            </div>

            <motion.div
                variants={slideInFromRight(10000000000000000000000000000000000000000000000000000)}
                className="w-[40%] h-full  m-auto animate-floating ml-6  "
            >
                <Image
                    src="/astronut.png"
                    alt="work icons"
                    height={450}
                    width={450}
                />
            </motion.div>
        </motion.div>
        
    );
};

export default HeroContent;
