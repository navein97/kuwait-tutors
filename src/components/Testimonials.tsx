import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      major: "MBA Student",
      text: "Helped me structure my MBA Thesis perfectly and achieved an A. The guidance was professional and the feedback was always timely.",
      rating: 5
    },
    {
      name: "Ahmed K.",
      major: "DBA Candidate",
      text: "Expert support throughout my DBA dissertation journey. Their knowledge of research methodology made all the difference.",
      rating: 5
    },
    {
      name: "Fatima A.",
      major: "Biology Major",
      text: "Outstanding help with my Molecular Biology assignments. They understood complex scientific concepts and explained everything clearly.",
      rating: 5
    },
    {
      name: "Yousef R.",
      major: "Business Student",
      text: "Professional, reliable, and results-oriented. My grades improved significantly with their assignment support.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by students across Kuwait's universities
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.major}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
