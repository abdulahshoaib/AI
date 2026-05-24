---
title: N Queens Problem
description: Upload notes and examples for solving the N Queens problem with genetic algorithms.
---

## Overview

The N Queens Problem is a constraint satisfaction problem where the goal is to place `N` queens on an `N × N` chessboard so that no two queens attack each other. In a Genetic Algorithm, each board arrangement is treated as an individual solution, and the algorithm improves these solutions over multiple generations using fitness, selection, crossover, and mutation.

### State Representation

A state is represented as a list of `N` numbers.

Each index represents a column, and the value at that index represents the row where the queen is placed.

Example:

```text
[1, 3, 0, 2]
```

This means:

```text
Column 0 → Row 1
Column 1 → Row 3
Column 2 → Row 0
Column 3 → Row 2
```

This representation ensures that each column contains exactly one queen.

### Initial Population

The initial population is a group of randomly generated board states. Each individual represents one possible arrangement of queens on the board.

Example:

```text
[2, 0, 3, 1]
[1, 2, 0, 3]
[3, 0, 2, 1]
```

The population is usually random so that the algorithm can explore different possible solutions.

### Fitness Calculation

The fitness function checks how good a board arrangement is. It counts how many pairs of queens are not attacking each other.

Two queens attack each other if they are in the same row or on the same diagonal.

The maximum number of queen pairs is:

```text
N × (N - 1) / 2
```

For example, if `N = 8`:

```text
8 × 7 / 2 = 28
```

So, the best possible fitness for `8 Queens` is `28`.

### Selection Strategy

Selection chooses parent individuals from the population. Individuals with higher fitness scores are more likely to be selected because they represent better board arrangements.

A common strategy is to sort the population by fitness and select parents from the top-performing individuals.

### Crossover and Mutation

Crossover combines two parent states to produce a child state.

Example:

```text
Parent 1: [1, 3, 0, 2]
Parent 2: [2, 0, 3, 1]

Child:    [1, 3, 3, 1]
```

Mutation randomly changes one value in the child state.

Example:

```text
Before mutation: [1, 3, 3, 1]
After mutation:  [1, 0, 3, 1]
```

Mutation helps maintain diversity and prevents the algorithm from getting stuck in poor solutions.

### Solution Evaluation

A solution is valid when the fitness value reaches the maximum possible fitness. This means no two queens are attacking each other.

For `N = 8`, a valid solution has fitness `28`.

## Implementation

### Pseudocode

```text
START

Set N
Set population size
Set mutation rate
Set maximum generations

Create initial random population

FOR each generation:
    Calculate fitness of each individual

    IF any individual has maximum fitness:
        Return that individual as the solution

    Create an empty new population

    WHILE new population is not full:
        Select two parent individuals
        Apply crossover to create a child
        Apply mutation to the child
        Add child to new population

    Replace old population with new population

Return best individual found

END
```

### Python

```python
import random

N = 8
POPULATION_SIZE = 100
MAX_GENERATIONS = 1000
MUTATION_RATE = 0.1

def create_individual():
    return [random.randint(0, N - 1) for _ in range(N)]

def fitness(individual):
    non_attacking_pairs = 0

    for i in range(N):
        for j in range(i + 1, N):
            same_row = individual[i] == individual[j]
            same_diagonal = abs(individual[i] - individual[j]) == abs(i - j)

            if not same_row and not same_diagonal:
                non_attacking_pairs += 1

    return non_attacking_pairs

def select_parent(population):
    sorted_population = sorted(population, key=fitness, reverse=True)
    return random.choice(sorted_population[:20])

def crossover(parent1, parent2):
    point = random.randint(1, N - 2)
    child = parent1[:point] + parent2[point:]
    return child

def mutate(individual):
    if random.random() < MUTATION_RATE:
        index = random.randint(0, N - 1)
        individual[index] = random.randint(0, N - 1)

    return individual

population = [create_individual() for _ in range(POPULATION_SIZE)]
max_fitness = N * (N - 1) // 2

for generation in range(MAX_GENERATIONS):
    best = max(population, key=fitness)

    if fitness(best) == max_fitness:
        print("Solution found:", best)
        print("Generation:", generation)
        break

    new_population = []

    while len(new_population) < POPULATION_SIZE:
        parent1 = select_parent(population)
        parent2 = select_parent(population)

        child = crossover(parent1, parent2)
        child = mutate(child)

        new_population.append(child)

    population = new_population
else:
    best = max(population, key=fitness)
    print("Best solution found:", best)
    print("Fitness:", fitness(best))
```
