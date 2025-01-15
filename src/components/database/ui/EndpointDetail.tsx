import { useState, useEffect } from 'react';
import { StatusBadge } from './StatusBadge';
import { EndpointParameter } from '@/api/index.type';

interface EndpointDetailProps {
  tableName: string;
  endpoint: {
    method: string;
    path: string;
    description: string;
    apiFunction: (...args: any[]) => Promise<any>;
    parameters?: EndpointParameter[];
  };
}

export const EndpointDetail = ({ tableName, endpoint }: EndpointDetailProps) => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<number | null>(null);
  const [paramValues, setParamValues] = useState<Record<string, string>>({});

  // Reset response and status when endpoint changes
  useEffect(() => {
    setResponse(null);
    setStatus(null);
    setParamValues({});
  }, [endpoint]);

  const handleParamChange = (paramName: string, value: string) => {
    setParamValues(prev => ({
      ...prev,
      [paramName]: value
    }));
  };

  const handleSendRequest = async () => {
    setLoading(true);
    try {
      // Convert parameters to their appropriate types and create args object
      const args = endpoint.parameters?.reduce((acc, param) => {
        const value = paramValues[param.name];
        acc[param.name] = param.type === 'number' ? Number(value) : value;
        return acc;
      }, {} as Record<string, any>) || {};

      console.log("args", args);

      const data = await endpoint.apiFunction(args);
      setResponse(data);
      setStatus(200);
    } catch (error) {
      setResponse({ error: 'Failed to fetch data' });
      setStatus(500);
    }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 bg-database-tertiary rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Request Details</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Method:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              endpoint.method === 'GET' ? 'bg-database-status-blue-bg text-database-status-blue-text' :
              endpoint.method === 'POST' ? 'bg-database-status-green-bg text-database-status-green-text' :
              endpoint.method === 'PUT' ? 'bg-database-status-yellow-bg text-database-status-yellow-text' :
              'bg-database-status-red-bg text-database-status-red-text'
            }`}>
              {endpoint.method}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Path:</span>
            <span className="font-mono text-sm">{endpoint.path}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Parameters */}
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-300">Parameters</h3>
              {endpoint.parameters.map((param, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <label className="text-sm text-gray-400">
                    {param.name}
                    {param.required && <span className="text-database-status-red-text ml-1">*</span>}
                  </label>
                  <input
                    type={param.type === 'number' ? 'number' : 'text'}
                    value={paramValues[param.name] || ''}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                    placeholder={param.description}
                    className="bg-database-hover text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-database-accent"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <button
            onClick={handleSendRequest}
            disabled={loading}
            className="bg-database-accent text-white px-4 py-2 rounded-lg hover:bg-database-accent-hover disabled:bg-database-accent/50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Sending...' : 'Send Request'}
          </button>

          {/* Response */}
          {response && (
            <div className="bg-database-tertiary rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-300">Response</h3>
                {status && <StatusBadge status={status} />}
              </div>
              <div className="bg-database-primary rounded-lg p-4 font-mono text-sm">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};