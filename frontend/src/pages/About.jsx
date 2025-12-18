import "./about.css";
import {
  react,
  js,
  db,
  fastapi,
  python,
  bun,
  tailwind,
  blueProfile,
} from "../../images/imgExport";

import { motion } from "motion/react";

//  Animation Variants ------------------------>
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // scroll-trigger
      >
        {/* IMAGE */}
        <motion.div
          className="image-section"
          variants={imageReveal}
          whileHover={{
            scale: 1.03,
            rotate: 0.4,
            transition: {
              duration: 0.35,
              ease: "easeOut",
            },
          }}
        >
          <motion.img
            src={blueProfile}
            alt="profile"
            draggable={false}
            whileHover={{
              scale: 1.06,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </motion.div>

        {/* DETAILS */}
        <motion.div className="details" variants={container}>
          <motion.span className="about-label" variants={fadeUp}>
            About
          </motion.span>

          <motion.h2 className="about-title" variants={fadeUp}>
            Me
          </motion.h2>

          <motion.h1 className="name" variants={fadeUp}>
            <span className="text-gray-400">👋🏻 hy i'm </span>
            Surjan Thakur
          </motion.h1>

          <motion.p className="description" variants={fadeUp}>
            I'm a Full Stack web developer and Open Source Contributor. I enjoy
            building products that solve real-world problems and specialize in
            crafting MVPs that ship fast and scale clean.
          </motion.p>

          {/* SKILLS */}
          <motion.div className="skills" variants={fadeUp}>
            <h3>Skills</h3>

            <motion.div
              className="skills-icons"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { img: react, name: "React" },
                { img: fastapi, name: "FastAPI" },
                { img: db, name: "PostgreSql" },
                { img: bun, name: "Bun" },
                { img: js, name: "JavaScript" },
                { img: python, name: "Python" },
                { img: tailwind, name: "Tailwind" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="icon-content"
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <img src={skill.img} alt={skill.name} />
                  <div className="tooltip">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
