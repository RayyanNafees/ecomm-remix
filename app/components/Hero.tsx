// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export const Hero = ({
	bgImage,
	label,
	title,
	description,
	btnText,
}: Partial<{
	bgImage: {
		alt: string;
		src: string;
		height: number | null;
		width: number | null;
	};
	label: string;
	title: string;
	description: string;
	btnText: string;
}>) => {
	// const [_, setIsLoaded] = useState(false);

	// useEffect(() => {
	//   setIsLoaded(true);
	// }, []);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden bg-cream">
			<div className="absolute inset-0 z-0">
				<img
					height={bgImage?.height ?? undefined}
					width={bgImage?.width ?? undefined}
					src={
						bgImage?.src ??
						"https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=2832&q=80"
					}
					alt={bgImage?.alt ?? title ?? "Luxury perfume"}
					className="w-full h-full object-cover opacity-60"
				/>
			</div>

			<nav className="absolute top-0 right-0 z-20 px-8 py-6">
				<div className="flex gap-8">
					<Link
						to="/login"
						className="text-[#1A1F2C] font-medium text-lg hover:text-[#1A1F2C]/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#1A1F2C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
					>
						Login
					</Link>
					<Link
						to="/contact"
						className="text-[#1A1F2C] font-medium text-lg hover:text-[#1A1F2C]/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#1A1F2C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
					>
						Contact
					</Link>
					<Link
						to="/about"
						className="text-[#1A1F2C] font-medium text-lg hover:text-[#1A1F2C]/90 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#1A1F2C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
					>
						About
					</Link>
				</div>
			</nav>

			<div className="container relative z-10 px-4 mx-auto text-center">
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-charcoal bg-cream rounded-full"
				>
					{label ?? "DISCOVER LUXURY"}
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8 text-5xl md:text-7xl font-light text-charcoal leading-tight"
				>
					<span className="font-medium text-balance">
						{title ?? "Essence of \n Elegance"}
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="max-w-lg mx-auto mb-10 text-lg text-charcoal/80"
				>
					{description ??
						`Discover our curated collection of exquisite fragrances, crafted for
					those who appreciate the art of perfumery.`}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<button
						type="button"
						className="px-8 py-3 text-sm font-medium text-white bg-charcoal rounded-full transition-transform hover:scale-105"
					>
						{btnText ?? "Explore Collection"}
					</button>
				</motion.div>
			</div>
		</section>
	);
};
