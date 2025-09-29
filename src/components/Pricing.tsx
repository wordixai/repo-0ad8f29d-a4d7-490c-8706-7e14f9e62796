import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Basic automation workflows",
        "Email support",
        "10GB storage",
        "Basic analytics"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      description: "Great for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced automation",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Custom integrations"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Enterprise automation",
        "24/7 phone support",
        "Unlimited storage",
        "Custom analytics",
        "White-label options",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA button */}
                <Button 
                  variant={plan.buttonVariant}
                  className="w-full py-3 font-semibold"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom plan? We offer flexible pricing for enterprise customers.
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80">
            Contact our sales team →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;