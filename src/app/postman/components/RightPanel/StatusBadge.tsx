interface StatusBadgeProps {
  status: number;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = () => {
    if (status < 300) return 'bg-database-status-green-bg text-database-status-green-text';
    if (status < 400) return 'bg-database-status-blue-bg text-database-status-blue-text';
    if (status < 500) return 'bg-database-status-yellow-bg text-database-status-yellow-text';
    return 'bg-database-status-red-bg text-database-status-red-text';
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${getStatusColor()}`}>
      {status}
    </span>
  );
};