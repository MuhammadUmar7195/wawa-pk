import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  FileText, 
  Truck, 
  Package, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Alahdeen Marketplace",
      description: "A comprehensive marketplace solution connecting buyers and sellers across Pakistan with secure transactions and reliable delivery systems.",
      features: [
        "Multi-vendor marketplace platform",
        "Secure payment gateway integration", 
        "Real-time order tracking",
        "Advanced search and filtering",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "E Khata",
      description: "Digital record management system revolutionizing how Pakistani businesses maintain their financial records and documentation.",
      features: [
        "Digital ledger management",
        "Automated financial reporting",
        "Cloud-based data storage",
        "Multi-user access control",
        "Backup and recovery systems"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Truck,
      title: "E Logistics",
      description: "Advanced logistics management platform optimizing supply chain operations with real-time tracking and route optimization.",
      features: [
        "Route optimization algorithms",
        "Real-time GPS tracking",
        "Fleet management tools",
        "Delivery scheduling system",
        "Performance analytics dashboard"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Comprehensive inventory control system helping businesses optimize stock levels, reduce waste, and improve operational efficiency.",
      features: [
        "Real-time stock monitoring",
        "Automated reorder alerts",
        "Barcode scanning integration",
        "Multi-location management",
        "Detailed analytics and reports"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive business solutions designed to transform your operations and accelerate growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-hero transition-all duration-500 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300" 
                  variant="outline"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;