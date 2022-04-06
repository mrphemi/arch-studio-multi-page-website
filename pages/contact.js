import Image from "next/image";

import { motion } from "framer-motion";

import ContactForm from "@/components/ContactForm";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.3, type: "tween" },
  },
};

const largeHeadingVariant = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.4 } },
};

const headingVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.3 } },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const detailsBorderVariants = {
  hidden: { width: 0 },
  visible: { width: "64px", transition: { duration: 0.5 } },
};

const detailsHeadingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const adressVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function contact() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="md:container relative mb-[72px] md:mb-[200px] xl:flex"
      >
        {/* Image */}
        <div className="relative">
          <div className="md:hidden">
            <Image
              src="/assets/contact/mobile/image-hero.jpg"
              width="375"
              height="240"
              loading="eager"
              layout="responsive"
            />
          </div>

          <div className="hidden md:block xl:hidden">
            <Image
              src="/assets/contact/tablet/image-hero.jpg"
              width="573"
              height="720"
              loading="eager"
              layout="responsive"
            />
          </div>

          <div className="hidden xl:block">
            <Image
              src="/assets/contact/desktop/image-hero.jpg"
              width="637"
              height="720"
              loading="eager"
              layout="fixed"
            />
          </div>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full md:h-full xl:w-[637px] xl:h-[720px] bg-black opacity-40"></div>
        </div>

        <div className="px-8 md:pr-0 xl:pl-24 pt-[72px] w-11/12 relative -mt-12 bg-white md:absolute md:-bottom-1 md:-right-1 md:pl-[59px] md:w-[572px] xl:w-auto xl:relative self-end xl:right-40 xl:bottom-0">
          <motion.h1
            variants={largeHeadingVariant}
            className="grey-large-heading hidden md:block mb-0 capitalize z-10 absolute -top-24 right-2 xl:-left-40 xl:-top-28"
          >
            contact
          </motion.h1>
          <div>
            <span className="border-t-2 border-very-light-grey h-2 w-16 md:block mb-16 md:mt-8 xl:mt-20"></span>
            <div className="space-y-4 md:space-y-12">
              <motion.h2 variants={headingVariant}>
                Tell us about your project{" "}
              </motion.h2>
              <motion.p variants={paragraphVariant}>
                We&apos;d love to hear more about your project. Please, leave a
                message below or give us a call. We have two offices, one in
                Texas and one in Tennessee. If you find yourself nearby, come
                say hello!
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="container mb-[72px] md:mb-[200px] xl:flex xl:space-x-[124px]"
      >
        <div>
          <motion.span
            variants={detailsBorderVariants}
            className="border-t-2 border-very-light-grey h-2 w-16 block mb-16"
          ></motion.span>
          <div className="space-y-7 md:space-y-12 xl:space-y-0 xl:flex">
            <motion.h2
              variants={detailsHeadingVariants}
              className="capitalize xl:w-1/5"
            >
              contact details
            </motion.h2>
            <motion.div
              variants={adressVariants}
              className="space-y-10 xl:space-y-0 xl:flex xl:w-4/5 justify-end xl:space-x-16"
            >
              <div className="space-y-4 md:flex justify-between md:space-y-0 xl:block xl:space-y-8">
                <div className="space-y-4">
                  <h6 className="font-bold capitalize">main office</h6>
                  <div>
                    <p>Mail : archone@mail.com</p>
                    <p>Address : 1892 Chenoweth Drive TN</p>
                    <p> Phone : 123-456-3451</p>
                  </div>
                </div>
                <ViewOnMapBtn />
              </div>
              <div className="space-y-4 md:flex justify-between md:space-y-0 xl:block xl:space-y-8">
                <div className="space-y-4">
                  <h6 className="font-bold capitalize">office II</h6>
                  <div>
                    <p>Mail : archone@mail.com</p>
                    <p>Address : 3399 Wines Lane TX </p>
                    <p>Phone : 832-123-4321</p>
                  </div>
                </div>
                <ViewOnMapBtn />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Map */}
      <div className="md:container">
        <div className="md:hidden">
          <Image
            src="/assets/contact/mobile/image-map.png"
            width="375"
            height="367"
            layout="responsive"
          />
        </div>
        <div className="hidden md:block xl:hidden">
          <Image
            src="/assets/contact/tablet/image-map.png"
            width="572"
            height="560"
            layout="responsive"
          />
        </div>
        <div className="hidden xl:block">
          <Image
            src="/assets/contact/desktop/image-map.png"
            width="1110"
            height="560"
            layout="responsive"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 md:mt-40 container">
        <motion.h2
          variants={detailsHeadingVariants}
          className="capitalize mb-12"
        >
          connect with us
        </motion.h2>

        <ContactForm />
      </div>
    </>
  );
}

const ViewOnMapBtn = () => (
  <button className="border-none outline-none bg-none inline-flex space-x-6 md:self-end md:pb-4">
    <span className="text-very-dark-blue">View on Map</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="20"
      className="text-very-dark-blue self-center md:self-auto"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth="2"
        className="stroke-current"
      >
        <path d="M15 1l9 9-9 9M0 10h24" />
      </g>
    </svg>
  </button>
);
