---
title: Best First Search
description: A heuristic search strategy that expands the most promising node first.
---
Best-first search is an informed search algorithm that expands the node that
appears most promising according to a heuristic function. Unlike A*, it
usually depends mainly on $h(n)$, the estimated distance from the current node
to the goal, instead of combining actual cost and heuristic cost. It keeps candidate
nodes in a priority queue and always selects the node with the lowest heuristic value.
It is faster than uninformed search in many cases, but it is not guaranteed to find the shortest path unless additional cost rules are used.

## Advantages and limitations
| Advantages | Limitations |
|---|---|
| Uses heuristics to search faster | May not find optimal solution |
| Explores promising paths first | Performance depends on heuristic quality |
| More efficient than uninformed search | Can get stuck in local optimum |
| Reduces unnecessary node expansion | May consume high memory |

## Implementation
### Pseudocode
```txt
1. Initialize priority queue OPEN
2. Insert start node into OPEN

3. While OPEN is not empty:

      a. Remove node n with lowest h(n)

      b. If n is goal:
             Return solution

      c. Expand n

      d. For each neighbor m of n:
             Insert m into OPEN with priority h(m)

4. Return failure
```

### Python
```py
import heapq

def best_first_search(graph, start, goal, heuristic):
    visited = set()
    priority_queue = []

    heapq.heappush(priority_queue, (heuristic[start], start))

    while priority_queue:
        h, current = heapq.heappop(priority_queue)

        if current == goal:
            return current

        if current not in visited:
            visited.add(current)

            for neighbor in graph[current]:
                if neighbor not in visited:
                    heapq.heappush(
                        priority_queue,
                        (heuristic[neighbor], neighbor)
                    )

    return None


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
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 6,
    "E": 2,
    "F": 4,
    "G": 0
}

result = best_first_search(graph, "A", "G", heuristic)

print("Goal Found:", result)
```
output:
```txt
Goal Found: G
```
