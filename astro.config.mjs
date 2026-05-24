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
					label: 'Search Algorithms',
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
								{ label: 'Alpha-Beta Pruning', slug: 'adversarial-game-playing/alpha-beta' },
							],
						},
					],
				},
				{
					label: 'Evolutionary Algorithms',
					items: [
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
						{
							label: 'Supervised Learning',
							items: [
								{ label: 'Regression', slug: 'supervised-learning/regression' },
								{ label: 'Classification', slug: 'supervised-learning/classification' },
							],
						},
						{
							label: 'Artificial Neural Networks',
							items: [
								{ label: 'Single Layer Perceptron', slug: 'single-layer-perceptron' },
								{ label: 'Deep Learning Basics', slug: 'artificial-neural-networks/deep-learning-basics' },
							],
						},
						{
							label: 'Convolutional Neural Networks',
							items: [
								{ label: 'Regularization Techniques', slug: 'convolutional-neural-networks/regularization-techniques' },
							],
						},
						{
							label: 'Unsupervised Learning',
							items: [
								{ label: 'Overview', slug: 'unsupervised-learning' },
								{ label: 'K-Means Clustering', slug: 'unsupervised-learning/k-means-clustering' },
								{ label: 'K-Medoids Clustering', slug: 'unsupervised-learning/k-medoids-clustering' },
								{ label: 'Hierarchical Clustering', slug: 'unsupervised-learning/hierarchical-clustering' },
							],
						},
					],
				},
				{
					label: 'Evaluation Metrics',
					items: [
						{ label: 'Overview', slug: 'evaluation-metrics' },
						{ label: 'Regression Metrics', slug: 'evaluation-metrics/regression' },
						{ label: 'Classification Metrics', slug: 'evaluation-metrics/classification' },
					],
				},
			],
		}),
	],
});
