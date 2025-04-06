import Marquee from "react-fast-marquee";

const featuredPerfumes = [
  {
    name: "Rose Noir",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80",
    price: "$180"
  },
  {
    name: "Velvet Oud",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    price: "$220"
  },
  {
    name: "Crystal Musk",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&w=800&q=80",
    price: "$160"
  }
];

const bestSellers = [
  {
    name: "Midnight Rose",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80",
    price: "$190"
  },
  {
    name: "Ocean Breeze",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80",
    price: "$150"
  },
  {
    name: "Golden Amber",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    price: "$200"
  }
];

export const MarqueeSection = () => {
  return (
    <div className="py-16 space-y-16">
      <div>
        <h2 className="text-3xl font-light text-charcoal mb-8 text-center">Featured</h2>
        <Marquee gradient gradientColor="#f8f5f1" speed={40}>
          <div className="flex gap-8 px-4">
            {featuredPerfumes.map((perfume) => (
              <div key={perfume.name} className="w-64 shrink-0">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-medium text-charcoal">{perfume.name}</h3>
                <p className="text-charcoal/60">{perfume.price}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div>
        <h2 className="text-3xl font-light text-charcoal mb-8 text-center">Best Sellers</h2>
        <Marquee gradient gradientColor="#f8f5f1" speed={40} direction="right">
          <div className="flex gap-8 px-4">
            {bestSellers.map((perfume) => (
              <div key={perfume.name} className="w-64 shrink-0">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-medium text-charcoal">{perfume.name}</h3>
                <p className="text-charcoal/60">{perfume.price}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};