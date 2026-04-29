import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Shield, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-navbar" data-ocid="navbar">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-bold text-xl text-primary dark:text-foreground hover:opacity-80 transition-smooth"
          data-ocid="navbar.logo_link"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-accent" />
          </div>
          <span>YodhaMedia</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary dark:hover:text-accent hover:bg-primary/5 transition-smooth"
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold accent-glow"
            asChild
            data-ocid="navbar.cta_button"
          >
            <Link to="/services">Book Consultation</Link>
          </Button>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 text-foreground transition-smooth"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="navbar.hamburger_button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-navbar border-t border-border/20"
            data-ocid="navbar.mobile_menu"
          >
            <div className="container mx-auto px-4 pb-4 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-smooth"
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="navbar.mobile_cta_button"
                >
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
