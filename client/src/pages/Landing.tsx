import { motion } from "framer-motion";

const floatingPaws = [
  { left: "8%", top: "20%", delay: 0, size: "text-3xl", rotate: -18 },
  { left: "16%", top: "78%", delay: 1.1, size: "text-2xl", rotate: 20 },
  { left: "78%", top: "15%", delay: 0.6, size: "text-2xl", rotate: 12 },
  { left: "88%", top: "74%", delay: 1.6, size: "text-3xl", rotate: -10 },
  { left: "48%", top: "9%", delay: 2.1, size: "text-xl", rotate: 14 },
];

const whiskers = [
  "top-25 left-8 -rotate-8",
  "top-31 left-7 rotate-2",
  "top-25 right-8 rotate-8",
  "top-31 right-7 -rotate-2",
];

function TurkishAngoraCat() {
  return (
    <motion.div
      className="relative mx-auto h-86 w-86 sm:h-[28rem] sm:w-[28rem]"
      initial={{ opacity: 0, scale: 0.86, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.15 }}
      aria-label="Animated white Turkish Angora cat playing with yarn"
      role="img"
    >
      <motion.div
        className="absolute left-11 top-4 rounded-full bg-white/85 px-4 py-2 text-sm font-black text-rose-500 shadow-lg ring-1 ring-white"
        animate={{ y: [0, -10, 0], rotate: [-6, 4, -6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        purr...
      </motion.div>

      <motion.div
        className="absolute right-13 top-16 rounded-full bg-white/85 px-4 py-2 text-sm font-black text-violet-500 shadow-lg ring-1 ring-white"
        animate={{ y: [0, -8, 0], rotate: [5, -5, 5] }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        meow!
      </motion.div>

      <motion.div
        className="absolute bottom-13 left-7 h-19 w-19 rounded-full bg-gradient-to-br from-rose-300 via-pink-400 to-violet-400 shadow-xl shadow-pink-300/40"
        animate={{ x: [0, 16, -6, 0], rotate: [0, 40, -18, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute left-2 top-8 h-1 w-15 rounded-full bg-white/55 rotate-12" />
        <span className="absolute left-4 top-5 h-1 w-12 rounded-full bg-white/45 -rotate-35" />
        <span className="absolute left-5 top-12 h-1 w-10 rounded-full bg-white/50 rotate-42" />
      </motion.div>

      <motion.div
        className="absolute bottom-21 left-22 h-1 w-30 origin-left rounded-full bg-pink-300"
        animate={{ scaleX: [0.86, 1.08, 0.92], rotate: [8, -8, 8] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-18 h-66 w-58 -translate-x-1/2 rounded-[48%_48%_42%_42%] bg-white shadow-[0_28px_70px_rgba(124,58,237,0.18)] ring-1 ring-violet-100"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute -left-7 top-6 h-26 w-24 -rotate-28 rounded-[70%_30%_55%_45%] bg-white shadow-lg ring-1 ring-violet-100"
          animate={{ rotate: [-28, -22, -28] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute -left-2 top-10 h-14 w-12 -rotate-25 rounded-[70%_30%_55%_45%] bg-rose-100/80" />
        <motion.div
          className="absolute -right-7 top-6 h-26 w-24 rotate-28 rounded-[30%_70%_45%_55%] bg-white shadow-lg ring-1 ring-violet-100"
          animate={{ rotate: [28, 20, 28] }}
          transition={{
            duration: 3.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <div className="absolute -right-2 top-10 h-14 w-12 rotate-25 rounded-[30%_70%_45%_55%] bg-rose-100/80" />

        <div className="absolute left-9 top-25 h-9 w-10 rounded-full bg-emerald-300 shadow-inner">
          <motion.div
            className="absolute left-1/2 top-1/2 h-7 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900"
            animate={{ scaleY: [1, 0.12, 1] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.08, 0.16],
            }}
          />
          <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white" />
        </div>
        <div className="absolute right-9 top-25 h-9 w-10 rounded-full bg-sky-300 shadow-inner">
          <motion.div
            className="absolute left-1/2 top-1/2 h-7 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900"
            animate={{ scaleY: [1, 0.12, 1] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.08, 0.16],
            }}
          />
          <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white" />
        </div>

        <motion.div
          className="absolute left-1/2 top-40 h-4 w-5 -translate-x-1/2 rounded-[50%_50%_60%_60%] bg-rose-300"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-44 h-8 w-px -translate-x-1/2 bg-slate-300" />
        <div className="absolute left-[45%] top-50 h-6 w-8 rounded-b-full border-b-2 border-slate-300" />
        <div className="absolute right-[45%] top-50 h-6 w-8 rounded-b-full border-b-2 border-slate-300" />

        {whiskers.map(classes => (
          <span
            key={classes}
            className={`absolute h-0.5 w-19 rounded-full bg-slate-300 ${classes}`}
          />
        ))}

        <motion.div
          className="absolute left-5 top-48 h-8 w-7 rounded-full bg-rose-100"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-5 top-48 h-8 w-7 rounded-full bg-rose-100"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-29 h-22 w-15 rounded-full bg-white shadow-xl ring-1 ring-violet-100"
        animate={{ rotate: [-12, 16, -12], y: [0, -14, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-rose-200" />
        <div className="absolute bottom-4 left-7 h-2 w-2 rounded-full bg-rose-200" />
        <div className="absolute bottom-8 left-5 h-5 w-6 rounded-full bg-rose-200" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-24 h-22 w-15 rounded-full bg-white shadow-xl ring-1 ring-violet-100"
        animate={{ rotate: [5, -4, 5], y: [0, -3, 0] }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-rose-200" />
        <div className="absolute bottom-4 left-7 h-2 w-2 rounded-full bg-rose-200" />
        <div className="absolute bottom-8 left-5 h-5 w-6 rounded-full bg-rose-200" />
      </motion.div>

      <motion.div
        className="absolute -right-1 top-39 h-35 w-31 rounded-[50%] border-[18px] border-white border-b-transparent border-l-transparent shadow-[14px_-10px_25px_rgba(255,255,255,0.9)]"
        animate={{ rotate: [4, 18, 4], x: [0, 5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function Landing() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fff7ad_0,#ffd6ec_28%,#e9e7ff_58%,#f8fafc_100%)] px-6 py-10 text-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.38)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-rose-300/35 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />

      {floatingPaws.map(paw => (
        <motion.span
          key={`${paw.left}-${paw.top}`}
          className={`pointer-events-none absolute ${paw.size}`}
          style={{ left: paw.left, top: paw.top }}
          initial={{ opacity: 0, y: 22, rotate: paw.rotate }}
          animate={{
            opacity: [0.16, 0.56, 0.16],
            y: [0, -18, 0],
            rotate: [paw.rotate, paw.rotate + 8, paw.rotate],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: paw.delay,
          }}
        >
          🐾
        </motion.span>
      ))}

      <section className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <motion.p
          className="mb-4 rounded-full border border-white/70 bg-white/65 px-5 py-2 text-sm font-black uppercase tracking-[0.34em] text-violet-500 shadow-sm backdrop-blur"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          tiny paws at work
        </motion.p>

        <motion.h1
          className="font-serif text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
        >
          Launching soon
        </motion.h1>

        <motion.div
          className="relative mt-8 w-full max-w-2xl rounded-[3rem] border border-white/75 bg-white/42 p-4 shadow-2xl shadow-violet-200/50 backdrop-blur md:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
        >
          <motion.div
            className="absolute inset-x-16 bottom-5 h-24 rounded-[100%] bg-violet-300/35 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <TurkishAngoraCat />
        </motion.div>
      </section>
    </main>
  );
}
