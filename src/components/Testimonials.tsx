import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Amores Intelligence transformed our clinic operations. Our AI assistant handles 80% of patient inquiries, and our booking rate increased by 150%. The team delivered exactly what they promised in just 3 days.",
      name: "Dr. Maria Santos",
      designation: "Aesthetic Clinic Owner, Manila, Philippines",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Managing 15 properties was overwhelming until we got our AI assistant. Now it handles guest communications, bookings, and even upsells our services. Our response time went from hours to minutes.",
      name: "Carlos Rodriguez",
      designation: "Airbnb Host, Cebu, Philippines",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The AI lead generation system is incredible. We went from manually calling prospects to having qualified leads book appointments automatically. Our occupancy rate is now consistently above 90%.",
      name: "Jennifer Lim",
      designation: "Dormitory Manager, Quezon City, Philippines",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The custom automation workflows saved us 20 hours per week. Order processing, customer support, and inventory management all run automatically now. Best investment we've made.",
      name: "Michael Chen",
      designation: "E-commerce Store Owner, Makati, Philippines",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Outstanding support and robust features. The AI system handles our customer inquiries 24/7 and has improved our customer satisfaction scores dramatically. It's rare to find a product that delivers on all its promises.",
      name: "Lisa Thompson",
      designation: "Restaurant Chain Manager, BGC, Philippines",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-tight">Client Results & Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Filipino businesses are transforming their operations with our AI solutions
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">Ready to Join Our Success Stories?</h3>
            <p className="text-purple-100 mb-6 leading-relaxed text-base">
              These results are real. Your business could be next. Book a free strategy call to discover 
              how AI automation can transform your operations.
            </p>
            <a 
              href="https://calendly.com/aichatworx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;