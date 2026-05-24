---
title: Alpha-Beta
description: A Minimax optimization that prunes branches that cannot affect the final decision.
---
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

## Implementation
### Pseudocode
```text
ALPHA-BETA(node, depth, alpha, beta, isMaxPlayer)

    IF node is terminal OR depth = 0
        RETURN utility(node)

    IF isMaxPlayer = TRUE

        value ← -∞

        FOR each child of node

            value ← MAX(value,
                        ALPHA-BETA(child, depth - 1,
                                   alpha, beta, FALSE))

            alpha ← MAX(alpha, value)

            IF alpha ≥ beta
                BREAK

        RETURN value

    ELSE

        value ← +∞

        FOR each child of node

            value ← MIN(value,
                        ALPHA-BETA(child, depth - 1,
                                   alpha, beta, TRUE))

            beta ← MIN(beta, value)

            IF alpha ≥ beta
                BREAK

        RETURN value
```

## Python

```python
def alpha_beta(node, depth, alpha, beta, is_max_player):

    if depth == 0 or isinstance(node, int):
        return node

    if is_max_player:
        value = float("-inf")

        for child in node:
            value = max(
                value,
                alpha_beta(child, depth - 1,
                           alpha, beta, False)
            )

            alpha = max(alpha, value)

            if alpha >= beta:
                break

        return value

    else:
        value = float("inf")

        for child in node:
            value = min(
                value,
                alpha_beta(child, depth - 1,
                           alpha, beta, True)
            )

            beta = min(beta, value)

            if alpha >= beta:
                break

        return value


game_tree = [
    [3, 5],
    [2, 9]
]

result = alpha_beta(
    game_tree,
    2,
    float("-inf"),
    float("inf"),
    True
)

print("Best value:", result)
```

output

```text
Best value: 3
```


## Tutorial

<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        src="https://www.youtube.com/embed/l-hh51ncgDI?si=8PzxoQKJl4UqgS7r&amp;start=317"
        title="Alpha Beta prunning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>
