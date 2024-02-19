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
  texts: { text: string; desc: string; button: string }[];
};
const Home: React.FC = () => {
  const [data, setData] = useState<Data>({
    texts: [
      { text: "Text 1", desc: "Description 1", button: "Button 1" },
      { text: "Text 2", desc: "Description 2", button: "Button 2" },
      { text: "Text 3", desc: "Description 3", button: "Button 3" },
      { text: "Text 4", desc: "Description 4", button: "Button 4" },
      { text: "Text 5", desc: "Description 5", button: "Button 5" },
    ],
  });

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    // Automatically change text every 3 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % data.texts.length);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [data.texts.length]);
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

      <div className="text-black top-[390px] flex flex-col justify-center items-center left-[600px]">
        <div className="h-[40px] tracking-widest uppercase overflow-hidden ">
          <motion.p
            key={visibleIndex}
            className="text-transition"
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            exit={{ y: "0%" }}
            transition={{ type: "tween", duration: 1.0 }}
          >
            <p className="text-xl font-normal">
              {data.texts[visibleIndex].desc}
            </p>
          </motion.p>
        </div>

        <div className="h-[50px] overflow-hidden">
          <motion.p
            key={visibleIndex}
            className="text-transition"
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 1.0 }}
          >
            <p className="text-6xl font-bold">
              {data.texts[visibleIndex].text}
            </p>
          </motion.p>
        </div>
        {/* <div className="h-[44px] mt-6 tracking-widest uppercase overflow-hidden"> */}
        <motion.button
          key={visibleIndex}
          className="text-transition"
          initial={{ y: "100%" }}
          animate={{ y: "0", transition: { delay: 1.0, ease: "easeInOut" } }}
          exit={{ y: "100%", transition: { delay: 2.0, ease: "easeInOut" } }}
          transition={{ type: "tween", duration: 1.0 }}
        >
          <p className="border-2 rounded-xl border-white bg-transparent px-6 py-2">
            {data.texts[visibleIndex].button}
          </p>
        </motion.button>
        {/* </div> */}
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
