---
title: Hierarchical Clustering
description: A clustering method that builds nested groups of similar data points.
---
Hierarchical clustering is an unsupervised learning method that creates a tree-like structure of clusters.

The result is often visualized using a dendrogram, which shows how clusters merge or split at different distance levels.

## Types of Hierarchical Clustering

### Agglomerative Clustering

Agglomerative clustering is a bottom-up approach.

It starts with each data point as its own cluster and repeatedly merges the closest clusters.

### Divisive Clustering

Divisive clustering is a top-down approach.

It starts with all data points in one cluster and repeatedly splits clusters into smaller groups.

## Linkage Methods

Linkage methods define how distance between clusters is calculated.

| Method | Meaning |
|---|---|
| Single linkage | Distance between the closest points in two clusters |
| Complete linkage | Distance between the farthest points in two clusters |
| Average linkage | Average distance between points in two clusters |
| Ward linkage | Merge that minimizes within-cluster variance |

## Dendrogram

A dendrogram shows the hierarchy of cluster merges.

The height of each merge represents the distance between the clusters being joined. Cutting the dendrogram at a chosen height determines the final number of clusters.

## Advantages

- Does not require choosing the number of clusters before fitting
- Produces an interpretable hierarchy
- Works well for small and medium-sized datasets
- Can reveal nested group structure

## Limitations

- Computationally expensive on large datasets
- Sensitive to noise and outliers
- Merge decisions cannot be undone in agglomerative clustering
- Different linkage methods can produce different results

## Applications

- Customer segmentation
- Document grouping
- Gene expression analysis
- Image segmentation
- Taxonomy and relationship analysis
