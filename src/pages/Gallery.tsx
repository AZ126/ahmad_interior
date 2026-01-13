import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-blinds.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import hospitalImage from "@/assets/hospital-blinds.jpg";
import shopImage from "@/assets/shop-blinds.jpg";
import officeImage from "@/assets/office-blinds.jpg";
import homeImage from "@/assets/home-blinds.jpg";
import aboutImage from "@/assets/about-team.jpg";

const galleryItems = [
  { image: heroImage, title: "Luxury Living Room", category: "Residential" },
  { image: gallery1, title: "Wooden Venetian Blinds", category: "Products" },
  { image: gallery2, title: "Modern Zebra Blinds", category: "Products" },
  { image: gallery3, title: "Minimalist Roller Blinds", category: "Products" },
  { image: gallery4, title: "Office Vertical Blinds", category: "Commercial" },
  { image: gallery5, title: "Smart Motorized Blinds", category: "Products" },
  { image: gallery6, title: "Natural Bamboo Blinds", category: "Products" },
  { image: hospitalImage, title: "Hospital Window Solutions", category: "Healthcare" },
  { image: shopImage, title: "Retail Storefront Blinds", category: "Commercial" },
  { image: officeImage, title: "Corporate Office Blinds", category: "Commercial" },
  { image: homeImage, title: "Cozy Bedroom Blinds", category: "Residential" },
  { image: aboutImage, title: "Professional Installation", category: "Services" },
];

const categories = ["All", "Products", "Residential", "Commercial", "Healthcare", "Services"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gallery2}
            alt="Gallery background"
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
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our stunning collection of window blind installations and products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer card-hover"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium">{item.category}</span>
                    <h3 className="text-primary-foreground font-serif font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
