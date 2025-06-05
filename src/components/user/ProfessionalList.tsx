// src/components/user/ProfessionalList.tsx
'use client';

import { useState } from 'react';
import { Box, Table, Text, Button as RadixButton, Spinner, Flex } from '@radix-ui/themes';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '@/graphql/mutations/user.mutations';
import { GET_USERS } from '@/graphql/queries';
import { Role } from '@/types/user.types';
import UserSearchBackend from './UserSearchBackend';
import { useConfirmDelete } from '@/hooks/useConfirmDelete';
import DeleteButtonWithConfirm from '@/components/ui/DeleteButtonWithConfirm';

export default function ProfessionalList({}: object) {
  const [search, setSearch] = useState('');
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: [Role.PROFESSIONAL, Role.ADMIN], search },
    fetchPolicy: 'cache-and-network',
  });
  const [deleteUser, { loading: deleting }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
    },
    onError: () => {
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
        <Table.Root variant="surface" style={{ marginTop: 16 }}>
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
                  <DeleteButtonWithConfirm
                    id={u.id}
                    name={`${u.firstName} ${u.lastName}`}
                    loading={deleting}
                    onConfirm={() => deleteUser({ variables: { id: u.id } })}
                    title="¿Eliminar usuario?"
                    description={`¿Estás seguro de que deseas eliminar al usuario "${u.firstName} ${u.lastName}"? Esta acción no se puede deshacer.`}
                    ariaLabel={`Eliminar usuario ${u.firstName} ${u.lastName}`}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </>
  );
}
