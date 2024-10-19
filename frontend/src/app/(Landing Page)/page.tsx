import Cta from "@/components/LandingPage/Cta";
import Faqs from "@/components/LandingPage/Faqs";
import Features from "@/components/LandingPage/Features";
import Gradients from "@/components/LandingPage/Gradients";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import Pricing from "@/components/LandingPage/Pricing";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Gradients />
      <Features />
      <Pricing />
      <Faqs />
      <Cta />
      <Footer />
    </section>
  );
}
