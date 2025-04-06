import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-6 flex justify-end items-center">
        <div className="flex gap-8">
          <Link 
            to="/login" 
            className="text-white font-light text-lg hover:text-white/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Login
          </Link>
          <Link 
            to="/contact" 
            className="text-white font-light text-lg hover:text-white/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="text-white font-light text-lg hover:text-white/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};