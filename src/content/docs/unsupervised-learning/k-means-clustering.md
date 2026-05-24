---
title: K-Means Clustering
description: A centroid-based clustering algorithm for partitioning unlabeled data.
---

# K-Means Clustering

## Overview

K-Means is an unsupervised learning algorithm used to divide data into `k` clusters.

Each cluster is represented by a centroid. A centroid is the mean position of all data points assigned to that cluster.

The goal of K-Means is to group similar data points together and minimize the distance between each data point and its assigned centroid.

## How K-Means Works

1. Select the number of clusters `k`.
2. Randomly initialize `k` centroids.
3. Assign each data point to the nearest centroid.
4. Recalculate each centroid using the mean of assigned points.
5. Repeat assignment and centroid update until the centroids stop changing significantly.

## Meaning of `k`

The value of `k` controls how many clusters the algorithm creates.

- Larger `k` means smaller and more detailed clusters.
- Smaller `k` means larger and more general clusters.

## K-Means Cost Function

K-Means minimizes the total squared distance between each point and the centroid of its assigned cluster.

$$
J = \sum_{i=1}^{k} \sum_{x \in C_i} ||x - \mu_i||^2
$$

Where:

- \(J\) = Cost function
- \(k\) = Number of clusters
- \(C_i\) = Cluster \(i\)
- \(x\) = Data point
- \(\mu_i\) = Centroid of cluster \(i\)

Lower cost means the points are closer to their centroids.

## Required Libraries

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
```

## Creating Sample Data

The `make_blobs()` function creates synthetic clustered data.

```python
# Create dataset with 3 natural clusters
X, y_true = make_blobs(
    n_samples=300,
    centers=3,
    cluster_std=0.6,
    random_state=42
)

# Visualize the original unclustered data
plt.scatter(X[:, 0], X[:, 1], s=50)
plt.title("Original Data")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

## Applying K-Means Clustering

```python
# Create a KMeans model with 3 clusters
kmeans = KMeans(
    n_clusters=3,
    random_state=42
)

# Fit the model on the data
kmeans.fit(X)

# Get cluster centers
centers = kmeans.cluster_centers_

# Get labels assigned to each data point
labels = kmeans.labels_
```

## Visualizing K-Means Clusters

```python
# Plot clustered data points
plt.scatter(
    X[:, 0],
    X[:, 1],
    c=labels,
    s=50,
    cmap="viridis"
)

# Plot cluster centers
plt.scatter(
    centers[:, 0],
    centers[:, 1],
    c="red",
    s=200,
    alpha=0.7,
    marker="X"
)

plt.title("K-Means Clustering Results")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

## Inertia

Inertia measures how compact the clusters are.

It is the sum of squared distances between each data point and the centroid of its assigned cluster.

Lower inertia means the clusters are tighter.

## Inertia Formula

$$
\text{Inertia} =
\sum_{i=1}^{k}
\sum_{x \in C_i}
||x - \mu_i||^2
$$

## Important Points About Inertia

- Inertia is not normalized.
- It depends on the scale of the data.
- Lower inertia usually means better clustering.
- Inertia decreases as `k` increases.
- Very low inertia does not always mean the best model because too many clusters can overfit.
- In high-dimensional data, Euclidean distances can become inflated.
- PCA can be used before K-Means to reduce dimensionality.

## Elbow Method

The Elbow Method is used to find a good value of `k`.

It works by running K-Means for different values of `k` and plotting inertia against `k`.

The best value of `k` is usually near the point where the curve bends sharply. This point is called the elbow.

## Elbow Method Code

```python
inertia = []

# Test k values from 1 to 10
for k in range(1, 11):

    km = KMeans(
        n_clusters=k,
        random_state=42
    )

    km.fit(X)

    inertia.append(km.inertia_)

# Plot the elbow curve
plt.plot(
    range(1, 11),
    inertia,
    marker="o"
)

plt.title("Elbow Method")
plt.xlabel("Number of Clusters (k)")
plt.ylabel("Inertia")
plt.show()
```

## Complete K-Means Code

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

# Create dataset
X, y_true = make_blobs(
    n_samples=300,
    centers=3,
    cluster_std=0.6,
    random_state=42
)

# Plot original data
plt.scatter(X[:, 0], X[:, 1], s=50)
plt.title("Original Data")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()

# Create and train KMeans model
kmeans = KMeans(
    n_clusters=3,
    random_state=42
)

kmeans.fit(X)

# Extract results
centers = kmeans.cluster_centers_
labels = kmeans.labels_

# Plot clustered data
plt.scatter(
    X[:, 0],
    X[:, 1],
    c=labels,
    s=50,
    cmap="viridis"
)

# Plot centroids
plt.scatter(
    centers[:, 0],
    centers[:, 1],
    c="red",
    s=200,
    alpha=0.7,
    marker="X"
)

plt.title("K-Means Clustering Results")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()

# Elbow Method
inertia = []

for k in range(1, 11):

    km = KMeans(
        n_clusters=k,
        random_state=42
    )

    km.fit(X)

    inertia.append(km.inertia_)

plt.plot(
    range(1, 11),
    inertia,
    marker="o"
)

plt.title("Elbow Method")
plt.xlabel("Number of Clusters (k)")
plt.ylabel("Inertia")
plt.show()
```

## Advantages of K-Means

- Simple to understand
- Easy to implement
- Fast on large datasets
- Works well when clusters are clearly separated
- Efficient for numerical data

## Limitations of K-Means

- Requires choosing `k` manually
- Sensitive to initial centroid placement
- Sensitive to outliers
- Assumes clusters are roughly circular
- Does not work well with complex-shaped clusters
- Performance can decrease in high-dimensional data

## Applications of K-Means

- Customer segmentation
- Image segmentation
- Document clustering
- Market analysis
- Pattern recognition
- Anomaly detection
- Recommendation systems

## Tutorial

<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        src="https://www.youtube.com/embed/hBHoEbZohI0?si=CMWFjXwQxlCfQRwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
