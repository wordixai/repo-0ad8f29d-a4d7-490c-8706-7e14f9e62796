import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">🚀 Now in Public Beta</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Streamline Your
            <span className="text-primary block">Business Operations</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Powerful automation tools and analytics to help your business grow faster, 
            work smarter, and achieve more with less effort.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-border hover:bg-accent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
              <div className="text-2xl font-bold text-muted-foreground">InnovateCo</div>
              <div className="text-2xl font-bold text-muted-foreground">NextGen</div>
              <div className="text-2xl font-bold text-muted-foreground">FutureWork</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl">
        <div className="bg-card border border-border rounded-lg shadow-2xl p-4 glassmorphism">
          <div className="bg-muted rounded h-64 flex items-center justify-center">
            <div className="text-muted-foreground text-lg font-medium">Dashboard Preview</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;