import { config, fields, collection, singleton } from "@keystatic/core";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
	storage: {
		kind: "local",
	},
	ui: {
		brand: {
			name: "Premier",
		},
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "app/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.markdoc({ label: "Content" }),
			},
		}),
	},
	singletons: {
		hero: singleton({
			label: "Front Page",
			path: "app/content/hero",
			format: { data: "json" },
			schema: {
				heroTitle: fields.text({ label: "Brand Title" }),
				heroLabel: fields.text({ label: "Brand Label" }),
				heroDescription: fields.text({ label: "Brand Slogan" }),
				buttonText: fields.text({ label: "Button Text" }),
				heroImage: fields.cloudImage({
					label: "Background Image link",
				}),
			},
		}),
		carousel: singleton({
			label: "Slideshow",
			path: "app/content/carousel",
			format: { data: "json" },
			schema: {
				slides: fields.array(
					fields.object({
						image: fields.cloudImage({ label: "Slide Image" }),
						description: fields.text({ label: "Slide Description" }),
					}),
					{
						label: "Slides",
						itemLabel: (props) => props.fields.description.value,
					},
				),
			},
		}),
		categories: singleton({
			label: "Collections",
			path: "app/content/categories",
			format: { data: "json" },
			schema: {
				collections: fields.array(
					fields.object({
						name: fields.text({ label: "Collection Name" }),
						image: fields.cloudImage({ label: "Background Image" }),
						description: fields.text({ label: "Collection Description" }),
					}),
					{
						label: "Collections",
						itemLabel: (props) => props.fields.name.value,
					},
				),
			},
		}),
		products: singleton({
			label: "Products",
			path: "app/content/categories",
			format: { data: "json" },
			schema: {
				products: fields.array(
					fields.object({
						name: fields.text({ label: "Product Name" }),
						excerpt: fields.text({
							label: "Short Description",
							multiline: true,
						}),
						price: fields.integer({ label: "Price in Rupees" }),
						rating: fields.number({ label: "Rating", step: 0.1 }),
						image: fields.cloudImage({
							label: "Product Image",
						}),
					}),
					{
						label: "Products",
						itemLabel: (props) => props.fields.name.value,
					},
				),
			},
		}),
		details: singleton({
			label: "Footer Details",
			path: "app/content/details",
			format: { data: "json" },
			schema: {
				about: fields.object({
					title: fields.text({ label: "Title" }),
					description: fields.text({
						label: "Description",
						multiline: true,
					}),
					copyright: fields.text({ label: "Copyright Text" }),
				}),
				contact: fields.object({
					address: fields.text({ label: "Address", multiline: true }),
					email: fields.text({
						label: "Email",
						validation: {
							isRequired: true,
							pattern: {
								message: "Please enter a valid email address",
								regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							},
						},
					}),
					phone: fields.text({
						label: "Phone",
						validation: {
							isRequired: true,
							pattern: {
								message: "Please enter a valid phone number",
								regex: /^\+?[0-9\s]{10,}$/,
							},
						},
					}),
				}),
				socials: fields.object(
					{
						facebook: fields.url({ label: "Facebook" }),
						instagram: fields.url({ label: "Instagram" }),
						twitter: fields.url({ label: "Twitter" }),
					},
					{
						label: "Socials",
						description:
							"Your social media accounts for customers to reach out",
					},
				),
				businessHours: fields.object(
					{
						monday2friday: fields.text({ label: "Monday - Friday" }),
						saturday: fields.text({ label: "Saturday" }),
						sunday: fields.text({ label: "Sunday" }),
					},
					{
						label: "Business Hours",
					},
				),
			},
		}),
	},
});
