export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Contenu principal */}
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Bienvenue dans l'application !
        </h2>
        <p className="text-gray-700">
          Utilisez la barre de navigation pour accéder aux différentes pages de
          l'application.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-8">
        <p>&copy; 2025 My Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
