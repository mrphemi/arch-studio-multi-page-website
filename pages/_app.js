import Head from "next/head";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", duration: 0.5, when: "beforeChildren" },
  },
  exit: {
    backgroundColor: "white",
    opacity: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />

        <script
          defer
          src="https://unpkg.com/swiper@7/swiper-bundle.min.js"
        ></script>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Nav />
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
          key={router.route}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
