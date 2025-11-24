"use client";

import { Calculator, FileText, TrendingUp, Shield, Users, Award, DollarSign, Target, BookOpen, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation & Planning",
      description: "Strategic tax solutions that minimize liability and maximize returns for individuals and businesses.",
      features: ["Individual & Business Returns", "Tax Strategy Consulting", "IRS Representation"],
      featured: true,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    },
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Accurate financial records and real-time reporting to keep your business running smoothly.",
      features: ["Monthly Reconciliation", "Payroll Processing", "Financial Reporting"]
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive wealth management and retirement planning tailored to your goals.",
      features: ["Retirement Planning", "Investment Strategy", "Estate Planning"],
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Thorough financial audits and compliance reviews to ensure accuracy and integrity.",
      features: ["Financial Audits", "Compliance Reviews", "Internal Controls"]
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Expert guidance on business formation, growth strategies, and operational efficiency.",
      features: ["Business Formation", "Growth Strategy", "CFO Services"]
    }
  ];

  const team = [
    {
      name: "Margaret Chen, CPA",
      role: "Senior Tax Partner",
      credentials: "CPA, MBA",
      specialization: "Corporate Tax & International Taxation",
      experience: "20+ years",
      clients: "150+"
    },
    {
      name: "Robert Williams, CPA",
      role: "Audit & Assurance Director",
      credentials: "CPA, CIA",
      specialization: "Financial Audits & Risk Management",
      experience: "15+ years",
      clients: "100+"
    },
    {
      name: "Sarah Thompson, CFP",
      role: "Financial Planning Lead",
      credentials: "CFP, CFA",
      specialization: "Wealth Management & Retirement",
      experience: "12+ years",
      clients: "200+"
    },
    {
      name: "David Martinez, CPA",
      role: "Business Advisory Partner",
      credentials: "CPA, MST",
      specialization: "Small Business & Startups",
      experience: "18+ years",
      clients: "180+"
    }
  ];

  const successStories = [
    {
      client: "Tech Startup Inc.",
      industry: "Technology",
      challenge: "Complex equity compensation and R&D tax credits",
      result: "Secured $240K in tax savings through strategic planning",
      roi: "240K",
      metric: "Tax Savings",
      testimonial: "Margaret and her team transformed our tax strategy. The R&D credit alone saved us six figures."
    },
    {
      client: "Heritage Real Estate Group",
      industry: "Real Estate",
      challenge: "Multi-state property portfolio tax optimization",
      result: "Reduced tax liability by 35% through entity restructuring",
      roi: "35%",
      metric: "Tax Reduction",
      testimonial: "The audit preparation was seamless, and their proactive approach caught issues before they became problems."
    },
    {
      client: "Family Wealth Partners",
      industry: "Private Wealth",
      challenge: "Estate planning and generational wealth transfer",
      result: "Preserved $2M+ in estate value through strategic planning",
      roi: "2M+",
      metric: "Estate Preserved",
      testimonial: "Sarah's financial planning expertise gave us peace of mind for our family's future."
    }
  ];

  const resources = [
    {
      category: "Tax Planning",
      title: "2024 Tax Deduction Checklist",
      description: "Complete guide to maximizing deductions for individuals and businesses",
      readTime: "8 min read"
    },
    {
      category: "Business Finance",
      title: "Cash Flow Management Strategies",
      description: "Essential techniques for maintaining healthy business cash flow",
      readTime: "6 min read"
    },
    {
      category: "Retirement",
      title: "Retirement Account Comparison",
      description: "401(k) vs IRA vs Roth: Which is right for your situation?",
      readTime: "10 min read"
    },
    {
      category: "Compliance",
      title: "Quarterly Tax Calendar 2024",
      description: "Important deadlines and filing requirements throughout the year",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="bg-white">
      {/* Services Section - Bento Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tax preparation to strategic planning, we provide the expertise your financial success demands
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  service.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                {service.featured && service.image ? (
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-blue-600 p-4 rounded-xl shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="bg-blue-50 p-4 rounded-xl inline-block mb-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                )}

                <div className={service.featured && service.image ? 'p-8' : 'px-8 pb-8'}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Grid with Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="text-blue-600 font-semibold">Expert Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Led by Certified Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of CPAs and financial experts brings decades of combined experience to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600">{member.credentials}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Specialization</p>
                    <p className="text-gray-900 font-medium">{member.specialization}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Experience</p>
                      <p className="text-2xl font-bold text-blue-600">{member.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Active Clients</p>
                      <p className="text-2xl font-bold text-blue-600">{member.clients}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories - Staggered Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses and individuals who trust Precision Accounting Partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  index === 1 ? 'lg:mt-8' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <span className="text-blue-600 font-semibold text-sm">{story.industry}</span>
                  </div>
                  <Target className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.client}</h3>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Challenge</p>
                  <p className="text-gray-700 mb-4">{story.challenge}</p>
                  
                  <p className="text-sm text-gray-500 mb-2">Result</p>
                  <p className="text-gray-900 font-medium">{story.result}</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <p className="text-blue-600 text-sm font-semibold mb-1">{story.metric}</p>
                  <p className="text-4xl font-bold text-blue-600">${story.roi}</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-gray-700 italic">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-gray-600">Active Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">$12M+</p>
                <p className="text-gray-600">Tax Savings Generated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-gray-600">Client Retention</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
                <p className="text-gray-600">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center - Split Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Title and CTA */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <div className="bg-blue-50 p-3 rounded-xl inline-block mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Financial Resources & Insights
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Stay informed with our expert guides, tax tips, and financial planning resources
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full">
                  View All Resources
                </button>
              </div>
            </div>

            {/* Right: Resource Cards */}
            <div className="lg:col-span-2 space-y-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
                          {resource.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {resource.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-600 ml-4 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated on Tax Law Changes</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get monthly insights, tax tips, and financial planning strategies delivered to your inbox
            </p>
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}