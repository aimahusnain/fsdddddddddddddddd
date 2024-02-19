"use client";
import Cleaning from "@/components/Cleaning";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import WhatWeDo from "@/components/WhatWeDo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type Data = {
  texts: { text: string; desc: string; button: string; text2: string }[];
};
const Home: React.FC = () => {
  const [data, setData] = useState<Data>({
    texts: [
      { text: "The Only Handwash Tunnel",  desc: "No brushes no machinery.", button: "Button 1",text2: "Around"},
      { text: "We treat your car the way you would ", desc: "Our goal is to make you happy.", button: "Button 2",text2: "treat it"},
      { text: "5 DIY Self Service Bays", desc: "Safest Wash in Town.", button: "Button 3",text2: "open 24/7"},
      { text: "Satisfaction guaranteed ", desc: "a complete rejuvenation for your vehicle.", button: "Button 3",text2: "if we goof!"},
      { text: "Free Vacuums with Car Wash", desc: "2 Miles from I-5 Longview exit.", button: "Button 3",text2: " "},
      { text: "Hands-on service lambs wool", desc: "Welcome to Wash me car wash.", button: "Button 3",text2: "wash"},
    ],
  });

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [shouldAnimateDown, setShouldAnimateDown] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the downward animation after 1 second
    const timeout = setTimeout(() => {
      setShouldAnimateDown(true);
    }, 5000);

    // Clear the timeout when the component unmounts or when the downward animation starts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShouldAnimateDown(true);
      setTimeout(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % data.texts.length);
        setShouldAnimateDown(false);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full pt-[100px] object-cover"
      >
        <source
          src="/WashMe Car Wash Video - Edited.mp4"
          className="object-cover"
          type="video/mp4"
        />
      </video>
      <div className="text-white absolute top-[310px] flex flex-col justify-center items-center left-[240px]">
      <div className="h-[25px] tracking-widest uppercase overflow-hidden ">
    <motion.div
      className="text-transition"
      initial={{ y: "100%" }}
      animate={{ y: shouldAnimateDown ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-normal uppercase">
      {data.texts[visibleIndex].desc}
      </p>
    </motion.div>

      </div>
      </div>
     <div className="absolute top-[336px] left-[240px] flex flex-col justify-center items-center">
     <div className="text-white flex flex-col justify-center items-center ">
      <div className="h-[53px] tracking-widest uppercase overflow-hidden ">
    <motion.div
      className="text-transition"
      initial={{ y: "100%" }}
      animate={{ y: shouldAnimateDown ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-5xl font-bold uppercase">
      {data.texts[visibleIndex].text}
      </p>
    </motion.div>

      </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center">
      <div className="h-[53px] tracking-widest uppercase overflow-hidden ">
    <motion.div
      className="text-transition"
      initial={{ y: "100%" }}
      animate={{ y: shouldAnimateDown ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-5xl font-bold uppercase">
      {data.texts[visibleIndex].text2}
      </p>
    </motion.div>
     </div>

      </div>
      </div>
      <div className="sm:absolute hidden -bottom-[20px] w-[20rrem] sm:w-[30rem] h-fit left-4 right-4 hover:bg-black/20 transition-all bg-gradient-to-tr rounded-none from-black/40 to-transparent backdrop-blur-sm px-10 py-14 text-white">
        <h3 className="text-xl font-semibold mb-2 ">
          <div className="inline-block bg-white text-[#346aa3] py-2 px-4 rounded-md text-[17.5px] font-bold tracking-wide transition duration-300">
            <span>The ONLY Hand Wash in SW Washington</span>
          </div>
          <span>Offering Exclusive Benefits:</span>
        </h3>
        <h3 className="text-4xl font-semibold mb-4 ">
          <span className="text-xl font-normal">
            <ul style={{ listStyleType: "disc", marginLeft: "1.5em" }}>
              <li>Spot Free rinse and teflon wax</li>
              <li>Safest Wash in Town</li>
              <li>Free Vacuums with Wash</li>
              <li>2 Miles from I-5 Longview exit</li>
              <li>We Use Lambs Wool Mittens</li>
              <li>No brushes no machinery OR: Five DIY Self Service Bays</li>
            </ul>
          </span>
        </h3>
        <div>
          <Link
            className="inline-block bg-[#346aa3] hover:bg-[#afc34d] hover:text-black text-white py-2 px-4 rounded-md font-semibold uppercase tracking-wide transition duration-300"
            href="sdsdf"
          >
            Learn more
          </Link>
        </div>
      </div>
      <main className="mx-5">
        <div className="my-4">
          <Cleaning />
        </div>
        <Contact />
        <Pricing />
        <WhatWeDo />
        <FAQ />
       
      </main>
    </>
  );
};
export default Home;
