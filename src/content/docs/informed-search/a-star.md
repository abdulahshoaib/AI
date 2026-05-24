---
title: A* Algorithm
description: A heuristic search algorithm that balances path cost and estimated remaining cost.
---

## Overview

The A* algorithm is an informed search algorithm that finds the shortest or
lowest-cost path between a start node and a goal node by combining actual path cost and heuristic estimation.

<br>

It evaluates nodes using the function $f(n)=g(n)+h(n)$ where $g(n)$ is the actual cost from the start node to the current node and $h(n)$ is
the heuristic estimate from the current node to the goal. A* selects the node with the smallest $f(n)$ value, making it both complete
and optimal when the heuristic is admissible.

<br>

#### Evaluation function
$$
f(n) = g(n) + h(n)
$$

* $g(n)$ = Cost from start node to node n
* $h(n)$ = Estimated cost from n to goal

## Implementation

### Pseudocode
```txt
1. Initialize OPEN list with the start node
2. Initialize CLOSED list as empty

3. Set:
      g(start) = 0
      f(start) = g(start) + h(start)

4. While OPEN list is not empty:

      a. Select node n from OPEN with lowest f(n)

      b. If n is the goal node:
             Return solution path

      c. Remove n from OPEN
         Add n to CLOSED

      d. For each neighbor m of n:

             i. Compute:
                    tentative_g = g(n) + cost(n, m)

            ii. If m is in CLOSED and tentative_g >= g(m):
                    Continue

           iii. If m is not in OPEN
                OR tentative_g < g(m):

                    came_from[m] = n
                    g(m) = tentative_g
                    f(m) = g(m) + h(m)

                    If m is not in OPEN:
                        Add m to OPEN

5. Return failure if goal is not reached
```

### Python
```py
import heapq

def a_star(graph, start, goal, heuristic):
    open_list = []
    heapq.heappush(open_list, (0, start))

    came_from = {}
    g_cost = {start: 0}

    while open_list:
        current_f, current = heapq.heappop(open_list)

        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1], g_cost[goal]

        for neighbor, cost in graph[current]:
            new_g = g_cost[current] + cost

            if neighbor not in g_cost or new_g < g_cost[neighbor]:
                g_cost[neighbor] = new_g
                f_cost = new_g + heuristic[neighbor]
                came_from[neighbor] = current
                heapq.heappush(open_list, (f_cost, neighbor))

    return None, float("inf")


graph = {
    "A": [("B", 1), ("C", 4)],
    "B": [("D", 2), ("E", 5)],
    "C": [("F", 3)],
    "D": [("G", 1)],
    "E": [("G", 2)],
    "F": [("G", 2)],
    "G": []
}

heuristic = {
    "A": 7,
    "B": 6,
    "C": 4,
    "D": 1,
    "E": 2,
    "F": 2,
    "G": 0
}

path, cost = a_star(graph, "A", "G", heuristic)

print("Path:", path)
print("Cost:", cost)
```
output:
```txt
Path: ['A', 'B', 'D', 'G']
Cost: 4
```
