import { useEffect, useRef, useState } from 'react';
import {
  Users,
  Clock,
  AlertTriangle,
  Radio,
} from 'react-feather';

import Layout from '$/layout/Layout';
import Seo from '$/Seo';

/* =====================================================
   COUNT-UP STAT COMPONENT
===================================================== */
function CountUpStat({
  value,
  label,
  Icon,
  suffix = '',
  duration = 1500,
}: {
  value: number;
  label: string;
  Icon: React.ElementType;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-white"
    >
      {/* ICON */}
      <div className="mb-3 text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]">
        <Icon size={36} strokeWidth={2} />
      </div>

      {/* NUMBER */}
      <span className="text-4xl font-bold tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </span>

      {/* LABEL */}
      <span className="mt-1 text-xs uppercase tracking-widest opacity-80">
        {label}
      </span>
    </div>
  );
}

/* =====================================================
   STATS SECTION
===================================================== */
function VolunteerStats() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          <CountUpStat
            value={40}
            label="Volunteers"
            Icon={Users}
          />
          <CountUpStat
            value={6500}
            label="Volunteer Hours"
            Icon={Clock}
          />
          <CountUpStat
            value={35}
            label="Call Outs"
            Icon={AlertTriangle}
          />
          <CountUpStat
            value={1200}
            label="km sq. coverage area"
            Icon={Radio}
          />
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PAGE
===================================================== */
export default function VolunteerPage() {
  return (
    <Layout transparentHeader={false}>
      <Seo templateTitle="Volunteer" />
      <main>
        {/* Your volunteer page content goes here */}

        {/* Animated stats above footer */}
        <VolunteerStats />
      </main>
    </Layout>
  );
}
