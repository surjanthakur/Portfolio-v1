import { GitHubCalendar } from "react-github-calendar";
import { motion } from "motion/react";

/* -----------------------------
   Motion Variants
----------------------------- */

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 26,
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

export default function StreakStatus() {
  return (
    <section className="w-full mt-8! sm:mt-10! flex justify-center px-4!">
      <motion.div
        className="relative w-full max-w-fit overflow-x-auto rounded-2xl bg-zinc-900/60 border border-zinc-800 p-4! sm:p-6!"
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }} // scroll-trigger
        whileHover={{
          scale: 1.02,
          y: -4,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <h3 className="mb-3! sm:mb-4! text-center text-xs! sm:text-sm! uppercase tracking-widest text-zinc-400">
          GitHub Activity
        </h3>

        <div className="flex justify-center">
          <GitHubCalendar
            username="surjanthakur"
            blockSize={8}
            blockMargin={3}
            fontSize={14}
            colorScheme="dark"
            hideColorLegend
          />
        </div>
      </motion.div>
    </section>
  );
}
