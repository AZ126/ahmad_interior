import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-blinds.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide exceptional window covering solutions that enhance every space while delivering outstanding customer service and value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading provider of premium window blinds in Pakistan, recognized for quality, innovation, and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, excellence, and customer-first approach guide everything we do. We believe in building lasting relationships.",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "50+", label: "Blind Varieties" },
  { number: "100%", label: "Satisfaction" },
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Interior design background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover the story behind Ahmed Interior and our commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
                Crafting Beautiful Spaces <br />
                <span className="text-gradient-gold">Since Day One</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ahmed Interior began with a simple vision: to transform ordinary windows 
                  into stunning focal points that enhance any space. Founded in Lahore, 
                  we have grown from a small shop to one of the most trusted names in 
                  window covering solutions.
                </p>
                <p>
                  Our journey has been driven by an unwavering commitment to quality 
                  and customer satisfaction. Every blind we install represents our 
                  dedication to craftsmanship and attention to detail.
                </p>
                <p>
                  Today, we serve homes, offices, hospitals, and commercial spaces 
                  across Lahore and beyond, bringing the same passion and expertise 
                  that defined our humble beginnings.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Premium quality materials from trusted suppliers",
                  "Expert installation by trained professionals",
                  "Custom solutions tailored to your needs",
                  "Competitive pricing with no hidden costs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="Ahmed Interior team at work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-wider uppercase text-sm"
            >
              What Drives Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3"
            >
              Our Core <span className="text-gradient-gold">Principles</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-8 text-center card-hover border border-border"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
