---
title: K-Medoids Clustering
description: A partitioning clustering algorithm that uses representative data points as cluster centers.
---
K-Medoids is an unsupervised clustering algorithm that groups data into `k` clusters.

Unlike K-Means, which represents each cluster using the mean of its points, K-Medoids represents each cluster using an actual data point called a medoid.

## How K-Medoids Works

1. Select the number of clusters `k`.
2. Choose `k` initial medoids from the dataset.
3. Assign each data point to the nearest medoid.
4. Swap medoids with non-medoid points when the swap improves the clustering cost.
5. Repeat until the medoids stop changing.

## Medoid

A medoid is the most centrally located actual data point in a cluster.

Because medoids are real observations, K-Medoids is usually more robust to outliers than K-Means.

## Cost Function

K-Medoids minimizes the total distance between each point and the medoid of its assigned cluster.

```text
Total Cost = sum(distance(point, assigned medoid))
```

## Advantages

- More robust to outliers than K-Means
- Works with different distance metrics
- Uses real data points as cluster centers
- Easier to interpret when medoids represent real examples

## Limitations

- Slower than K-Means on large datasets
- Requires choosing `k` manually
- Sensitive to initial medoid selection
- Can be computationally expensive with many samples

## Applications

- Customer segmentation
- Pattern recognition
- Bioinformatics clustering
- Document clustering
- Grouping data with outliers
