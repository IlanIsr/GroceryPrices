import { useState, useEffect } from "react";
import { fetchAllNeighborhoods } from "@/api/neighborhoods/requests/getNeighborhoods";
import { fetchAllSupermarkets } from "@/api/supermarkets/requests/getSupermarkets";
import { fetchAllBranches } from "@/api/branches/requests/getBranches";
import { Neighborhood } from "@/api/neighborhoods/index.type";
import { Supermarket } from "@/api/supermarkets/index.type";
import { Branch } from "@/api/branches/index.type";

export default function ReceiptEntryPage() {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [supermarkets, setSupermarkets] = useState<Supermarket[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("");
  const [selectedSupermarket, setSelectedSupermarket] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [neighborhoodsData, supermarketsData, branchesData] = await Promise.all([
          fetchAllNeighborhoods(),
          fetchAllSupermarkets(),
          fetchAllBranches(),
        ]);
        setNeighborhoods(neighborhoodsData);
        setSupermarkets(supermarketsData);
        setBranches(branchesData);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset branch selection when neighborhood or supermarket changes
  useEffect(() => {
    setSelectedBranch("");
  }, [selectedNeighborhood, selectedSupermarket]);

  const filteredBranches = branches.filter((branch) => {
    const matchesNeighborhood = !selectedNeighborhood || branch.neighborhood_id.toString() === selectedNeighborhood;
    const matchesSupermarket = !selectedSupermarket || branch.supermarket_id.toString() === selectedSupermarket;
    return matchesNeighborhood && matchesSupermarket;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">New Receipt</h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">
              Neighborhood
            </label>
            <select
              id="neighborhood"
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a neighborhood</option>
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood.id} value={neighborhood.id}>
                  {neighborhood.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="supermarket" className="block text-sm font-medium text-gray-700">
              Supermarket
            </label>
            <select
              id="supermarket"
              value={selectedSupermarket}
              onChange={(e) => setSelectedSupermarket(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a supermarket</option>
              {supermarkets.map((supermarket) => (
                <option key={supermarket.id} value={supermarket.id}>
                  {supermarket.name}
                </option>
              ))}
            </select>
          </div>

          {(selectedNeighborhood || selectedSupermarket) && (
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <select
                id="branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a branch</option>
                {filteredBranches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.address}
                  </option>
                ))}
              </select>
              {filteredBranches.length === 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  No branches found for the selected criteria
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 