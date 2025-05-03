import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function Home() {
  return (
    <Theme>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a Atlas</h1>
        <p className="text-lg">Tu plataforma de gestión legal</p>
      </main>
    </Theme>
  );
}
