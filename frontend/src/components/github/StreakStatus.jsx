import { GitHubCalendar } from "react-github-calendar";

export default function StreakStatus() {
  return (
    <section className="w-full mt-8! sm:mt-10! flex justify-center px-4!">
      <div className="relative w-full max-w-fit overflow-x-auto rounded-2xl bg-zinc-900/60 border border-zinc-800 p-4! sm:p-6!">
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
      </div>
    </section>
  );
}
