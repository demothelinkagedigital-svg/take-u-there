import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tut-preloaded") === "1") {
      setDone(true);
      setHidden(true);
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => {
          setHidden(true);
          sessionStorage.setItem("tut-preloaded", "1");
        }, 1100);
        return;
      }
      setProgress(p);
    }, 140);
    return () => clearInterval(id);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-[140px] animate-glow-pulse" />
        <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-success/10 blur-[140px] animate-glow-pulse" />
      </div>

      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-2xl animate-glow-pulse" />
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl glass-strong flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Take U There Service"
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain animate-float-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-white/10 to-primary/0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Take U There
          </div>
          <div className="mt-1 font-display text-2xl text-gradient-luxe">Service LLC</div>
        </div>

        <div className="w-64 sm:w-80">
          <div className="h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary to-success transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Loading Experience</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
