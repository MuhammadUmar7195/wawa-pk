import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, label: "Years of Excellence", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Delivered", value: "1000+" },
    { icon: Award, label: "Success Rate", value: "98%" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">wawa.pk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading the digital transformation of Pakistani businesses through innovative technology solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Transforming Business Operations
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                wawa.pk is Pakistan's premier technology platform, specializing in comprehensive business solutions 
                that streamline operations and drive growth. We understand the unique challenges faced by Pakistani 
                businesses and provide tailored solutions that make a real difference.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Mission</h4>
              <p className="text-muted-foreground">
                To empower Pakistani businesses with world-class technology solutions that enhance efficiency, 
                reduce costs, and accelerate digital transformation across all sectors.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Vision</h4>
              <p className="text-muted-foreground">
                To become Pakistan's most trusted business technology partner, driving innovation and 
                excellence in every industry we serve.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;