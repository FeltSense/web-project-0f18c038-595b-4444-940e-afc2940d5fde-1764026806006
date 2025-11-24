"use client";

import { Check, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';

export default function Pricing() {
  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  const features = [
    { icon: Check, text: "Professional Website Design" },
    { icon: Check, text: "Mobile-Responsive Layout" },
    { icon: Check, text: "SEO Optimization" },
    { icon: Check, text: "Contact Form Integration" },
    { icon: Check, text: "Google Maps Integration" },
    { icon: Check, text: "Fast Loading Speed" },
    { icon: Check, text: "Social Media Links" },
    { icon: Check, text: "Professional Email Setup" },
    { icon: Check, text: "Analytics Dashboard" },
    { icon: Check, text: "Free Hosting (1 Year)" },
    { icon: Check, text: "SSL Security Certificate" },
    { icon: Check, text: "Lifetime Updates" }
  ];

  const bonuses = [
    { icon: Star, text: "Free Logo Design" },
    { icon: Crown, text: "Priority Support" },
    { icon: Zap, text: "Same-Day Delivery" }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Website. One Price.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your accounting firm needs to establish a powerful online presence
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Best Value Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                <Crown className="w-4 h-4" />
                BEST VALUE - SAVE $470
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100 relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Price */}
                  <div className="text-center md:text-left">
                    <div className="inline-block mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">One-Time Payment</span>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-start justify-center md:justify-start gap-2 mb-2">
                        <span className="text-2xl font-semibold text-gray-400 line-through mt-4">$499</span>
                      </div>
                      <div className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-3xl font-bold text-gray-900 mt-4">$</span>
                        <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                          29
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 mt-4">Complete website solution</p>
                    </div>

                    {/* Bonus Features Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2 justify-center md:justify-start">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        BONUS FEATURES INCLUDED:
                      </p>
                      <div className="space-y-2">
                        {bonuses.map((bonus, index) => {
                          const Icon = bonus.icon;
                          return (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                              <Icon className="w-5 h-5 text-amber-500" />
                              <span className="font-medium">{bonus.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                    >
                      <span>Get Your Website - $29</span>
                      <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </button>

                    <p className="text-sm text-gray-500 mt-4 flex items-center justify-center md:justify-start gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      Secure payment via Stripe • Money-back guarantee
                    </p>
                  </div>

                  {/* Right Side - Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Check className="w-7 h-7 text-green-600" />
                      Everything Included:
                    </h3>
                    <div className="grid gap-3">
                      {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div 
                            key={index} 
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="bg-green-100 p-1.5 rounded-lg group-hover:bg-green-200 transition-colors flex-shrink-0">
                              <Icon className="w-4 h-4 text-green-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Delivery Time</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-1">5★</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-1">SSL</div>
              <div className="text-sm text-gray-600">Secure Site</div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 px-6 py-4 rounded-xl">
              <Shield className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <div className="font-bold text-gray-900">30-Day Money-Back Guarantee</div>
                <div className="text-sm text-gray-600">Not satisfied? Get a full refund, no questions asked.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}