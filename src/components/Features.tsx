import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChart3, Shield, Workflow } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Automation",
      description: "Automate repetitive tasks with our AI-powered workflow engine. Save hours every day with intelligent automation.",
      className: "feature-card-1"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with real-time analytics and customizable dashboards.",
      className: "feature-card-2"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SSO integration, and compliance certifications.",
      className: "feature-card-3"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Seamless Integrations",
      description: "Connect with 500+ tools and services. Our API-first approach ensures everything works together.",
      className: "feature-card-1"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your workflow and boost productivity
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.className} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional feature showcase */}
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Built for teams of all sizes
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a startup or an enterprise, StreamLine scales with your business. 
                Our platform adapts to your needs and grows with your team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Unlimited team members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">99.9% uptime guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-muted-foreground text-lg font-medium">Feature Illustration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;