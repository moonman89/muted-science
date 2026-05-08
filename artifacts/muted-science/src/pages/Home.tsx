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
    <main className="min-h-[100dvh] bg-black text-white w-full overflow-x-hidden selection:bg-white selection:text-black">
      <div className="max-w-screen-3xl mx-auto border-x border-white/20">
        <TopBar />
        <Navigation />
        <Hero />
        <SignalFeed />
        <ContentGrid />
        <RecentSignals />
        <CategoryGrid />
        <Footer />
      </div>
    </main>
  );
}
