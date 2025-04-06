import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { reader } from "../reader.server";

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

export async function loader() {
	const [posts, hero, carouselImages, categories, products] = await Promise.all(
		[
			reader.collections.posts.all(),
			reader.singletons.hero.read(),
			reader.singletons.carousel.read(),
			reader.singletons.categories.read(),
			reader.singletons.products.read(),
		],
	);

	return json({
		posts,
		hero: {
			bgImage: hero?.heroImage,
			title: hero?.heroTitle,
			label: hero?.heroLabel,
			btnText: hero?.buttonText,
			description: hero?.heroDescription,
		},
		carouselImages: carouselImages?.slides.map((i) => i.image),
		categories: categories?.collections?.map((i) => ({
			...i,
			image: i.image.src,
		})),
		products: products?.products.map((i) => ({
			...i,
			image: i.image.src,
			price: `₹ ${i.price}`,
			rating: i.rating ?? 0,
		})),
	});
}

export default function Index() {
	const { hero, carouselImages, categories, products } =
		useLoaderData<typeof loader>();
	return (
		<div className="min-h-screen bg-cream">
			<main>
				<Hero {...hero} />
				<PerfumeCarousel images={carouselImages} />
				<CategoryGrid collections={categories} />
				{/* <MarqueeSection /> */}
				<PerfumeList perfumesList={products} />
			</main>
			<Footer />
		</div>
	);
}
