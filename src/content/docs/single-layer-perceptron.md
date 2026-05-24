---
title: Single Layer Perceptron
description: Understanding perceptrons, activation functions, logic gates, TensorFlow, PyTorch, and implementing a single-layer neural network for binary classification.
---
A perceptron is one of the fundamental building blocks of artificial neural networks. It is designed to process input data, apply weights and bias values, and generate predictions for classification problems.

Perceptrons are primarily used for supervised learning and binary classification tasks where outputs are represented as two possible classes such as:

- True / False
- Yes / No
- 0 / 1

Modern machine learning frameworks such as TensorFlow and PyTorch simplify the implementation and training of neural networks using high-level APIs and optimized computation libraries.

## Objectives

- Understand the structure of a single-layer perceptron
- Learn how perceptrons process inputs and generate outputs
- Understand activation functions and decision boundaries
- Learn perceptron learning and weight updates
- Understand the role of logic gates in neural networks
- Learn the basics of TensorFlow and PyTorch
- Build and train a single-layer neural network using TensorFlow

## Single Layer Perceptron

A perceptron is an artificial neuron used in machine learning and neural networks. It performs computations on input data to identify patterns and make decisions.

It works by:

1. Receiving input values
2. Multiplying inputs with weights
3. Adding a bias value
4. Passing the result through an activation function
5. Producing an output

Perceptrons are mainly used for linearly separable binary classification problems.

## Types of Perceptrons

### Single-Layer Perceptron

- Contains only one computational layer
- Can classify linearly separable data
- Simple neural network architecture

### Multi-Layer Perceptron

- Contains multiple layers
- Greater computational power
- Can solve more complex problems
- Commonly used in deep learning

## Perceptron Function

The perceptron computes a weighted sum of input values and applies an activation function.

General equation:

$$
f(x)=
\begin{cases}
1 & \text{if } wx+b > 0 \\
0 & \text{otherwise}
\end{cases}
$$

Where:

- \(w\) = weight vector
- \(x\) = input vector
- \(b\) = bias
- \(m\) = number of inputs

Weighted summation:

$$
\sum_{i=1}^{m} w_i x_i
$$

Outputs are commonly represented as:

- 0 or 1
- -1 or 1

depending on the activation function.

## Inputs in a Perceptron

A perceptron accepts multiple inputs and assigns different weights to each input feature.

Examples of input features:

- Age
- Salary
- Marital status
- Credit history

The weighted inputs are summed together:

$$
w_0 + w_1x_1 + w_2x_2 + \dots + w_nx_n
$$

The resulting value is passed through an activation function to generate the final output.

## Activation Functions

Activation functions determine whether the neuron should activate and produce an output.

They introduce non-linearity into neural networks and help models learn patterns.

## Step Function

Produces binary outputs.

$$
f(x)=
\begin{cases}
1 & x \ge 0 \\
0 & x < 0
\end{cases}
$$

## Sigmoid Function

Maps outputs between 0 and 1.

$$
\sigma(x)=\frac{1}{1+e^{-x}}
$$

Commonly used in binary classification.

## Tanh Function

Maps outputs between -1 and 1.

$$
\tanh(x)
$$

Useful when centered outputs are required.

## ReLU Function

Rectified Linear Unit:

$$
f(x)=\max(0,x)
$$

Widely used in hidden layers of neural networks.

## Perceptron Decision Process

The perceptron operates as follows:

- Inputs are multiplied by weights
- Weighted values are summed
- Bias is added
- Activation function is applied
- Output class is predicted

If the weighted sum exceeds a threshold, the neuron activates; otherwise, it remains inactive.

## Perceptron Learning Rule

Perceptrons learn by adjusting weights according to prediction error.

Weight update equation:

$$
w_i = w_i + \Delta w_i
$$

Where:

$$
\Delta w_i = \eta (y - \hat{y})x_i
$$

Bias update:

$$
b = b + \eta (y - \hat{y})
$$

Where:

- \(y\) = actual output
- \(\hat{y}\) = predicted output
- \(\eta\) = learning rate

The learning rate controls how much weights change during training.

## Logic Gates and Neural Networks

Logic gates are the foundation of digital systems and can be modeled using perceptrons.

They operate using binary values:

- 0 = Low
- 1 = High

Common logic gates include:

- AND
- NAND
- OR
- NOR
- NOT
- XOR

These gates demonstrate how neural networks can learn logical relationships without manually defining rules.

## TensorFlow

TensorFlow is an open-source machine learning and deep learning framework developed by Google.

It is used for:

- Neural networks
- Deep learning
- Computer vision
- Natural language processing
- AI systems

