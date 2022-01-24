import Image from "next/image";

import { motion } from "framer-motion";

import Slider from "@/components/Slider";
import Button from "@/components/Button";
import PortfolioItem from "@/components/PortfolioItem";

const welcomeHeadingVariant = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const headingVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: "anticipate",
      type: "tween",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.7, duration: 0.3, type: "tween" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.9, duration: 0.3, type: "tween" },
  },
};

const aboutVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const aboutHeadingVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const aboutButtonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const featuredVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.4,
    },
  },
};

const featuredImageContainerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <>
      {/* Slider */}
      <div className="relative md:container">
        <Slider />
      </div>

      {/* Welcome */}
      <div className="container pt-[72px] pb-24 md:pt-[74px] md:pb-[200px] xl:pt-24">
        <span className="border-t-2 border-very-light-grey h-2 w-16 block mb-16 md:hidden"></span>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={welcomeHeadingVariant}
          viewport={{ once: true, amount: 0.8 }}
          className="grey-large-heading hidden md:block mb-0 capitalize z-10 relative"
        >
          welcome
        </motion.h1>

        <div className="flex xl:w-5/6 ml-auto -mt-4">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ amount: "all", once: true }}
              className="capitalize mb-7 md:mb-14 md:w-4/5"
            >
              welcome to arch studio
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={paragraphVariants}
              viewport={{ once: true }}
              className="space-y-8 xl:w-5/6"
            >
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            className="hidden xl:block self-start -mt-20"
          >
            <Image
              src="/assets/home/desktop/image-welcome.jpg"
              width="350"
              height="568"
              layout="fixed"
              loading="eager"
              alt="welcome image"
            />
          </motion.div>
        </div>
      </div>

      {/* About */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={aboutVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="md:container relative"
      >
        <div className="md:hidden">
          <Image
            src="/assets/home/mobile/image-small-team.jpg"
            width="375"
            height="560"
            layout="responsive"
            alt="Small team"
            loading="eager"
          />
        </div>

        <div className="hidden md:block xl:hidden">
          <Image
            src="/assets/home/tablet/image-small-team.jpg"
            width="573"
            height="560"
            layout="responsive"
            alt="Small team"
            loading="eager"
          />
        </div>

        <div className="hidden xl:block">
          <Image
            src="/assets/home/desktop/image-small-team.jpg"
            width="1110"
            height="560"
            layout="responsive"
            alt="Small team"
            loading="eager"
          />
        </div>

        <div className="absolute top-0 left-0 bg-black opacity-25 h-full w-full"></div>
        <div className="absolute top-0 left-0 z-10 h-full flex flex-col justify-center">
          <div className="container">
            <div className="space-y-8 xl:w-4/5 ml-auto">
              <motion.h2 variants={aboutHeadingVariants} className="text-white">
                Small team, big ideas
              </motion.h2>
              <motion.div variants={aboutButtonVariants}>
                <Button text="about us" link="/about" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={featuredVariants}
        viewport={{ once: true, amount: 0.7 }}
        className="container pt-[72px] md:pt-[200px]"
      >
        <div className="mb-12 md:mb-[85px] md:flex justify-between items-center">
          <h2 className="capitalize">featured</h2>
          <Button text="see all" link="/portfolio" className="hidden md:flex" />
        </div>

        {/* Mobile List */}
        <div>
          <div className="md:hidden grid gap-y-6">
            <PortfolioItem
              img="/assets/portfolio/mobile/image-del-sol.jpg"
              title="project del sol"
              subtitle="view all projects"
              width="311"
              height="240"
            />

            <PortfolioItem
              img="/assets/portfolio/mobile/image-228b.jpg"
              title="228b tower"
              subtitle="view all projects"
              width="311"
              height="240"
            />

            <PortfolioItem
              img="/assets/portfolio/mobile/image-prototype.jpg"
              title="le prototype"
              subtitle="view all projects"
              width="311"
              height="240"
            />

            <Button text="see all" link="/portfolio" />
          </div>
        </div>

        {/* Tablet List */}
        <div>
          <div className="hidden md:grid xl:hidden gap-y-6">
            <PortfolioItem
              img="/assets/portfolio/tablet/image-del-sol.jpg"
              title="project del sol"
              subtitle="view all projects"
              width="573"
              height="240"
              figure={1}
            />

            <PortfolioItem
              img="/assets/portfolio/tablet/image-228b.jpg"
              title="228b tower"
              subtitle="view all projects"
              width="573"
              height="240"
              figure={2}
            />

            <PortfolioItem
              img="/assets/portfolio/tablet/image-prototype.jpg"
              title="le prototype"
              subtitle="view all projects"
              width="573"
              height="240"
              figure={3}
            />
          </div>
        </div>

        {/* Desktop List */}
        <div>
          <div className="hidden xl:grid grid-cols-3 gap-x-[30px]">
            <motion.div variants={featuredImageContainerVariants}>
              <PortfolioItem
                img="/assets/portfolio/desktop/image-del-sol.jpg"
                title="project del sol"
                subtitle="view all projects"
                width="350"
                height="560"
                loading="eager"
                figure={1}
              />
            </motion.div>

            <motion.div variants={featuredImageContainerVariants}>
              <PortfolioItem
                img="/assets/portfolio/desktop/image-228b.jpg"
                title="228b tower"
                subtitle="view all projects"
                width="350"
                height="560"
                loading="eager"
                figure={2}
              />
            </motion.div>

            <motion.div variants={featuredImageContainerVariants}>
              <PortfolioItem
                img="/assets/portfolio/desktop/image-prototype.jpg"
                title="le prototype"
                subtitle="view all projects"
                width="350"
                height="560"
                loading="eager"
                figure={3}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
