import ViewLayout from "..";

export default function ProductsView() {
  return (
    <ViewLayout
      title="Products"
      description="Manage your product catalog"
      actions={
        <button className="bg-database-accent hover:bg-database-accent-hover text-white px-4 py-2 rounded-md">
          Add Product
        </button>
      }
    >
      <div className="p-4">
        {/* Your products content here */}
      </div>
    </ViewLayout>
  );
} 