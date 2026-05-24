---
title: Genetic Algorithms
description: Upload notes for genetic algorithms.
---

## Overview

A Genetic Algorithm (GA) is an optimization and search technique inspired by natural evolution.
It works by creating a population of possible solutions, evaluating their fitness, and repeatedly
applying selection, crossover, and mutation to generate better solutions over generations.
The goal is to evolve an optimal or near-optimal solution to a problem

### Population
Population refers to the group of candidate solutions used in the Genetic Algorithm. Each individual
in the population represents a possible solution to the problem. The algorithm starts with an initial
population, usually generated randomly, and improves it over multiple generations.

### Fitness Function
The fitness function evaluates the quality of each solution. It assigns a fitness score based on how well
the individual solves the problem. Solutions with higher fitness values are considered better and are more
likely to be selected for reproduction.

### Selection
Selection is the process of choosing individuals from the population to create the next generation. Individuals
with better fitness scores have a higher probability of being selected. Common selection methods include roulette
wheel selection and tournament selection.

### Crossover
Crossover is a genetic operation where two parent solutions combine parts of their chromosomes to produce offspring.
This process helps transfer good characteristics from parents to children and explores new possible solutions.

### Mutation
Mutation introduces random changes in individuals after crossover. It helps maintain genetic diversity in the population
and prevents the algorithm from converging too early to a local optimum.

### Termination Criteria
Termination criteria determine when the Genetic Algorithm should stop running. The algorithm may terminate after reaching
a fixed number of generations, finding an optimal solution, or when there is no significant improvement in fitness values.

## Problems

- [N Queens Problem](./n-queens-problem/)

## Implementations

### Pseudocode

```text
START

Create initial population randomly

WHILE termination criteria is not met:
    Evaluate fitness of each individual
    Select parent individuals
    Apply crossover to create offspring
    Apply mutation to offspring
    Replace old population with new population

Return the best solution

END
```

### Python
```py
import random

population = [random.randint(0, 100) for _ in range(10)]

def fitness(x):
    return x * x

for generation in range(20):
    population = sorted(population, key=fitness, reverse=True)

    parents = population[:2]

    offspring = []
    for _ in range(8):
        child = (parents[0] + parents[1]) // 2
        child += random.randint(-5, 5)
        offspring.append(child)

    population = parents + offspring

best = max(population, key=fitness)
print("Best solution:", best)
print("Fitness:", fitness(best))
```

## Tutorial

<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        src="https://www.youtube.com/embed/CRtZ-APJEKI?si=duhtaSbJZovTRAx0&amp;start=18"
        title="Geentic Algorithm"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>
