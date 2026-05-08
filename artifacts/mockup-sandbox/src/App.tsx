import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "./.generated/mockup-components";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

const features = [
  {
    code: "MS://ARCHIVE",
    title: "Archive",
    text: "Image memory, source material, field notes, fragments, and studies held as evidence.",
  },
  {
    code: "MS://OBJECT",
    title: "Object",
    text: "Books, garments, printed matter, and physical releases built from the system.",
  },
  {
    code: "MS://SIGNAL",
    title: "Signal",
    text: "Editorial transmissions, visual language, coordinates, and public-facing releases.",
  },
];

const editionCards = [
  "MS-001 / PRONOUNCED LOVE",
  "ROOM-07 / SIGNAL-4489",
  "IMAGE-19 / STUDY INDEX",
];

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function Homepage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f4f1ea] selection:bg-[#f4f1ea] selection:text-black">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-white/70 md:px-8">
          <a href="#top" className="text-white">Muted Science</a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#archive" className="hover:text-white">Archive</a>
            <a href="#system" className="hover:text-white">System</a>
            <a href="#release" className="hover:text-white">Release</a>
          </nav>
          <a href="mailto:mutedscience@icloud.com" className="hover:text-white">Contact</a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-end overflow-hidden border-b border-white/10 px-5 pb-8 pt-28 md:px-8 md:pb-12">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-[8%] top-[18%] h-[42vw] max-h-[620px] w-[42vw] max-w-[620px] rounded-full border border-white/10 bg-white/[0.03] blur-2xl" />
          <div className="absolute right-[6%] top-[16%] h-[52vw] max-h-[760px] w-[32vw] max-w-[480px] border border-white/10 bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-transparent" />
          <div className="absolute bottom-[10%] left-0 right-0 h-px bg-white/20" />
          <div className="absolute bottom-[18%] left-0 right-0 h-px bg-white/10" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-white/45">
              MS://ROOM-07/SIGNAL-4489/IMAGE-19
            </p>
            <h1 className="max-w-5xl text-[17vw] font-normal uppercase leading-[0.82] tracking-[-0.08em] md:text-[9.8vw]">
              Muted<br />Science
            </h1>
          </div>

          <div className="max-w-xl border-l border-white/15 pl-5 md:ml-auto">
            <p className="mb-8 text-xl leading-snug text-white/78 md:text-2xl">
              A creative system operating between image, object, garment, and signal.
            </p>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 text-[11px] uppercase tracking-[0.22em] text-white/60">
              <div className="bg-[#050505] p-4">Archive</div>
              <div className="bg-[#050505] p-4">Fashion</div>
              <div className="bg-[#050505] p-4">Publication</div>
              <div className="bg-[#050505] p-4">Transmission</div>
            </div>
          </div>
        </div>
      </section>

      <section id="archive" className="border-b border-white/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40">01 / Editorial Index</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-5xl uppercase leading-none tracking-[-0.06em] md:text-8xl">
              Image-led studies for a colder archive.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/58">
              Muted Science is built as an imprint, archive, and operating system for projects that move through photography, text, clothing, objects, books, and coded coordinates.
            </p>
          </div>
        </div>
      </section>

      <section id="system" className="grid border-b border-white/10 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.code} className="min-h-[360px] border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-8">
            <p className="mb-16 font-mono text-[11px] uppercase tracking-[0.28em] text-white/35">{feature.code}</p>
            <h3 className="mb-5 text-3xl uppercase tracking-[-0.04em]">{feature.title}</h3>
            <p className="max-w-sm leading-7 text-white/55">{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="release" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-white/40">02 / Current Transmission</p>
              <h2 className="text-4xl uppercase tracking-[-0.05em] md:text-7xl">Release Index</h2>
            </div>
            <a
              href="mailto:mutedscience@icloud.com?subject=Muted%20Science%20Release%20Request"
              className="w-fit border border-white/20 px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-white/75 hover:border-white/60 hover:text-white"
            >
              Request access
            </a>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {editionCards.map((card, index) => (
              <article key={card} className="group bg-[#050505] p-5 md:p-8">
                <div className="mb-32 aspect-[4/5] border border-white/10 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.08))] transition duration-500 group-hover:opacity-80" />
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/38">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl uppercase tracking-[-0.03em] text-white/80">{card}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/35 md:flex-row">
          <p>Muted Science / Image Object Garment Signal</p>
          <p>MS://PUBLIC-SHELL/V1</p>
        </div>
      </footer>
    </main>
  );
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <Homepage />;
}

export default App;
