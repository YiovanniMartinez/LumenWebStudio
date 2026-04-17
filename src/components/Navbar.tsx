import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Servicios", to: "/servicios" },
  { label: "Proceso", to: "/proceso" },
  { label: "Sobre Nosotros", to: "/sobre-nosotros" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-neon flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-sm">L</span>
          </div>
          <span className="font-heading font-semibold text-lg text-foreground">
            Lumen<span className="text-primary">Web</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm transition-colors ${
                location.pathname === item.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/lumenweb._"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg gradient-neon text-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Demo Gratis
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
