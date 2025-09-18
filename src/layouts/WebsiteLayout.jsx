"use client"

import { Link, useLocation } from "react-router-dom"
import { Mail, Phone, MapPin, Home, Cake, User, MessageCircle } from "lucide-react"
import logoImage from "../assets/logo.png"

export default function CustomerLayout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="Glacé Delight Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Glacé Delight
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-white hover:text-pink-400 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/cakes" className="text-sm font-medium text-white hover:text-pink-400 transition-colors relative group">
                Cakes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-sm font-medium text-white hover:text-pink-400 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-sm font-medium text-white hover:text-pink-400 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </Link>
            </div>

          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-t mt-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="Glacé Delight Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Glacé Delight
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating beautiful, delicious cakes for every celebration. Made with love, fresh ingredients, 
                and delivered with care to make your special moments even sweeter.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cakes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Browse Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cake Categories */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">Cake Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/cakes?category=birthday" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Birthday Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/cakes?category=wedding" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Wedding Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/cakes?category=anniversary" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Anniversary Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/cakes?category=celebration" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Celebration Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Custom Orders
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a
                    href="mailto:orders@glacedelight.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    orders@glacedelight.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a
                    href="tel:+917012721379"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 70127 21379
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">123 Glacé Street, Bakery City, BC 12345</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Glacé Delight. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="flex items-center justify-around py-2">
          <Link
            to="/"
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === "/"
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          <Link
            to="/cakes"
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === "/cakes"
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
            }`}
          >
            <Cake className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Cakes</span>
          </Link>
          
          <Link
            to="/about"
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === "/about"
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
            }`}
          >
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">About</span>
          </Link>
          
          <Link
            to="/contact"
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === "/contact"
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
            }`}
          >
            <MessageCircle className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </nav>

      {/* Add bottom padding for mobile to account for bottom navigation */}
      <div className="md:hidden h-16"></div>
    </div>
  )
}
