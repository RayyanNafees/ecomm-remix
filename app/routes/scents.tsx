import type { MetaFunction } from "@remix-run/node";
import { Hero } from "@/components/Hero";
import { PerfumeCarousel } from "@/components/PerfumeCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
// import { MarqueeSection } from "@/components/MarqueeSection.client";
import { PerfumeList } from "@/components/PerfumeList";
import { Footer } from "@/components/Footer";
export const meta: MetaFunction = () => {
	return [
		{ title: "Elegent Scents" },
		{ name: "description", content: "Essence of Elegence!" },
	];
};

export default function Scents() {
	return (
		<div className="min-h-screen bg-cream">
			<main>
				<Hero />
				<PerfumeCarousel />
				<CategoryGrid />
				{/* <MarqueeSection /> */}
				<PerfumeList /> 
			</main>
			<Footer />
		</div>
	);
}
