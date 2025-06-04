// src/components/user/ProfessionalList.tsx
'use client';

import { useState } from 'react';
import { Box, Table, Text, Button as RadixButton, Spinner, Flex } from '@radix-ui/themes';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '@/graphql/mutations/user.mutations';
import { GET_USERS } from '@/graphql/queries';
import { Role } from '@/types/user.types';
import UserSearchBackend from './UserSearchBackend';

export default function ProfessionalList({}: {}) {
  const [search, setSearch] = useState('');
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: [Role.PROFESSIONAL, Role.ADMIN], search },
    fetchPolicy: 'cache-and-network',
  });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [deleteUser, { loading: deleting }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      setShowDialog(false);
      setDeleteId(null);
      refetch();
    },
    onError: () => {
      setShowDialog(false);
      setDeleteId(null);
    }
  });
  let users = data?.users || [];
  if (Array.isArray(users) && users.length > 0 && typeof users[0].role !== 'undefined') {
    users = users.filter((u: any) => u.role === Role.PROFESSIONAL || u.role === Role.ADMIN);
  }
  return (
    <>
      <UserSearchBackend
        search={search}
        onChange={setSearch}
        onManualSearch={() => refetch()}
        autoFocus
      />
      {loading ? <Spinner /> : error ? (
        <Text color="red">Error al cargar profesionales</Text>
      ) : (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.Cell><b>Nombre</b></Table.Cell>
              <Table.Cell><b>Email</b></Table.Cell>
              <Table.Cell><b>Rol</b></Table.Cell>
              <Table.Cell><b>Estado</b></Table.Cell>
              <Table.Cell><b>Acciones</b></Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((u: any) => (
              <Table.Row key={u.id}>
                <Table.Cell>{u.firstName} {u.lastName}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.role}</Table.Cell>
                <Table.Cell>{u.isActive ? 'Activo' : 'Inactivo'}</Table.Cell>
                <Table.Cell>
                  <RadixButton color="red" onClick={() => { setDeleteId(u.id); setShowDialog(true); }} disabled={deleting}>Eliminar</RadixButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
      {/* Dialogo de confirmación de borrado */}
      {showDialog && (
        <Box className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <Box className="bg-white p-6 rounded shadow">
            <Text>¿Seguro que quieres eliminar este usuario?</Text>
            <Flex gap="2" mt="4">
              <RadixButton color="red" onClick={() => deleteUser({ variables: { id: deleteId } })} disabled={deleting}>Eliminar</RadixButton>
              <RadixButton onClick={() => setShowDialog(false)} variant="outline">Cancelar</RadixButton>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
}
