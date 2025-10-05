import { Check, MessageCircle, PhoneCall, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-none">
            Pricing
          </Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-gray-700 max-w-xl text-center">
              One-time setup fees. No monthly subscriptions. Your AI systems work for you forever.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-xl border-gray-200">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-gray-900">
                    Starter
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Perfect for small businesses getting started with AI automation. 
                  Includes basic AI assistant and simple workflows.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-gray-900">$1,500</span>
                    <span className="text-sm text-gray-600">
                      one-time setup
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">AI Customer Support</p>
                        <p className="text-gray-700 text-sm">
                          24/7 automated customer service responses
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Basic Lead Capture</p>
                        <p className="text-gray-700 text-sm">
                          Simple forms and lead qualification system
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">2-3 Days Setup</p>
                        <p className="text-gray-700 text-sm">
                          Quick implementation and training included
                        </p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://calendly.com/aichatworx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-4 w-full border-purple-300 text-purple-700 hover:bg-purple-50 focus:ring-2 focus:ring-purple-400">
                      Get Started <MessageCircle className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="w-full shadow-2xl rounded-xl border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-gray-900">
                    Professional
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs">
                      POPULAR
                    </Badge>
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Complete AI automation suite for growing businesses. Includes advanced 
                  AI assistants, workflows, and analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-gray-900">$3,000</span>
                    <span className="text-sm text-gray-600">
                      one-time setup
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Everything in Starter</p>
                        <p className="text-gray-700 text-sm">
                          All basic features plus advanced capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">AI Sales & Booking</p>
                        <p className="text-gray-700 text-sm">
                          Advanced sales conversations and appointment scheduling
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Custom Workflows</p>
                        <p className="text-gray-700 text-sm">
                          Automated processes using Make.com and n8n
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Analytics Dashboard</p>
                        <p className="text-gray-700 text-sm">
                          Track performance and optimize conversions
                        </p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://calendly.com/aichatworx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-4 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-lg hover:shadow-purple-500/25 focus:ring-2 focus:ring-purple-400">
                      Start Now <Bot className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="w-full rounded-xl border-gray-200">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-gray-900">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Custom AI solutions for established businesses with complex needs. 
                  Full automation ecosystem with dedicated support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-gray-900">$6,000+</span>
                    <span className="text-sm text-gray-600">
                      custom quote
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Everything in Professional</p>
                        <p className="text-gray-700 text-sm">
                          All features plus enterprise-grade capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Multi-Platform Integration</p>
                        <p className="text-gray-700 text-sm">
                          Connect all your business systems and tools
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-600" />
                      <div className="flex flex-col">
                        <p className="text-gray-900 font-medium">Dedicated Support</p>
                        <p className="text-gray-700 text-sm">
                          Priority support and ongoing optimization
                        </p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://calendly.com/aichatworx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-4 w-full border-purple-300 text-purple-700 hover:bg-purple-50 focus:ring-2 focus:ring-purple-400">
                      Book Consultation <PhoneCall className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };