import React, { useState } from "react";
import faq from "../../assets/faq.svg";
import arrow from "../../assets/arrow.svg";
import { data } from "./data";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

const Faq = () => {
  const [toggleFaq, setToggleFaq] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const handleFaq = (e) => {
    const temp = [false, false, false, false, false, false, false];
    if (toggleFaq[e] !== true) temp[e] = true;
    setToggleFaq(temp);
  };
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,

          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className="mb-10 w-fit mx-auto"
      >
        <h1 className="font-pricedown text-white text-7xl items-center">FAQ</h1>
      </motion.div>
      <div>
        {data.map((e) => (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "fit-content",
            }}
            transition={{ duration: 0.4 }}
            onClick={() => handleFaq(data.indexOf(e))}
            key={data.indexOf(e)}
            className={` cursor-pointer sm:w-[80%] w-[95%] mx-auto px-6 py-2 border-2 border-white rounded-lg mb-6 font-instagram text-xl ${
              toggleFaq[data.indexOf(e)] ? "bg-[#9D3E47]" : "bg-transparent"
            } `}
          >
            <motion.div
              initial={{
                opacity: 0,

                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="flex justify-between"
            >
              {" "}
              <h1 className={`text-white`}>{e.question}</h1>
              <IoMdArrowDropdown
                className={`cursor-pointer  hover:text-[#FFFFFF] ${
                  toggleFaq[data.indexOf(e)]
                    ? "text-[#FFFFFF] rotate-180"
                    : "text-[#FFFFFF80] rotate-0"
                }`}
                size={35}
                // onClick={() => handleFaq(data.indexOf(e))}
              />
            </motion.div>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: toggleFaq[data.indexOf(e)] ? 0 : -50,
                opacity: toggleFaq[data.indexOf(e)] ? 1 : 0,
              }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className={`text-white mt-2 ${
                toggleFaq[data.indexOf(e)] ? "block" : "hidden"
              }`}
            >
              {e.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
