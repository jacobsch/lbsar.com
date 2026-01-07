import { useEffect, useRef, useState } from 'react';

type CountUpStatProps = {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
};

/* ============================
   TRIANGLE MARK (orange) + glow
============================ */
function TriangleMark({ glow }: { glow: boolean }) {
  return (
    <span className='relative inline-flex items-center justify-center'>
      {/* glow ring */}
      <span
        className={[
          'absolute inset-[-12px] rounded-full',
          'bg-[#fc6421]',
          'blur-xl transition-opacity duration-700',
          glow ? 'opacity-35' : 'opacity-0',
        ].join(' ')}
        aria-hidden='true'
      />

      {/* triangle */}
      <svg
        width='30'
        height='30'
        viewBox='0 0 24 24'
        aria-hidden='true'
        className={[
          'relative shrink-0',
          'transition-[filter,transform] duration-700',
          glow
            ? 'scale-[1.03] drop-shadow-[0_0_12px_rgba(252,100,33,0.8)]'
            : 'scale-100 drop-shadow-none',
        ].join(' ')}
      >
        <path
          d='M12 3 L22 21 H2 Z'
          fill='none'
          stroke='#fc6421'
          strokeWidth='3'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

/* ============================
   COUNT UP STAT (internal)
============================ */
function CountUpStat({
  value,
  label,
  suffix = '',
  duration = 2500,
}: CountUpStatProps) {
  const [count, setCount] = useState(0);
  const [glow, setGlow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setGlow(true);

          const startTime = performance.now();
          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          window.setTimeout(() => setGlow(false), duration + 350);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className='flex items-center justify-center gap-5'>
      <TriangleMark glow={glow} />

      <div className='flex items-center gap-4'>
        <span
          className={[
            'relative inline-block',
            "font-['Chakra_Petch'] font-extrabold",
            'tabular-nums leading-none text-white',
            'text-[52px] md:text-[60px]',
            '[text-shadow:0_0_0.6px_rgba(255,255,255,0.55)]',
            "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
            'before:opacity-25 before:mix-blend-overlay',
            'before:bg-[repeating-linear-gradient(-20deg,rgba(255,255,255,0.45)_0_1px,rgba(255,255,255,0)_1px_6px)]',
            "after:pointer-events-none after:absolute after:inset-0 after:content-['']",
            'after:opacity-15 after:mix-blend-overlay',
            'after:bg-[radial-gradient(rgba(255,255,255,0.9)_0.5px,transparent_0.6px)] after:[background-size:6px_6px]',
          ].join(' ')}
        >
          {count.toLocaleString()}
          {suffix}
        </span>

        <span className="font-['Chakra_Petch'] text-[15px] font-extrabold uppercase tracking-widest text-[#febd29] md:text-[16px]">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ============================
   VOLUNTEER STATS (exported)
   - Single render (no remount on breakpoints)
   - Mobile: stacked
   - md–lg: grid (Calls spans 2 cols)
   - lg+: single row
============================ */
export function VolunteerStats() {
  return (
    <section className='bg-[#0a111c]'>
      <div className='md:py-18 mx-auto max-w-6xl px-6 py-20'>
        <div
          className={[
            // mobile: stacked
            'flex flex-col items-center gap-10',

            // md–lg: grid
            'md:grid md:grid-cols-2 md:place-items-center md:gap-x-14 md:gap-y-12',

            // lg+: single row
            'lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-14 lg:gap-y-0',
          ].join(' ')}
        >
          <CountUpStat value={6500} label='Hours' />
          <CountUpStat value={40} label='Volunteers' />

          {/* On md grid, make Calls centered across both columns.
              On lg flex, it behaves as a normal item. */}
          <div className='md:col-span-2 lg:col-span-1'>
            <CountUpStat value={35} label='Calls' />
          </div>
        </div>
      </div>
    </section>
  );
}
