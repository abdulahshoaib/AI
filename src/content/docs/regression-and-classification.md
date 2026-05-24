---
title: Regression and Classification
description: Understanding supervised learning, classification, regression, and machine learning workflows using Python and Scikit-learn.
---

## Overview

Machine Learning (ML) is a field of computer science where systems learn patterns from data and make predictions or decisions automatically without explicitly programmed rules.

Traditional programming follows:

```text
Input + Rules = Output
```

Machine learning follows:

```text
Input + Correct Outputs = Learned Model
```

Instead of manually writing rules, the system learns those rules from data.

## Real-World Applications

Some common applications of machine learning include:

- Spam email detection
- Medical diagnosis
- House price prediction
- Credit card fraud detection
- Recommendation systems

## Types of Machine Learning

### Supervised Learning

Supervised learning uses:
- Input variables (features)
- Correct outputs (labels)

The model learns a function:

$$
f(X) = y
$$

Examples:
- Predicting exam scores
- Disease prediction
- Spam detection

### Unsupervised Learning

Unsupervised learning works with unlabeled data and tries to discover hidden patterns.

Example:
- Customer grouping

### Reinforcement Learning

Reinforcement learning learns through rewards and penalties.

Example:
- Game-playing AI

## Important Terminology

### Feature

An input variable used by the model.

Examples:
- House size
- Age
- Salary

### Target / Label

The output variable the model predicts.

Examples:
- House price
- Spam or not spam

### Dataset

A collection of training examples.

### Model

An algorithm that learns patterns from data.

### Training

The process of learning from known data.

### Testing

The process of evaluating the model on unseen data.

## Categories of Supervised Learning

### Regression

Regression is used when the target variable is continuous.

Examples:
- House price prediction
- Temperature forecasting
- Sales prediction

#### Common Regression Algorithms

- Linear Regression
- Decision Tree Regression

### Classification

Classification is used when the target belongs to categories or classes.

Examples:
- Spam detection
- Disease prediction
- Animal image classification

#### Common Classification Algorithms

- Logistic Regression
- K-Nearest Neighbors (KNN)

## What is Scikit-learn?

Scikit-learn (`sklearn`) is an open-source Python machine learning library used for building and evaluating machine learning models.

It is built on top of:

- NumPy
- Pandas
- Matplotlib

Scikit-learn simplifies machine learning implementation by providing ready-made algorithms and utilities.

## Features of Scikit-learn

### Dataset Handling

- Easy dataset loading
- Data preprocessing utilities

### Supervised Learning Algorithms

- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forests
- Support Vector Machines
- KNN

### Unsupervised Learning Algorithms

- K-Means Clustering
- Hierarchical Clustering
- PCA

### Evaluation Tools

- Accuracy
- Precision
- Recall
- Confusion Matrix
- Cross Validation

## Standard Machine Learning Workflow

The standard workflow in Scikit-learn is:

1. Load Dataset
2. Split Data
3. Scale Features
4. Train Model
5. Make Predictions
6. Evaluate Results

## Train/Test Split

Datasets are divided into:

### Training Set

Used to:
- Teach the model
- Learn patterns
- Estimate parameters

### Testing Set

Used to:
- Evaluate generalization ability
- Measure real-world performance

Example:

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
```

### Important Parameters

#### test_size

Defines the percentage of data used for testing.

```python
test_size=0.2
```

Meaning:
- 80% training data
- 20% testing data

#### random_state

Ensures reproducible dataset splits.

```python
random_state=42
```

## Classification Example

The classification example uses the Iris dataset.

## Import Libraries

```python
import numpy as np
import pandas as pd

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    classification_report
)
```

## Load Dataset

```python
iris = load_iris()

X = iris.data
y = iris.target

print(X.shape)
print(y.shape)
```

## Split Dataset

```python
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
```

## Feature Scaling

Feature scaling standardizes numerical values so all features contribute equally.

```python
scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

## Train Logistic Regression Model

```python
model = LogisticRegression()

model.fit(X_train, y_train)
```

The classifier learns decision boundaries that separate classes.

## Make Predictions

```python
y_pred = model.predict(X_test)
```

## Evaluate Classification Model

### Accuracy

Measures prediction correctness.

```python
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)
```

### Confusion Matrix

Displays prediction distribution across classes.

```python
cm = confusion_matrix(y_test, y_pred)

print(cm)
```

### Classification Report

Provides:
- Precision
- Recall
- F1-score

```python
print(classification_report(y_test, y_pred))
```

## K-Nearest Neighbors (KNN)

Another classifier demonstrated is KNN.

```python
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=5)

knn.fit(X_train, y_train)

y_pred_knn = knn.predict(X_test)

print("KNN Accuracy:", accuracy_score(y_test, y_pred_knn))
```

## Regression Example

The regression example uses the California Housing dataset.

## Import Libraries

```python
import numpy as np
import pandas as pd

from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
```

## Load Dataset

```python
data = fetch_california_housing()

X = data.data
y = data.target

print(X.shape)
print(y.shape)
```

## Split Dataset

```python
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
```

## Feature Scaling

```python
scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

## Train Linear Regression Model

```python
model = LinearRegression()

model.fit(X_train, y_train)
```

The model learns weights that minimize prediction error.

## Make Predictions

```python
y_pred = model.predict(X_test)
```

## Evaluate Regression Model

### Mean Squared Error (MSE)

Measures average squared prediction error.

```python
mse = mean_squared_error(y_test, y_pred)

print("MSE:", mse)
```

### Root Mean Squared Error (RMSE)

Square root of MSE.

```python
rmse = np.sqrt(mse)

print("RMSE:", rmse)
```

### R² Score

Measures how well the model explains variance.

```python
r2 = r2_score(y_test, y_pred)

print("R² Score:", r2)
```

## Decision Tree Regressor

Another regression model demonstrated is Decision Tree Regression.

```python
from sklearn.tree import DecisionTreeRegressor

tree_model = DecisionTreeRegressor(random_state=42)

tree_model.fit(X_train, y_train)

y_pred_tree = tree_model.predict(X_test)

print(
    "Decision Tree R² Score:",
    r2_score(y_test, y_pred_tree)
)
```
