import { Theme, Button } from '@radix-ui/themes';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <Theme>
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                Atlas
              </Link>
            </div>
            
            <div className="flex items-center">
              {session ? (
                <>
                  <span className="mr-4">{session.user?.email}</span>
                  <Button onClick={() => signOut()}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <Link href="/auth/signin">
                  <Button>
                    Iniciar sesión
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </Theme>
  );
} 