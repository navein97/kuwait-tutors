import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Majors from "@/components/Majors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Majors />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
