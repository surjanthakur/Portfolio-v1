import "./infinite.css";
import { motion } from "motion/react";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Framer Motion",
  "Bun",
  "MongoDB",
  "PostgreSQL",
  "VectorDB",
  "Python",
  "FastAPI",
  "Docker",
  "RAG",
  "LangGraph",
];

/* -----------------------------
   Motion Variants
----------------------------- */

const trackReveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.08,
    y: -6,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function InfiniteScroll() {
  return (
    <section className="infinite-container" aria-label="Tech stack">
      <motion.div
        className="infinite-track"
        variants={trackReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }} // scroll-trigger
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={index}
            className="card tech-btn"
            variants={cardHover}
            initial="rest"
            whileHover="hover"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
