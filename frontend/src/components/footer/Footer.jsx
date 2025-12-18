import { motion } from "motion/react";

const footerReveal = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function Footer() {
  return (
    <footer className="w-full">
      <motion.div
        className="mx-auto max-w-5xl! px-4! py-10! sm:px-6! sm:py-14!"
        variants={footerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-3 text-center text-xs sm:text-sm! text-zinc-500"
          whileHover={{
            y: -2,
            transition: { duration: 0.25, ease: "easeOut" },
          }}
        >
          <p className="font-medium leading-relaxed">
            Design & developed by{" "}
            <motion.span
              className="font-semibold text-zinc-100"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              Surjan
            </motion.span>
          </p>

          <p className="flex items-center gap-1 sm:gap-2">
            <span className="text-zinc-600">©</span>
            <span>2025 — all rights reserved</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
