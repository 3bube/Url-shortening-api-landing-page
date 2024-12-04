import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/statistics";
import Shortener from "./components/url-shortener";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <Header />
      <Hero />
      <Shortener />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
}
