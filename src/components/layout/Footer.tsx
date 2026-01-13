import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Roller Blinds",
  "Zebra Blinds",
  "Wooden Blinds",
  "Vertical Blinds",
  "Motorized Blinds",
  "Bamboo Blinds",
];

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Ahmed<span className="text-primary"> Interior</span>
            </h3>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Premium window blinds solutions for homes, offices, hospitals, and commercial spaces. 
              Quality craftsmanship since years of experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923091768620"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-accent-foreground/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-accent-foreground/80">
                  Shop No. 2- LG, Gohar Centre,<br />Wahdat Road, Lahore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-accent-foreground/80">
                  <a href="tel:0309-1768620" className="hover:text-primary transition-colors block">
                    0309-1768620
                  </a>
                  <a href="tel:0305-4729266" className="hover:text-primary transition-colors block">
                    0305-4729266
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@ahmedinterior.com"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  info@ahmedinterior.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  Mon - Sat: 10AM - 8PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-accent-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Ahmed Interior. All rights reserved.
          </p>
          <p className="text-accent-foreground/60 text-sm">
            Premium Window Blinds Solutions in Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
