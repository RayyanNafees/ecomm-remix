import { motion } from "framer-motion";
import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  // const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Thank you for subscribing!",
    //   description: "You'll receive our latest updates in your inbox.",
    // });
    setEmail("");
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-charcoal bg-white rounded-full">
            NEWSLETTER
          </span>
          <h2 className="text-4xl font-light text-charcoal mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-charcoal/60 mb-8">
            Subscribe to receive updates about new fragrances, exclusive offers, and beauty tips
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 text-charcoal bg-white rounded-full focus:outline-hidden focus:ring-2 focus:ring-charcoal/20"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 text-sm font-medium text-white bg-charcoal rounded-full transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};