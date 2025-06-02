'use client';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Theme accentColor="blue" appearance="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Theme>
  );
}