import Image from "next/image";

import { motion } from "framer-motion";

import PersonProfileItem from "@/components/PersonProfileItem";

const persons = [
  {
    name: "Jake Richards",
    position: "Chief Architect",
    image: "avatar-jake.jpg",
  },
  {
    name: "Thompson Smith",
    position: "Head of Finance",
    image: "avatar-thompson.jpg",
  },
  {
    name: "Jackson Rourke",
    position: "Lead Designer",
    image: "avatar-jackson.jpg",
  },
  {
    name: "Maria Simpson",
    position: "Senior Architect",
    image: "avatar-maria.jpg",
  },
];

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

const heritageBorderVariants = {
  hidden: { width: 0 },
  visible: { width: "64px", transition: { duration: 0.5 } },
};

const heritageHeadingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const heritageParaVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const heritageImageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const peopleContainerVariants = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.5, type: "tween" },
  },
};

const PersonItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function About() {
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
              src="/assets/about/mobile/image-hero.jpg"
              width="375"
              height="240"
              loading="eager"
              layout="responsive"
            />
          </div>

          <div className="hidden md:block xl:hidden">
            <Image
              src="/assets/about/tablet/image-hero.jpg"
              width="573"
              height="720"
              loading="eager"
              layout="responsive"
            />
          </div>

          <div className="hidden xl:block">
            <Image
              src="/assets/about/desktop/image-hero.jpg"
              width="637"
              height="720"
              loading="eager"
              layout="fixed"
            />
          </div>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full md:h-full xl:w-[637px] xl:h-[720px] bg-black opacity-40"></div>
        </div>

        <div className="px-8 pt-[72px] w-11/12 relative -mt-12 bg-white md:absolute md:-bottom-1 md:-right-1 md:pl-[59px] md:w-[572px] xl:w-auto xl:relative self-end xl:right-40 xl:bottom-0">
          <motion.h1
            variants={largeHeadingVariant}
            className="grey-large-heading hidden md:block mb-0 capitalize z-10 absolute -top-24 right-2 xl:-left-5 xl:-top-28"
          >
            about
          </motion.h1>
          <div className="">
            <span className="border-t-2 border-very-light-grey h-2 w-16 md:block mb-16 md:mt-8 xl:mt-20"></span>
            <div className="space-y-4 md:space-y-12">
              <motion.h2 variants={headingVariant}>
                Your team of professionals
              </motion.h2>
              <motion.p variants={paragraphVariant}>
                Our small team of world-class professionals will work with you
                every step of the way. Strong relationships are at the core of
                everything we do. This extends to the relationship our projects
                have with their surroundings.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Heritage */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="container mb-[72px] md:mb-[200px] xl:flex xl:space-x-[124px]"
      >
        <div>
          <motion.span
            variants={heritageBorderVariants}
            className="border-t-2 border-very-light-grey h-2 w-16 block mb-16"
          ></motion.span>
          <div className="space-y-7 xl:space-y-10">
            <motion.h2
              variants={heritageHeadingVariants}
              className="capitalize"
            >
              our <br /> heritage
            </motion.h2>
            <motion.div variants={heritageParaVariants} className="space-y-4">
              <p>
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country.
              </p>
              <p>
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs.
              </p>
              <p>
                Our small team of world-class professionals provides input on
                every project.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          variants={heritageImageVariants}
          className="hidden xl:block"
        >
          <Image
            src="/assets/about/desktop/image-heritage.jpg"
            width="540"
            height="568"
            layout="fixed"
          />
        </motion.div>
      </motion.div>

      {/* Leaders */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={peopleContainerVariants}
        className="container xl:flex xl:space-x-[124px]"
      >
        <motion.h2
          variants={heritageHeadingVariants}
          className="capitalize mb-16"
        >
          the <br /> leaders
        </motion.h2>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-16 xl:gap-x-6">
          {persons.map((person) => (
            <motion.div variants={PersonItemVariants} key={person.name}>
              <PersonProfileItem
                name={person.name}
                position={person.position}
                image={`/assets/about/desktop/${person.image}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
