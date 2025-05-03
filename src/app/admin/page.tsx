import { Theme } from '@radix-ui/themes';

export default function AdminDashboard() {
  return (
    <Theme>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Panel de Administración</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aquí irán los widgets del dashboard */}
        </div>
      </main>
    </Theme>
  );
} 