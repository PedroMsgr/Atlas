'use client';

import { useState, FormEvent } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

// Definición de la mutación GraphQL de login
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      message
      user {
        id
        email
        name
        role
      }
    }
  }
`;

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Configuración de la mutación GraphQL
  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: async (data) => {
      if (data.login.success) {
        // Usar directamente signIn de NextAuth con callbackUrl explícito
        try {
          const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
            callbackUrl: '/admin', // URL de redirección por defecto
          });

          console.log('NextAuth signIn result:', result);

          if (result?.ok) {
            // Redireccionar según el rol del usuario
            if (data.login.user.role === 'admin') {
              router.push('/admin');
            } else if (data.login.user.role === 'professional') {
              router.push('/pro');
            }
          } else {
            console.error('Error de NextAuth:', result?.error);
            setErrorMessage('Error al iniciar sesión: ' + (result?.error || 'Credenciales inválidas'));
          }
        } catch (error) {
          console.error('Error al llamar a NextAuth signIn:', error);
          setErrorMessage('Error en el proceso de autenticación');
        }
      } else {
        setErrorMessage(data.login.message || 'Error al iniciar sesión');
      }
      setIsLoading(false);
    },
    onError: (error) => {
      console.error('Error de login:', error);
      setErrorMessage(error.message || 'Error al iniciar sesión');
      setIsLoading(false);
    }
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    // Validación básica
    if (!email || !password) {
      setErrorMessage('Email y contraseña son requeridos');
      setIsLoading(false);
      return;
    }

    // Ejecutar la mutación GraphQL
    try {
      await loginMutation({
        variables: {
          email,
          password,
        }
      });
    } catch (error) {
      // Los errores se manejan en onError
      console.error('Error inesperado:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="tu@email.com"
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isLoading}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  );
}
