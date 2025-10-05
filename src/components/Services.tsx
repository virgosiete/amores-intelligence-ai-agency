import React from 'react';
import { Bot, Globe, Target, Settings, MessageCircle, ShoppingCart, Calendar, Workflow } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Assistants',
      description: 'Intelligent AI assistants that handle customer interactions, sales, and bookings automatically.',
      icon: Bot,
      color: 'from-purple-600 to-purple-700',
      features: [
        { name: 'AI Customer Support Specialist', icon: MessageCircle, description: 'Handle inquiries 24/7 with intelligent responses' },
        { name: 'AI Sales Assistant', icon: ShoppingCart, description: 'Convert leads into customers automatically' },
        { name: 'AI Booking Assistant', icon: Calendar, description: 'Manage appointments and reservations seamlessly' }
      ]
    },
    {
      title: 'AI Websites',
      description: 'Modern, mobile-optimized websites built for conversions with integrated AI capabilities.',
      icon: Globe,
      color: 'from-gray-800 to-gray-900',
      features: [
        { name: 'Mobile-First Design', icon: Globe, description: 'Responsive websites that work on all devices' },
        { name: 'Conversion Optimized', icon: Target, description: 'Built to turn visitors into customers' },
        { name: 'Fast Loading', icon: Settings, description: 'Optimized for speed and performance' }
      ]
    },
    {
      title: 'AI Lead Generation',
      description: 'Automated systems that generate and qualify leads around the clock.',
      icon: Target,
      color: 'from-purple-700 to-purple-800',
      features: [
        { name: 'Automated Outreach', icon: Target, description: 'Find and contact potential customers automatically' },
        { name: 'Lead Qualification', icon: Bot, description: 'Filter and score leads based on your criteria' },
        { name: 'Follow-up Sequences', icon: MessageCircle, description: 'Nurture leads with personalized messages' }
      ]
    },
    {
      title: 'AI Automation',
      description: 'Custom workflows using make.com and n8n to automate your business processes.',
      icon: Workflow,
      color: 'from-gray-900 to-black',
      features: [
        { name: 'Make.com Integration', icon: Workflow, description: 'Connect your apps and automate workflows' },
        { name: 'n8n Workflows', icon: Settings, description: 'Custom automation solutions for complex processes' },
        { name: 'Process Optimization', icon: Target, description: 'Streamline operations and reduce manual work' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to automate and scale your business operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base leading-tight">{feature.name}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="https://calendly.com/aichatworx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2`}
                >
                  Learn More
                  <Bot className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;