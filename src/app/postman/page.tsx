"use client";

import { useState } from "react";
import { Endpoint } from "@/api/index.type";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel/RightPanel";

const PostmanPage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(
    null
  );
  const [selectedTable, setSelectedTable] = useState<string>("");

  const handleEndpointSelect = (tableName: string, endpoint: Endpoint) => {
    setSelectedTable(tableName);
    setSelectedEndpoint(endpoint);
  };

  return (
    <div className="flex flex-col h-screen bg-database-primary">
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel
          selectedEndpoint={selectedEndpoint}
          onEndpointSelect={handleEndpointSelect}
        />
        <RightPanel
          selectedEndpoint={selectedEndpoint}
          selectedTable={selectedTable}
        />
      </div>
    </div>
  );
};

export default PostmanPage;
