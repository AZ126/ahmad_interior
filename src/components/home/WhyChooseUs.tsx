import { motion } from "framer-motion";
import { Award, Clock, Palette, Shield, Truck, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest materials for lasting durability and beauty.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Tailored solutions to match your unique style and requirements.",
  },
  {
    icon: Truck,
    title: "Free Installation",
    description: "Professional installation included with every purchase.",
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Fast turnaround times to meet your project deadlines.",
  },
  {
    icon: Shield,
    title: "Warranty Coverage",
    description: "Comprehensive warranty for your peace of mind.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to guide you from selection to installation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-accent">
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-4 text-accent-foreground"
          >
            The Ahmed Interior <span className="text-primary">Difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-foreground/70 text-lg"
          >
            Experience the perfect blend of quality, craftsmanship, and customer service
            that sets us apart in the window blinds industry.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-accent-foreground/5 hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-accent-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-accent-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
