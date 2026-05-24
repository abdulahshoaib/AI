// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'Artificial Intelligence',
			customCss: ['./src/styles/katex.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/abdulahshoaib/AI-Lab' }],
			sidebar: [
				{
					label: 'Artificial Intelligence',
					items: [
						{
							label: 'Informed Search',
							items: [
								{ label: 'Overview', slug: 'informed-search' },
								{ label: 'A* Algorithm', slug: 'informed-search/a-star' },
								{ label: 'Best First Search', slug: 'informed-search/best-first-search' },
								{ label: 'Hill Climbing', slug: 'informed-search/hill-climbing' },
							],
						},
						{
							label: 'Adversarial Game Playing',
							items: [
								{ label: 'Overview', slug: 'adversarial-game-playing' },
								{ label: 'Minimax', slug: 'adversarial-game-playing/minimax' },
								{ label: 'Alpha-Beta', slug: 'adversarial-game-playing/alpha-beta' },
							],
						},
						{
							label: 'Genetic Algorithms',
							items: [
								{ label: 'Overview', slug: 'genetic-algorithms' },
								{ label: 'N Queens Problem', slug: 'genetic-algorithms/n-queens-problem' },
							],
						},
					],
				},
				{
					label: 'Data Preparation',
					items: [
						{ label: 'Data Preprocessing', slug: 'data-preprocessing' },
					],
				},
				{
					label: 'Machine Learning',
					items: [
						{ label: 'Regression and Classification', slug: 'regression-and-classification' },
						{ label: 'Single Layer Perceptron', slug: 'single-layer-perceptron' },
						{ label: 'Deep Learning and Regularization Techniques', slug: 'deep-learning-and-regularization-techniques' },
						{
							label: 'Unsupervised Learning',
							items: [
								{ label: 'Overview', slug: 'unsupervised-learning' },
								{ label: 'K-Means Clustering', slug: 'unsupervised-learning/k-means-clustering' },
							],
						},
					],
				},
				{
					label: 'Evaluation Metrics',
					items: [
						{
							label: 'Regression',
							items: [
								{ label: 'Overview', slug: 'evaluation-metrics/regression' },
							],
						},
						{
							label: 'Classification',
							items: [
								{ label: 'Overview', slug: 'evaluation-metrics/classification' },
							],
						},
					],
				},
			],
		}),
	],
});
