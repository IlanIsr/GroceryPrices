import { Endpoint, EndpointParameter } from "@/api/index.type";
import { useState } from "react";
import { EndpointDetail } from "./EndpointDetail";

interface RightPanelProps {
  selectedEndpoint: Endpoint | null;
  selectedTable: string;
}

export const RightPanel = ({
  selectedEndpoint,
  selectedTable,
}: RightPanelProps) => {
  const [paramValues, setParamValues] = useState<Record<string, string>>({});

  const handleParamChange = (param: EndpointParameter, value: string) => {
    setParamValues((prev) => ({
      ...prev,
      [param.name]: value,
    }));
  };

  return (
    <div className="flex-1 bg-database-primary h-screen overflow-y-auto">
      {selectedEndpoint ? (
        <div className="p-4">
          <div className="sticky top-0 bg-database-primary z-10 pb-4">
            <EndpointDetail
              endpoint={selectedEndpoint}
              tableName={selectedTable}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <div className="w-16 h-16 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full opacity-20"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
              <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />
            </svg>
          </div>
          <p className="text-xl mb-2">Select an endpoint</p>
          <p className="text-sm">
            Choose from the available endpoints on the left
          </p>
        </div>
      )}
    </div>
  );
};
