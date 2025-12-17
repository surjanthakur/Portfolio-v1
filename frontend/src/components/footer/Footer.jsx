export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto! max-w-5xl px-6! py-14!">
        <div className="flex flex-col items-center gap-3 text-center text-sm! text-zinc-500">
          <p className="font-medium">
            Design & developed by{" "}
            <span className="font-semibold text-zinc-100">Surjan</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="text-zinc-600">©</span>
            <span>2025 — all rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
