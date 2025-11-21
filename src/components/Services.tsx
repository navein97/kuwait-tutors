import { BookOpen, FileText, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Award,
      title: "Thesis & Dissertation",
      description: "Guiding, Coaching, and Helping MBA and PhD Candidates from A to Z",
      features: [
        "Complete thesis support",
        "Research methodology guidance",
        "Data analysis assistance",
        "Editing & proofreading"
      ]
    },
    {
      icon: FileText,
      title: "University Assignments",
      description: "Support for Essays, Projects, Reports across all Kuwaiti universities",
      features: [
        "All course assignments",
        "Research papers",
        "Case studies",
        "Project reports"
      ]
    },
    {
      icon: BookOpen,
      title: "Specialized Majors",
      description: "Expert support in Business, MBA, DBA, and Science courses",
      features: [
        "MBA & DBA programs",
        "Business courses",
        "Science disciplines",
        "All academic levels"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional academic support tailored to your success
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