## Key Features of TensorFlow

- Tensor-based computations
- Computation graphs
- Keras high-level API
- GPU and TPU acceleration
- Model deployment support

## PyTorch

PyTorch is an open-source deep learning framework developed by Meta.

It is widely used in research and experimentation because of its flexibility and dynamic computation graphs.

## Key Features of PyTorch

- Dynamic computation graphs
- Python-friendly syntax
- Automatic differentiation
- GPU acceleration using CUDA
- TorchScript deployment support

## Building a Single-Layer Neural Network

## Import Required Libraries

```python
import tensorflow as tf
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
```

## Create Synthetic Dataset

```python
X, y = make_classification(
    n_samples=1000,
    n_features=2,
    n_informative=2,
    n_redundant=0,
    n_repeated=0,
    n_classes=2,
    random_state=42
)
```

## Split Dataset

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)
```

## Standardize Dataset

Standardization improves convergence and model performance.

```python
scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

## Build the Neural Network

```python
model = tf.keras.Sequential([
    tf.keras.Input(shape=(2,)),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
```

Explanation:

- `Dense(1)` creates a single neuron
- `sigmoid` activation produces outputs between 0 and 1
- Input shape `(2,)` means each sample contains two features

## Common Activation Functions in TensorFlow

| Activation | Description | Use Case |
|---|---|---|
| linear | Returns input directly | Regression |
| sigmoid | Maps values between 0 and 1 | Binary classification |
| softmax | Produces probability distribution | Multiclass classification |
| tanh | Maps values between -1 and 1 | Hidden layers |
| relu | Returns max(0,x) | Hidden layers |

Example:

```python
model = tf.keras.Sequential([
    tf.keras.Input(shape=(2,)),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
```

## Compile the Model

```python
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)
```

## Components

### Optimizer

Controls weight updates during training.

Common optimizers:

| Optimizer | Purpose |
|---|---|
| SGD | Standard gradient descent |
| RMSprop | Adaptive learning rates |
| Adam | Combines momentum and adaptive learning |
| Adagrad | Good for sparse data |
| Adadelta | Improved Adagrad |
| Nadam | Adam with Nesterov momentum |

### Loss Function

Measures prediction error.

#### Classification Losses

| Loss Function | Use Case |
|---|---|
| binary_crossentropy | Binary classification |
| categorical_crossentropy | Multiclass classification |
| sparse_categorical_crossentropy | Integer labels |
| hinge | Margin-based classification |

#### Regression Losses

| Loss Function | Use Case |
|---|---|
| MSE | Squared error |
| MAE | Absolute error |
| MAPE | Percentage error |
| huber | Robust to outliers |

## Train the Model

```python
history = model.fit(
    X_train,
    y_train,
    epochs=50,
    batch_size=16,
    validation_split=0.1
)
```

Training parameters:

- `epochs` = number of complete training cycles
- `batch_size` = number of samples processed before updating weights
- `validation_split` = percentage of training data reserved for validation

## Model Evaluation

```python
loss, accuracy = model.evaluate(X_test, y_test)
```

Additional metrics can also be tracked.

```python
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy', 'Precision', 'Recall', 'AUC']
)
```

## Prediction and Classification

```python
y_pred_prob = model.predict(X_test)

y_pred = (y_pred_prob > 0.5).astype(int)
```

## Detailed Evaluation Metrics

```python
from sklearn.metrics import classification_report, confusion_matrix

print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

These metrics help evaluate:

- Accuracy
- Precision
- Recall
- F1-score
- Classification performance

## Implementation

```py
# Single-layer perceptron using TensorFlow

import tensorflow as tf
import numpy as np

X = np.array([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
], dtype=np.float32)

y = np.array([0, 0, 0, 1], dtype=np.float32)

model = tf.keras.Sequential([
    tf.keras.Input(shape=(2,)),
    tf.keras.layers.Dense(1, activation="sigmoid")
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.1),
    loss="binary_crossentropy",
    metrics=["accuracy"]
)

model.fit(X, y, epochs=100, verbose=0)

loss, accuracy = model.evaluate(X, y, verbose=0)

print("Loss:", loss)
print("Accuracy:", accuracy)

predictions = model.predict(X)

for i in range(len(X)):
    predicted_class = 1 if predictions[i][0] >= 0.5 else 0
    print(X[i], "=>", predicted_class, "probability:", predictions[i][0])
```

## Tutorial

### Single Layer Preceptron
<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
    src="https://www.youtube.com/embed/gH6oTYqHGWo?si=3yImvRppuCVYldE3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
