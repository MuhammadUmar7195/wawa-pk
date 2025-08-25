import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              wawa<span className="text-primary-glow">.pk</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your Complete Business Solution Platform
            </p>
          </div>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Empowering Pakistani businesses with cutting-edge marketplace technology,
            digital record management, logistics solutions, and inventory management systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="shadow-hero hover:scale-105 transition-all duration-300">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1 /4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
          </section>
          );
};

          export default HeroSection;