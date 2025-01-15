import { Endpoint } from "@/api";

interface EndpointButtonProps {
  endpoint: Endpoint;
  tableName: string;
  isSelected: boolean;
  onSelect: (tableName: string, endpoint: Endpoint) => void;
}

export const EndpointButton = ({ endpoint, tableName, isSelected, onSelect }: EndpointButtonProps) => {
  return (
    <button
      onClick={() => onSelect(tableName, endpoint)}
      className={`w-full text-left p-3 rounded-lg hover:bg-database-hover transition-colors
        ${isSelected ? "bg-database-hover" : ""}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`text-xs px-3 py-1 h-fit rounded min-w-[60px] text-center ${
            endpoint.method === "GET"
              ? "bg-database-status-blue-bg text-database-status-blue-text"
              : endpoint.method === "POST"
              ? "bg-database-status-green-bg text-database-status-green-text"
              : endpoint.method === "PUT"
              ? "bg-database-status-yellow-bg text-database-status-yellow-text"
              : "bg-database-status-red-bg text-database-status-red-text"
          }`}
        >
          {endpoint.method}
        </span>
        <div className="flex-grow">
          <div className="font-mono text-sm">{endpoint.path}</div>
          <p className="text-sm text-gray-400 mt-1">{endpoint.description}</p>
        </div>
      </div>
    </button>
  );
}; 