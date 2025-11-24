import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#bookkeeping" className="text-gray-400 hover:text-white transition-colors">
                  Bookkeeping
                </a>
              </li>
              <li>
                <a href="#tax" className="text-gray-400 hover:text-white transition-colors">
                  Tax Preparation
                </a>
              </li>
              <li>
                <a href="#payroll" className="text-gray-400 hover:text-white transition-colors">
                  Payroll Services
                </a>
              </li>
              <li>
                <a href="#consulting" className="text-gray-400 hover:text-white transition-colors">
                  Financial Consulting
                </a>
              </li>
              <li>
                <a href="#audit" className="text-gray-400 hover:text-white transition-colors">
                  Audit Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#guides" className="text-gray-400 hover:text-white transition-colors">
                  Tax Guides
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                  Tax Calculator
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Financial Plaza<br />
                  Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@precisionaccounting.com" className="text-gray-400 hover:text-white transition-colors">
                  info@precisionaccounting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Precision Accounting Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
