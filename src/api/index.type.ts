type EndpointParameter = {
  name: string;
  type: string;
  required: boolean;
  description: string;
};

type Endpoint = {
  path: string;
  method: string;
  description: string;
  apiFunction: (...args: any[]) => Promise<any>;
  parameters?: EndpointParameter[];
};

type TableEndpoints = {
  tableName: string;
  endpoints: Endpoint[];
};

export type { TableEndpoints, Endpoint, EndpointParameter };
