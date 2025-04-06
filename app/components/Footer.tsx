import {  Instagram, Twitter, Facebook } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Essence</h3>
            <p className="text-white/60 mb-6">
              Discover the art of luxury fragrances at our boutique, where every scent tells a unique story.
            </p>
            <div className="flex gap-4">
              <a href="/" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="/" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="/" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Contact</h3>
            <address className="text-white/60 not-italic">
              <p>123 Luxury Lane</p>
              <p>Beverly Hills, CA 90210</p>
              <p className="mt-4">Phone: (555) 123-4567</p>
              <p>Email: info@essence.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Business Hours</h3>
            <div className="text-white/60">
              <p>Monday - Friday: 10am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: 12pm - 5pm</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2024 Essence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};