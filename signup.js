import React from 'react';
import Link from 'next/link';
import SignupForm from '../components/SignupForm';
import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime/30 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold text-forest">
              Spruces Cleaners
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/jobs" className="text-gray-700 hover:text-forest transition-colors duration-300">Jobs</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/training" className="text-gray-700 hover:text-forest transition-colors duration-300">Training</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/about" className="text-gray-700 hover:text-forest transition-colors duration-300">About Us</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/login" className="text-gray-700 hover:text-forest transition-colors duration-300">Login</Link>
            </motion.div>
          </nav>
          <button className="md:hidden text-forest">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Create Your Cleaner Account</h1>
              <p className="text-lg text-center text-gray-600 mb-12">
                Join our platform to discover cleaning opportunities across Australia, enhance your skills with professional training, and build your cleaning career.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SignupForm />
            </motion.div>
          </div>
        </main>

        <footer className="border-t border-gray-200 mt-20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-semibold mb-4">Spruces Cleaners</h3>
              <p className="text-gray-600">Connecting cleaners with opportunities across Australia.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/jobs" className="text-gray-600 hover:text-forest transition-colors duration-300">Jobs</Link></li>
                <li><Link href="/training" className="text-gray-600 hover:text-forest transition-colors duration-300">Training</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-forest transition-colors duration-300">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-forest transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-600 hover:text-forest transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-forest transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-forest transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-2">Email: info@sprucescleaners.com.au</p>
              <p className="text-gray-600">Phone: 1300 SPRUCES</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 pb-8">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} Spruces Cleaners. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
