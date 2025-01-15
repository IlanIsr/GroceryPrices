type Neighborhood = {
  id: string;
  name: string;
}

type NeighborhoodOmitId = Omit<Neighborhood, "id">;

export type { Neighborhood, NeighborhoodOmitId };
