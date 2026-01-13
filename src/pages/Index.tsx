import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Products />
      <WhyChooseUs />
      <CTA />
    </Layout>
  );
};

export default Index;
