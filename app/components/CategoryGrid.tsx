import { motion } from "framer-motion";

const categories = [
	{
		name: "Floral",
		image:
			"https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80",
		description: "Romantic and feminine fragrances",
	},
	{
		name: "Oriental",
		image:
			"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
		description: "Rich and exotic scents",
	},
	{
		name: "Woody",
		image:
			"https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&w=800&q=80",
		description: "Deep and earthy aromas",
	},
	{
		name: "Fresh",
		image:
			"https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80",
		description: "Light and invigorating scents",
	},
];

export const CategoryGrid = ({ collections = categories }) => {
	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-light text-charcoal mb-8">Categories</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{collections.map((category, index) => (
					<motion.div
						key={category.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="group cursor-pointer"
					>
						<div className="relative overflow-hidden rounded-lg">
							<img
								src={category.image}
								alt={category.name}
								className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
								<h3 className="text-white text-xl font-medium mb-2">
									{category.name}
								</h3>
								<p className="text-white/80 text-sm">{category.description}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};
