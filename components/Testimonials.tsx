import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, TechVenture Inc",
      avatar: "https://i.pravatar.cc/150?img=47",
      quote: "Precision Accounting Partners transformed our financial operations. Their strategic insights helped us reduce costs by 30% while improving accuracy. The team's attention to detail is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GreenLeaf Consulting",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote: "Working with Precision has been a game-changer for our business. They don't just crunch numbers—they provide strategic guidance that's helped us scale confidently. Absolutely exceptional service.",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Rodriguez",
      role: "CFO, Horizon Enterprises",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote: "The level of professionalism and expertise is outstanding. They've streamlined our accounting processes and provided clarity we never had before. I recommend them to every business owner I know.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience working with our team
          </p>
        </div>

        {/* Carousel-Style Layout: Center Card Larger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 lg:scale-95 opacity-95">
            <div className="flex flex-col items-center text-center">
              {/* Large Avatar */}
              <div className="mb-6">
                <Image
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  width={80}
                  height={80}
                  className="rounded-full w-20 h-20 object-cover border-4 border-gray-100"
                />
              </div>

              {/* Big Stars */}
              <div className="flex gap-1 mb-6 text-2xl">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>

              {/* Name & Role */}
              <div>
                <p className="font-bold text-gray-900 text-xl mb-1">
                  {testimonials[0].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Center Card - LARGER & FEATURED */}
          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300 lg:scale-105 border-2 border-blue-100">
            <div className="flex flex-col items-center text-center">
              {/* Extra Large Avatar */}
              <div className="mb-6">
                <Image
                  src={testimonials[1].avatar}
                  alt={testimonials[1].name}
                  width={96}
                  height={96}
                  className="rounded-full w-24 h-24 object-cover border-4 border-blue-100"
                />
              </div>

              {/* Big Stars */}
              <div className="flex gap-1 mb-6 text-3xl">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic text-xl mb-6 leading-relaxed">
                "{testimonials[1].quote}"
              </blockquote>

              {/* Name & Role */}
              <div>
                <p className="font-bold text-gray-900 text-2xl mb-1">
                  {testimonials[1].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 lg:scale-95 opacity-95">
            <div className="flex flex-col items-center text-center">
              {/* Large Avatar */}
              <div className="mb-6">
                <Image
                  src={testimonials[2].avatar}
                  alt={testimonials[2].name}
                  width={80}
                  height={80}
                  className="rounded-full w-20 h-20 object-cover border-4 border-gray-100"
                />
              </div>

              {/* Big Stars */}
              <div className="flex gap-1 mb-6 text-2xl">
                {[...Array(testimonials[2].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "{testimonials[2].quote}"
              </blockquote>

              {/* Name & Role */}
              <div>
                <p className="font-bold text-gray-900 text-xl mb-1">
                  {testimonials[2].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[2].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full shadow-lg px-8 py-4">
            <div className="flex -space-x-2">
              <Image
                src="https://i.pravatar.cc/150?img=15"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/150?img=25"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/150?img=35"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/150?img=45"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">500+ Happy Clients</p>
              <p className="text-sm text-gray-600">Trusted since 2010</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}