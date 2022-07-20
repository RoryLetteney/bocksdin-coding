# 5 cities
# genome length of 20 (1 for each connection)
# value (distance)
# lowest distance containing all 5 cities wins

import random


cities = [1, 2, 3]
cost_to_optimize = 'distance'


class Route:
  def __init__(self, origin, destination, distance, avg_speed):
    self.origin = origin
    self.destination = destination
    self.distance = distance # in miles
    self.avg_speed = avg_speed # in miles per hour
    self.travel_time = distance / avg_speed
# END OF ROUTE CLASS


class Traveler:
  def __init__(self, routes):
    self.routes = routes
    self.chromosome = []

    for _ in range(len(routes)):
      if random.random() > 0.5:
        self.chromosome.append(1)
      else:
        self.chromosome.append(0)

  def fitness(self):
    cost = 0
    cities_visited = []

    for i in range(len(self.chromosome)):
      if self.chromosome[i] == 1:
        cities_visited.append(self.routes[i].origin)
        cities_visited.append(self.routes[i].destination)
        cost += self.routes[i][cost_to_optimize]

    if ','.join(sorted(list(set(cities_visited)))) != ','.join(cities):
      cost = float('inf')

    self.cost = cost

  def crossover(self, other_traveler):
    cutoff = round(len(self.chromosome) / 2)

    child1 = other_traveler.chromosome[0:cutoff] + self.chromosome[cutoff:]
    child2 = self.chromosome[0:cutoff] + other_traveler.chromosome[cutoff:]

    children = [Traveler(self.routes),
                Traveler(self.routes)]
    children[0].chromosome = child1
    children[1].chromosome = child2
    
    return children

  def mutation(self, rate=0.01):
    for i in range(len(self.chromosome)):
      if random() < rate:
        if self.chromosome[i] == 0:
          self.chromosome[i] = 1
        else:
          self.chromosome[i] = 0
# END OF TRAVELER CLASS
