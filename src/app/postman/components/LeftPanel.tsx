import { AVAILABLE_ENDPOINTS, Endpoint } from "@/api";
import { EndpointButton } from "./EndpointButton";
import { useState } from 'react';

interface LeftPanelProps {
  selectedEndpoint: Endpoint | null;
  onEndpointSelect: (tableName: string, endpoint: Endpoint) => void;
}

export const LeftPanel = ({ selectedEndpoint, onEndpointSelect }: LeftPanelProps) => {
  const [expandedTables, setExpandedTables] = useState<Set<string>>(new Set());

  const toggleTable = (tableName: string) => {
    setExpandedTables(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tableName)) {
        newSet.delete(tableName);
      } else {
        newSet.add(tableName);
      }
      return newSet;
    });
  };

  return (
    <div className="w-[400px] border-r border-database-border bg-database-secondary overflow-y-auto">
      <div className="p-3 bg-database-tertiary border-b border-database-border">
        <h2 className="text-lg font-semibold">Available Endpoints</h2>
      </div>
      <div className="space-y-1">
        {AVAILABLE_ENDPOINTS.map((table, index) => (
          <div key={index} className="px-3 py-2">
            <button
              onClick={() => toggleTable(table.tableName)}
              className="flex items-center w-full text-xl font-medium text-gray-300 mb-3 hover:text-gray-100"
            >
              <span className="transform transition-transform duration-200 mr-2">
                {expandedTables.has(table.tableName) ? '▼' : '▶'}
              </span>
              {table.tableName}
            </button>
            {expandedTables.has(table.tableName) && (
              <div className="ml-4 space-y-2">
                {table.endpoints.map((endpoint, index) => (
                  <EndpointButton
                    key={index}
                    endpoint={endpoint}
                    tableName={table.tableName}
                    isSelected={selectedEndpoint === endpoint}
                    onSelect={onEndpointSelect}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 