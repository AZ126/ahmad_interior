import { motion } from "framer-motion";
import { Building2, Home, Hospital, Store } from "lucide-react";
import hospitalImage from "@/assets/hospital-blinds.jpg";
import shopImage from "@/assets/shop-blinds.jpg";
import officeImage from "@/assets/office-blinds.jpg";
import homeImage from "@/assets/home-blinds.jpg";

const services = [
  {
    icon: Hospital,
    title: "Hospitals",
    description:
      "Medical-grade window blinds with easy maintenance, privacy control, and light management for healthcare facilities.",
    image: hospitalImage,
  },
  {
    icon: Store,
    title: "Shops & Retail",
    description:
      "Elegant storefront blinds that enhance your retail space while providing sun protection and style.",
    image: shopImage,
  },
  {
    icon: Building2,
    title: "Commercial Offices",
    description:
      "Professional window solutions for corporate environments with motorized options and smart controls.",
    image: officeImage,
  },
  {
    icon: Home,
    title: "Homes",
    description:
      "Beautiful residential blinds in various styles - zebra, roller, wooden, and more for your dream home.",
    image: homeImage,
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-4"
          >
            Window Solutions for{" "}
            <span className="text-gradient-gold">Every Space</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From healthcare facilities to cozy homes, we provide tailored window blind solutions 
            that combine functionality with aesthetic excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden card-hover bg-card"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
