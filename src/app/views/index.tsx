import { ReactNode } from "react";

interface ViewLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function ViewLayout({ 
  children, 
  title, 
  description, 
  actions 
}: ViewLayoutProps) {
  return (
    <div className="min-h-screen bg-database-primary">
      {/* Header */}
      <header className="bg-database-tertiary border-b border-database-border">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              {description && (
                <p className="mt-1 text-sm text-gray-400">{description}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-3">
                {actions}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-database-secondary rounded-lg border border-database-border">
          {children}
        </div>
      </main>
    </div>
  );
} 