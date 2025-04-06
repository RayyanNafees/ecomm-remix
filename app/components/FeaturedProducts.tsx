import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Rose Noir",
    description: "A mysterious blend of dark rose and amber",
    price: "$180",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Velvet Oud",
    description: "Rich and intense oriental fragrance",
    price: "$220",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Crystal Musk",
    description: "Pure and ethereal white musk",
    price: "$160",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&w=800&q=80"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-charcoal bg-cream rounded-full">
            FEATURED
          </span>
          <h2 className="text-4xl font-light text-charcoal mb-4">
            Signature Collection
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Discover our most beloved fragrances, each telling its own unique story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-2">
                {product.name}
              </h3>
              <p className="text-charcoal/60 mb-3">{product.description}</p>
              <span className="text-lg font-medium text-charcoal">
                {product.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};