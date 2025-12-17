import { GitHubCalendar } from "react-github-calendar";

export default function StreakStatus() {
  return (
    <section className="w-full mt-10! flex justify-center">
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-[0_0_40px_-10px_rgba(34,197,94,0.25)] backdrop-blur">
        <h3 className="mb-4! text-center text-sm uppercase tracking-widest text-zinc-400">
          GitHub Activity
        </h3>
        <GitHubCalendar
          username="surjanthakur"
          blockSize={10}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
          hideColorLegend
        />
      </div>
    </section>
  );
}
