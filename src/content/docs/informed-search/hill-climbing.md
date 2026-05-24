---
title: Hill Climbing
description: A local search algorithm that repeatedly moves toward better neighboring states.
---

## Overview

Hill Climbing is an informed search algorithm that continuously moves toward the neighboring state with the best heuristic value in order to reach an optimal solution.
It starts from an initial state and repeatedly selects the neighbor that appears closer to the goal.

### Evaluation function
The evaluation function in Hill Climbing measures how good a state is and selects the neighbor with the best heuristic value.

### Local maxima
A local maxima is a state where all neighboring states are worse, causing Hill Climbing to stop even though a better global solution may exist elsewhere.

### Plateaus
A plateau is a flat region where neighboring states have the same heuristic value, giving Hill Climbing no clear direction to move.

### Random restart
Random Restart is a Hill Climbing technique where the algorithm starts again from a random state after getting stuck, increasing the chance of finding the global optimum.

## Implementation
### Pseudocode
```txt
1. Start with initial state

2. Repeat:

      a. Evaluate current state

      b. Generate neighboring states

      c. Select neighbor with best heuristic value

      d. If neighbor is better:
             Move to neighbor

         Else:
             Stop and return current state

3. Return solution
```

### Python
```py
def hill_climbing(graph, heuristic, start, goal):
    current = start

    while current != goal:
        neighbors = graph[current]

        if not neighbors:
            break

        best_neighbor = min(
            neighbors,
            key=lambda node: heuristic[node]
        )

        if heuristic[best_neighbor] >= heuristic[current]:
            break

        current = best_neighbor

    return current


graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": ["G"],
    "F": [],
    "G": []
}

heuristic = {
    "A": 6,
    "B": 4,
    "C": 5,
    "D": 3,
    "E": 2,
    "F": 4,
    "G": 0
}

result = hill_climbing(graph, heuristic, "A", "G")

print("Reached State:", result)
```
output:
```txt
Reached State: G
```
