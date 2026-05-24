---
title: Minimax
description: A decision algorithm for choosing optimal moves in two-player zero-sum games.
---
Minimax is an adversarial search algorithm used in two-player zero-sum games where one player
tries to maximize the score while the opponent tries to minimize it. The algorithm explores
possible future moves in a game tree, assuming both players make optimal decisions. The maximizing
player selects the move with the highest value, while the minimizing player chooses the move with
the lowest value, allowing the AI to determine the best possible strategy.

### Max Player and Min Player

In Minimax, the **Max player** tries to maximize the score or utility value, while the **Min player** tries to minimize it.
The algorithm assumes both players always make the best possible move.

- Max Player → Chooses highest value
- Min Player → Chooses lowest value

### Terminal States

Terminal states are the final states of the game where no further moves are possible.

Examples:
- Win
- Loss
- Draw

These states are assigned utility values and stop further tree expansion.

### Utility Function

The utility function assigns numerical values to terminal states.

Example:

- `+1` → Max wins
- `0` → Draw
- `-1` → Min wins

The algorithm uses these values to determine the best move.

### Game Tree Traversal

Minimax traverses the game tree using depth-first search.

Steps:
1. Generate possible moves
2. Expand future states
3. Evaluate terminal states
4. Propagate values upward
5. Select optimal move

Max levels choose maximum values, while Min levels choose minimum values.

### Example Trace

Suppose Max has two choices:

- Left branch terminal values → `{3, 5}`
  - Min chooses `3`

- Right branch terminal values → `{2, 9}`
  - Min chooses `2`

Max compares:
```text
max(3, 2) = 3
```

So Max selects the left branch.

## Implementation

### Pseudocode
```text
function minimax(node, depth, isMaxPlayer):
    if node is terminal or depth == 0:
        return utility(node)

    if isMaxPlayer:
        best = -infinity

        for each child of node:
            value = minimax(child, depth - 1, false)
            best = max(best, value)

        return best

    else:
        best = +infinity

        for each child of node:
            value = minimax(child, depth - 1, true)
            best = min(best, value)

        return best
```

### Python
```py
def minimax(node, depth, is_max_player):
    if depth == 0 or isinstance(node, int):
        return node

    if is_max_player:
        best = float("-inf")

        for child in node:
            value = minimax(child, depth - 1, False)
            best = max(best, value)

        return best

    else:
        best = float("inf")

        for child in node:
            value = minimax(child, depth - 1, True)
            best = min(best, value)

        return best


game_tree = [
    [3, 5],
    [2, 9]
]

result = minimax(game_tree, 2, True)
print("Best value for Max:", result)
```
output:
```text
Best value for Max: 3
```

## Tutorial

<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        src="https://www.youtube.com/embed/l-hh51ncgDI?si=0GX7nGTqeH75o8k_"
        title="Mini Max"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
    </iframe>
</div>
