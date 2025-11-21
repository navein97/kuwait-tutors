import { Badge } from "@/components/ui/badge";

const Majors = () => {
  const majors = {
    "Business & MBA": [
      "MBA Thesis",
      "DBA Dissertation",
      "Business Assignments",
      "All Business Courses & Levels"
    ],
    "Science & Health": [
      "Anatomy & Physiology",
      "General Chemistry",
      "Chemistry of Solutions",
      "Physics (Modern, Electricity & Optics)",
      "Genetics",
      "Analytical Math",
      "Biostatistics",
      "Microbiology",
      "Botany",
      "Plant Histology",
      "Ecology",
      "Molecular Biology"
    ],
    "Advanced Sciences": [
      "Adv in Epigenetics & Therapeutics",
      "Developmental Biology",
      "Fungal Pathogenesis",
      "Nutrition",
      "Cell Physiology",
      "English"
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Cover <span className="text-primary">Your Major</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert support across diverse academic disciplines and specializations
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12">
          {Object.entries(majors).map(([category, subjects], index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {subjects.map((subject, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary"
                    className="text-sm md:text-base py-2 px-4 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border border-border"
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Majors;
