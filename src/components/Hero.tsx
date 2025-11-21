import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "+96594940024";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <GraduationCap className="h-4 w-4" />
            Trusted Academic Support in Kuwait
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your Partner for{" "}
            <span className="text-primary">Academic Excellence</span> in Kuwait
          </h1>
          
          <p className="mb-4 text-xl md:text-2xl font-medium text-foreground/90">
            Thesis, Dissertations, and A-Grade Assignments
          </p>
          
          <p className="mb-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Guiding university students across all majors to success. Trusted support for MBA, DBA, and specialized sciences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg px-8 py-6 shadow-2xl hover:shadow-accent/20 transition-all duration-300 group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Start Your Success Plan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <a 
              href={`tel:${whatsappNumber}`}
              className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              or call {whatsappNumber}
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
