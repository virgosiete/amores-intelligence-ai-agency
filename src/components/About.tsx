import React from 'react';
import { Globe, Users, Zap, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">About Amores Intelligence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              We are a full-stack AI Automation Agency helping medical clinics, dental offices, property managers, 
              and other high-volume service businesses automate customer support, sales, scheduling, 
              and lead generation through advanced AI systems.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Our mission is to empower growing businesses with world-class AI technology—making automation 
              simple, cost-effective, and scalable for teams managing hundreds of inquiries every day.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-base">Fast Delivery</h3>
                <p className="text-gray-700 text-sm leading-relaxed">2-3 days implementation</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-base">Global Ready</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Serving clients worldwide</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-base">Expert Support</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Dedicated implementation team</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-base">AI-Powered</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Cutting-edge technology</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">Why We Started</h3>
              <p className="text-purple-50 leading-relaxed mb-6 text-base">
                We saw businesses struggling with manual processes, losing customers due to slow response times, 
                and missing opportunities because they couldn't scale their operations efficiently.
              </p>
              <p className="text-purple-50 leading-relaxed text-base">
                That's why we created Amores Intelligence – to help businesses leverage cutting-edge AI technology 
                for seamless automation and exponential growth.
              </p>
              
              <div className="mt-8 pt-6 border-t border-purple-400/30">
                <div className="flex items-center justify-between text-purple-50">
                  <span className="text-sm">Founded</span>
                  <span className="font-semibold">2024</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;