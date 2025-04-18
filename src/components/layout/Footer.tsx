
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">CyberSecure Hub</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing expert cybersecurity knowledge, training and resources to help secure your digital life.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/musetadd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/changmosa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/chanyalewM29017" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="https://github.com/MOsaman1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyber-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white">Support</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyber-accent mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Security Tips</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Threat Analysis</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Best Practices</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Security Tools</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Research Papers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-red-600" />
                <a href="mailto:tadesse_m@soshgic.edu.gh" className="text-gray-300 hover:text-white">
                  tadesse_m@soshgic.edu.gh
                </a>
              </p>
              <p className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-cyber-accent" />
                <span className="text-gray-300">+123 456 7890</span>
              </p>
              <p className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-cyber-accent" />
                <span className="text-gray-300">123 Security Street, Cyber City</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Send us a message</h3>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4" action="mailto:tadesse_m@soshgic.edu.gh" method="post" encType="text/plain">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="md:col-span-3">
              <textarea 
                placeholder="Your Message" 
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button 
              type="submit" 
              className="md:col-span-3 px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} CyberSecure Hub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
