import type { GatsbyConfig } from "gatsby";
import Resume from "./resume.json";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Vitor Prado`,
		siteUrl: `https://vitorprado.dev`
	},
		graphqlTypegen: true,
		plugins: [
			{
				resolve: 'gatsby-plugin-google-analytics',
				options: {
					"trackingId": "UA-54273286-1"
				}
			}, 
			"gatsby-plugin-image", 
			{
				resolve: 'gatsby-plugin-manifest',
				options: {
					"icon": "src/images/icon.png"
				}
			}, 
			"gatsby-transformer-remark", 
			"gatsby-plugin-sharp", 
			"gatsby-transformer-sharp", 
			{
				resolve: 'gatsby-source-filesystem',
				options: {
					"name": "images",
					"path": "./src/images/"
				},
				__key: "images"
			}, 
			{
				resolve: 'gatsby-source-filesystem',
				options: {
					"name": "pages",
					"path": "./src/pages/"
				},
				__key: "pages"
			},
			{
				resolve: `gatsby-theme-jsonresume`,
				options: {
					name: "resume",
					theme: "jsonresume-theme-caffeine",
					resumeJson: Resume
				},
			},
		]
};

export default config;
