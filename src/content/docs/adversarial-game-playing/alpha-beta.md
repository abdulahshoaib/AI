---
title: Alpha-Beta
description: Upload notes and examples for alpha-beta pruning.
---

## Overview

Alpha-Beta Pruning is an optimization technique for the Minimax
algorithm that reduces the number of nodes evaluated in the game tree.
It works by eliminating branches that cannot affect the final decision,
making the search faster while still producing the same optimal result
as Minimax. The algorithm uses two values: alpha, representing the best
value Max can guarantee, and beta, representing the best value Min can guarantee.
When alpha becomes greater than or equal to beta, further exploration of that branch is stopped because it cannot improve the outcome.

## Topics to Cover

### Alpha Value

Alpha ($α$) represents the best value that the Max player can currently guarantee.
It is updated whenever Max finds a better move.

```py
alpha = max(alpha, value)
```

### Beta Value

Beta ($β$) represents the best value that the Min player can currently guarantee.
It is updated whenever Min finds a better move.

```py
beta = min(beta, value)
```

### Pruning Condition

Pruning occurs when:

```py
alpha >= beta
```

At this point, further exploration of the branch is stopped because it cannot affect the final decision.

### Move Ordering

Move ordering means exploring the best possible moves first.
Good move ordering increases pruning efficiency and reduces the number of evaluated nodes.

- Best moves searched earlier
- More branches pruned
- Faster execution

### Comparison with Minimax

| Feature | Minimax | Alpha-Beta Pruning |
|---|---|---|
| Purpose | Finds optimal move | Optimized Minimax |
| Nodes Evaluated | More | Fewer |
| Speed | Slower | Faster |
| Final Result | Optimal | Same optimal result |
| Pruning | No | Yes |
