import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignalFeed from "@/components/SignalFeed";
import ContentGrid from "@/components/ContentGrid";
import RecentSignals from "@/components/RecentSignals";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="current" className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <TopBar />
        <Navigation />
        <Hero />
        <SignalFeed />
        <section id="archive">
          <ContentGrid />
        </section>
        <section id="releases">
          <RecentSignals />
        </section>
        <section id="objects">
          <CategoryGrid />
        </section>
        <section id="process" aria-hidden="true" />
        <section id="collaborators" aria-hidden="true" />
        <section id="index">
          <Footer />
        </section>
      </div>
    </main>
  );
}
