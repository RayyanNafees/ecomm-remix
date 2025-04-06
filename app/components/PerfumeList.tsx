import { Star } from "lucide-react";

const perfumes = [
  {
    name: "Rose Noir",
    excerpt: "A mysterious blend of dark rose and amber",
    price: "$180",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Velvet Oud",
    excerpt: "Rich and intense oriental fragrance",
    price: "$220",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Crystal Musk",
    excerpt: "Pure and ethereal white musk",
    price: "$160",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&w=800&q=80"
  }
];

export const PerfumeList = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-light text-charcoal mb-8">Our Collection</h2>
      <div className="max-h-[600px] overflow-y-auto pr-4 space-y-6">
        {perfumes.map((perfume) => (
          <div
            key={perfume.name}
            className="flex gap-6 p-4 bg-white rounded-lg shadow-xs hover:shadow-md transition-shadow"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-medium text-charcoal mb-2">{perfume.name}</h3>
              <p className="text-charcoal/60 mb-4">{perfume.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-charcoal/80">{perfume.rating}</span>
                </div>
                <span className="text-lg font-medium text-charcoal">{perfume.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};