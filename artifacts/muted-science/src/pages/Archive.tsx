import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const entries = [
  ["MS-001", "Pronounced Love", "Digital Study / PDF Edition", "Available Now"],
  ["MS-002", "The First Signal", "Garment Study", "In Development"],
  ["MS-003", "Private Armor", "Object / Garment Study", "In Development"],
];

const baseNodes = [
  { id: "MS-001", x: 50, y: 48, size: 7, label: "MS-001" },
  { id: "TRUTH", x: 25, y: 24, size: 4, label: "TRUTH" },
  { id: "REGULATION", x: 73, y: 20, size: 4, label: "REGULATION" },
  { id: "OBJECT", x: 80, y: 60, size: 4, label: "OBJECT" },
  { id: "SIGNAL", x: 33, y: 72, size: 4, label: "SIGNAL" },
  { id: "MS-002", x: 18, y: 54, size: 3, label: "MS-002" },
  { id: "MS-003", x: 68, y: 78, size: 3, label: "MS-003" },
  { id: "ARCHIVE", x: 50, y: 14, size: 3, label: "ARCHIVE" },
];

const graphLinks = [
  ["MS-001", "TRUTH"],
  ["MS-001", "REGULATION"],
  ["MS-001", "OBJECT"],
  ["MS-001", "SIGNAL"],
  ["MS-001", "ARCHIVE"],
  ["TRUTH", "SIGNAL"],
  ["REGULATION", "OBJECT"],
  ["SIGNAL", "MS-002"],
  ["OBJECT", "MS-003"],
  ["MS-003", "MS-001"],
] as const;

type GraphNode = (typeof baseNodes)[number] & { vx: number; vy: number };

function getNode(nodes: GraphNode[], id: string) {
  return nodes.find((node) => node.id === id)!;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useAnimatedGraph() {
  const initialNodes = useMemo<GraphNode[]>(
    () => baseNodes.map((node, index) => ({ ...node, vx: (index % 2 ? 0.01 : -0.01), vy: (index % 3 ? -0.008 : 0.008) })),
    []
  );
  const [nodes, setNodes] = useState(initialNodes);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let frame = 0;
    let raf = 0;

    const tick = () => {
      frame += 1;
      setNodes((current) => {
        const next = current.map((node) => ({ ...node }));

        for (const [from, to] of graphLinks) {
          const a = getNode(next, from);
          const b = getNode(next, to);
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
          const target = from === "MS-001" || to === "MS-001" ? 30 : 24;
          const force = (distance - target) * 0.00055;
          const fx = dx * force;
          const fy = dy * force;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }

        for (let i = 0; i < next.length; i += 1) {
          for (let j = i + 1; j < next.length; j += 1) {
            const a = next[i];
            const b = next[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const distance = Math.max(4, Math.sqrt(dx * dx + dy * dy));
            const force = 0.04 / (distance * distance);
            const fx = dx * force;
            const fy = dy * force;
            a.vx -= fx;
            a.vy -= fy;
            b.vx += fx;
            b.vy += fy;
          }
        }

        return next.map((node, index) => {
          const anchor = baseNodes[index];
          const driftX = Math.sin(frame / 150 + index) * 0.003;
          const driftY = Math.cos(frame / 170 + index * 1.7) * 0.003;
          const pullX = (anchor.x - node.x) * 0.0009;
          const pullY = (anchor.y - node.y) * 0.0009;
          const vx = (node.vx + pullX + driftX) * 0.92;
          const vy = (node.vy + pullY + driftY) * 0.92;

          return {
            ...node,
            vx,
            vy,
            x: Math.min(88, Math.max(12, node.x + vx)),
            y: Math.min(86, Math.max(12, node.y + vy)),
          };
        });
      });

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [initialNodes]);

  return nodes;
}

export default function Archive() {
  const nodes = useAnimatedGraph();

  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">{siteConfig.name}</Link>
            <span className="text-white/45">Archive / Graph</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Cold Index / Graph View</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">Archive</h1>
            <p className="mt-5 max-w-sm text-[10px] uppercase leading-5 tracking-widest text-white/45">
              A mapped index of releases, signals, objects, and internal conditions inside the Muted Science system.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border-white/20 bg-black">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {graphLinks.map(([from, to]) => {
                const a = getNode(nodes, from);
                const b = getNode(nodes, to);
                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="rgba(255,255,255,.25)"
                    strokeWidth="0.18"
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0">
              {nodes.map((node) => (
                <Link
                  key={node.id}
                  href={node.id === "MS-001" ? "/releases/ms-001-pronounced-love" : "/archive"}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 text-[8px] uppercase tracking-widest text-white/45 transition-colors duration-200 hover:z-10 hover:text-white"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span
                    className="mx-auto mb-2 block rounded-full border border-white/45 bg-black shadow-[0_0_18px_rgba(255,255,255,.08)] transition-all duration-200 group-hover:scale-150 group-hover:bg-white group-hover:shadow-[0_0_24px_rgba(255,255,255,.3)]"
                    style={{ width: `${node.size * 2}px`, height: `${node.size * 2}px` }}
                  />
                  <span className="block whitespace-nowrap text-center group-hover:underline underline-offset-4">{node.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/20 text-[10px] uppercase tracking-widest">
          <div className="grid border-b border-white/20 text-white/35 md:grid-cols-[0.18fr_0.34fr_0.3fr_0.18fr]">
            <div className="border-r border-white/20 p-3">Code</div>
            <div className="border-r border-white/20 p-3">Title</div>
            <div className="border-r border-white/20 p-3">Medium</div>
            <div className="p-3">Status</div>
          </div>
          {entries.map(([code, title, medium, status]) => (
            <Link key={code} href={code === "MS-001" ? "/releases/ms-001-pronounced-love" : "/archive"} className="grid border-b border-white/20 last:border-b-0 hover:bg-white hover:text-black md:grid-cols-[0.18fr_0.34fr_0.3fr_0.18fr]">
              <div className="border-b border-white/20 p-3 font-mono md:border-b-0 md:border-r">{code}</div>
              <div className="border-b border-white/20 p-3 md:border-b-0 md:border-r">{title}</div>
              <div className="border-b border-white/20 p-3 text-white/55 md:border-b-0 md:border-r">{medium}</div>
              <div className="p-3 text-white/45">{status}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
