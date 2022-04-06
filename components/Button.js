import Link from "next/link";

import { motion } from "framer-motion";

const buttonVariants = {
  rest: { backgroundColor: "#1B1D23" },
  hover: {
    backgroundColor: "#7D828F",
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      type: "tween",
    },
  },
  tap: {
    scale: 0.9,
  },
};

export default function Button({ text = "", link, className }) {
  const sharedStyles =
    "inline-flex justify-center items-center space-x-6 bg-very-dark-blue active:bg-light-grey";
  return (
    <>
      {!link && (
        <button
          className={`${sharedStyles} hover:bg-medium-grey py-6 px-8 ${className}`}
        >
          <span className="capitalize text-white">{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            className="self-center"
          >
            <g fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeWidth="2">
              <path d="M15 1l9 9-9 9M0 10h24" />
            </g>
          </svg>
        </button>
      )}
      {link && (
        <Link href={link}>
          <motion.a
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className={`${sharedStyles} py-6 px-8 cursor-pointer ${className}`}
          >
            <span className="capitalize text-white">{text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              className="self-center"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#FFFFFF"
                strokeWidth="2"
              >
                <path d="M15 1l9 9-9 9M0 10h24" />
              </g>
            </svg>
          </motion.a>
        </Link>
      )}
    </>
  );
}
