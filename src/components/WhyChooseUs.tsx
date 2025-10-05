import React from 'react';
import { Clock, Award, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '2–3 days turnaround',
      detail: 'Get your AI systems up and running in just a few days, not weeks or months.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Deep Niche Expertise',
      description: 'Especially Aesthetic Clinics',
      detail: 'We understand your industry inside out and build solutions that actually work for your business.',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Users,
      title: 'Easy to Use',
      description: 'No tech knowledge needed',
      detail: 'Our solutions are designed to be intuitive and user-friendly for business owners, not developers.',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: TrendingUp,
      title: 'Scales Your Business',
      description: '24/7 automation',
      detail: 'Your AI assistants work around the clock, handling customers and generating leads while you focus on growth.',
      color: 'from-gray-800 to-black'
    }
  ];

  const benefits = [
    'No monthly subscriptions - one-time setup fee',
    'Dedicated support during implementation',
    'Custom solutions tailored to your business',
    'Integration with your existing tools',
    'Training and onboarding included',
    'Performance monitoring and optimization'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">Why Choose Amores Intelligence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just another AI agency. We're your partners in business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="group bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{reason.title}</h3>
                      <span className="text-sm text-purple-400 font-medium leading-relaxed">{reason.description}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">{reason.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">What You Get</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-200 flex-shrink-0" />
                  <span className="text-white leading-relaxed text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-purple-200">Satisfaction Guarantee</div>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="https://calendly.com/aichatworx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-white text-purple-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;