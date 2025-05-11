// Interfaces para las constelaciones
export interface ConstellationBase {
  id: string;
  name: string;
  description?: string | null;
}

export interface ConstellationWithServers extends ConstellationBase {
  servers: {
    id: string;
    name: string;
    domain: string;
    isActive: boolean;
  }[];
}
