import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import gallery3 from "@/assets/gallery-3.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Shop",
    details: ["Shop No. 2- LG, Gohar Centre", "Wahdat Road, Lahore"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0309-1768620", "0305-4729266"],
    isLink: true,
    linkType: "tel",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@ahmedinterior.com"],
    isLink: true,
    linkType: "mailto",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "10:00 AM - 8:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "923091768620"; // International format without '+' for wa.me

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for required fields (since we prevent default, browser native validation won't run)
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields before sending.");
      return;
    }

    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank", "noopener,noreferrer");

    toast.success("Opening WhatsApp...");

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gallery3}
            alt="Contact background"
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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch for a free consultation and quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                Get In <span className="text-gradient-gold">Touch</span>
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-secondary"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail) =>
                        item.isLink ? (
                          <a
                            key={detail}
                            href={`${item.linkType}:${detail}`}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted-foreground">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://wa.me/923091768620"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                  Send Us a <span className="text-gradient-gold">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g., Quote for Office Blinds"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7158991576574!2d74.30123741512688!3d31.494632581387546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042e1a234567%3A0x1234567890abcdef!2sWahdat%20Road%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ahmed Interior Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
