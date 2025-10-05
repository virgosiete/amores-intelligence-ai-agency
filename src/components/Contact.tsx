import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Facebook } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">Let's Automate Your Business Today</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Get in touch and let's discuss how we can help you scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <GlowingEffect
                spread={35}
                glow={true}
                disabled={false}
                proximity={56}
                inactiveZone={0.05}
                borderWidth={2}
                variant="white"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-6 leading-tight">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-tight">Email</h4>
                    <a href="mailto:kits@amoresintelligence.com" className="text-purple-100 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600 rounded px-1">
                      kits@amoresintelligence.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-tight">Phone</h4>
                    <a href="tel:+639157390325" className="text-purple-100 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600 rounded px-1">
                      +63 915 739 0325
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-tight">Location</h4>
                    <p className="text-purple-100 leading-relaxed">Philippines</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-tight">Social Media</h4>
                    <a href="#" className="text-purple-100 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600 rounded px-1">
                      Facebook Page
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <a 
                  href="https://calendly.com/aichatworx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-purple-700 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gray-50 rounded-2xl p-8">
            <GlowingEffect
              spread={35}
              glow={true}
              disabled={false}
              proximity={56}
              inactiveZone={0.05}
              borderWidth={2}
            />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-tight">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Message Sent!</h4>
                <p className="text-gray-700 leading-relaxed">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-2 leading-tight">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-600 text-base leading-relaxed"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-2 leading-tight">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-600 text-base leading-relaxed"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-2 leading-tight">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none text-gray-900 placeholder-gray-600 text-base leading-relaxed"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;