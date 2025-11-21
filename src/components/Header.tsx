import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/kuwait-tutors-logo.png";

const Header = () => {
  const whatsappNumber = "+96594940024";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoImage} 
            alt="Kuwait Tutors Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href={`tel:${whatsappNumber}`}
            className="hidden sm:flex items-center gap-2 text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">{whatsappNumber}</span>
          </a>
          <Button 
            asChild 
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Contact via</span> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
