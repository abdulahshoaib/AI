---
title: Evaluation Metrics for Classification
description: Metrics for measuring classifier performance across predicted classes.
---

Classification models predict categories or classes such as:

- Spam or Not Spam
- Fraud or Legitimate Transaction
- Disease or No Disease
- Positive or Negative Sentiment

Evaluation metrics are used to measure how accurately the model classifies data.

## Sample Dataset

```python
y_true = [0, 1, 0, 1, 0, 1, 1, 0]
y_pred = [0, 1, 0, 0, 0, 1, 1, 1]

y_pred_proba = [0.1, 0.9, 0.2, 0.4, 0.3, 0.8, 0.7, 0.6]
```

## Confusion Matrix

A confusion matrix compares predicted values with actual values.

|                | Predicted Positive | Predicted Negative |
|----------------|-------------------|-------------------|
| Actual Positive | True Positive (TP) | False Negative (FN) |
| Actual Negative | False Positive (FP) | True Negative (TN) |

### Python Example

```python
from sklearn.metrics import confusion_matrix

cm = confusion_matrix(y_true, y_pred)

print(cm)
```

## Accuracy

Accuracy measures the proportion of correct predictions made by the model.

### Formula

$$
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
$$

### Python Example

```python
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(y_true, y_pred)

print("Accuracy:", accuracy)
```

## Precision

Precision measures how many predicted positive cases are actually correct.

It is important when false positives are costly.

### Formula

$$
Precision = \frac{TP}{TP + FP}
$$

### Python Example

```python
from sklearn.metrics import precision_score

precision = precision_score(y_true, y_pred)

print("Precision:", precision)
```

## Recall

Recall measures how many actual positive cases were correctly identified.

It is important when false negatives are costly.

### Formula

$$
Recall = \frac{TP}{TP + FN}
$$

### Python Example

```python
from sklearn.metrics import recall_score

recall = recall_score(y_true, y_pred)

print("Recall:", recall)
```

## F1 Score

F1 Score is the harmonic mean of precision and recall.

It balances both metrics into a single value.

### Formula

$$
F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}
$$

### Python Example

```python
from sklearn.metrics import f1_score

f1 = f1_score(y_true, y_pred)

print("F1 Score:", f1)
```

## ROC Curve and AUC

ROC Curve shows the relationship between:

- True Positive Rate (TPR)
- False Positive Rate (FPR)

AUC measures the area under the ROC curve.

### Interpretation

- AUC = 1 → perfect classifier
- AUC = 0.5 → random guessing
- Higher AUC indicates better model performance

### Python Example

```python
from sklearn.metrics import roc_auc_score

roc_auc = roc_auc_score(y_true, y_pred_proba)

print("ROC-AUC Score:", roc_auc)
```

## ROC Curve Visualization

```python
from sklearn.metrics import roc_curve
import matplotlib.pyplot as plt

fpr, tpr, thresholds = roc_curve(y_true, y_pred_proba)

plt.figure(figsize=(6,4))

plt.plot(fpr, tpr, label="ROC Curve")
plt.plot([0,1], [0,1], linestyle='--')

plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ROC Curve")

plt.legend()

plt.show()
```

## Classification Report

A classification report summarizes:

- Precision
- Recall
- F1-score
- Support

for each class.

### Python Example

```python
from sklearn.metrics import classification_report

report = classification_report(y_true, y_pred)

print(report)
```

## Libraries Used

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.metrics import (
    confusion_matrix,
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    roc_curve,
    classification_report
)
```
