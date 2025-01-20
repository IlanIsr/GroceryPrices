import { useState } from "react";
import { LeftPanel, RightPanel } from "@/components/database";
import Navbar from "@/app/Navbar";
import { Endpoint } from "@/api/index.type";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Database", href: "/database", current: true },
  { name: "App", href: "#", current: false },
];

const DatabasePage = () => {
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
      <div className="bg-database-secondary">
        <Navbar navbarItems={navigation} />
      </div>
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

export default DatabasePage;
