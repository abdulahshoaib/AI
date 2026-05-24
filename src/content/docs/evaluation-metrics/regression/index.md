---
title: Evaluation Metrics for Regression
description: Metrics for measuring prediction error in regression models.
---

Regression models predict continuous numerical values such as:

- House prices
- Temperatures
- Revenue forecasts
- Stock prices

Evaluation metrics are used to measure how close the predicted values are to the actual values.

## Mean Absolute Error (MAE)

Mean Absolute Error measures the average absolute difference between actual and predicted values.

Lower MAE indicates better model performance.

### Formula

$$
MAE = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|
$$

### Python Example

```python
from sklearn.metrics import mean_absolute_error

true_values = [2.5, 3.7, 1.8, 4.0, 5.2]
predicted_values = [2.1, 3.9, 1.7, 3.8, 5.0]

mae = mean_absolute_error(true_values, predicted_values)

print("MAE:", mae)
```

## Mean Squared Error (MSE)

Mean Squared Error measures the average squared difference between actual and predicted values.

Large errors are penalized more heavily because the errors are squared.

### Formula

$$
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2
$$

### Python Example

```python
from sklearn.metrics import mean_squared_error

true_values = [2.5, 3.7, 1.8, 4.0, 5.2]
predicted_values = [2.1, 3.9, 1.7, 3.8, 5.0]

mse = mean_squared_error(true_values, predicted_values)

print("MSE:", mse)
```

## Root Mean Squared Error (RMSE)

RMSE is the square root of Mean Squared Error.

It measures prediction error in the same unit as the target variable.

### Formula

$$
RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}
$$

### Python Example

```python
import numpy as np
from sklearn.metrics import mean_squared_error

true_values = [2.5, 3.7, 1.8, 4.0, 5.2]
predicted_values = [2.1, 3.9, 1.7, 3.8, 5.0]

rmse = np.sqrt(mean_squared_error(true_values, predicted_values))

print("RMSE:", rmse)
```

## R-squared (R² Score)

R² Score measures how much variance in the target variable is explained by the model.

Higher R² values generally indicate better model performance.

### Formula

$$
R^2 = 1 - \frac{\sum(y_i - \hat{y}_i)^2}{\sum(y_i - \bar{y})^2}
$$

### Interpretation

- R² = 1 → perfect prediction
- R² = 0 → no explanatory power
- Higher R² values indicate better fitting models

### Python Example

```python
from sklearn.metrics import r2_score

true_values = [2.5, 3.7, 1.8, 4.0, 5.2]
predicted_values = [2.1, 3.9, 1.7, 3.8, 5.0]

r2 = r2_score(true_values, predicted_values)

print("R² Score:", r2)
```

## Libraries Used

```python
import numpy as np

from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)
```
