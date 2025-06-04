// src/components/user/ClientList.tsx
'use client';

import { useState } from 'react';
import { Box, Table, Text, Button as RadixButton, Spinner, Flex } from '@radix-ui/themes';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '@/graphql/mutations/user.mutations';
import { GET_USERS } from '@/graphql/queries';
import { Role } from '@/types/user.types';
import UserSearchBackend from './UserSearchBackend';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { TrashIcon } from '@radix-ui/react-icons';

export default function ClientList({}: {}) {
  const [search, setSearch] = useState('');
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: Role.CLIENT, search },
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
  const users = data?.users || [];
  return (
    <>
      <UserSearchBackend
        search={search}
        onChange={setSearch}
        onManualSearch={() => refetch()}
        autoFocus
      />
      {loading ? <Spinner /> : error ? (
        <Text color="red">Error al cargar clientes</Text>
      ) : (
        <Table.Root variant="surface" style={{ marginTop: 16 }}>
          <Table.Header>
            <Table.Row>
              <Table.Cell><b>Nombre</b></Table.Cell>
              <Table.Cell><b>Email</b></Table.Cell>
              <Table.Cell><b>Estado</b></Table.Cell>
              <Table.Cell><b>Acciones</b></Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((u: any) => (
              <Table.Row key={u.id}>
                <Table.Cell>{u.firstName} {u.lastName}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.isActive ? 'Activo' : 'Inactivo'}</Table.Cell>
                <Table.Cell>
                  <AlertDialog open={showDialog && deleteId === u.id} onOpenChange={open => { if (!open) setShowDialog(false); }}>
                    <AlertDialogTrigger asChild>
                      <RadixButton color="red" variant="soft" size="1" onClick={() => { setDeleteId(u.id); setShowDialog(true); }} disabled={deleting} aria-label={`Eliminar usuario ${u.firstName} ${u.lastName}`}>
                        <TrashIcon />
                      </RadixButton>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Eliminar usuario?</AlertDialogTitle>
                        <AlertDialogDescription>
                          ¿Estás seguro de que deseas eliminar al usuario "{u.firstName} {u.lastName}"? Esta acción no se puede deshacer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          disabled={deleting}
                          onClick={() => deleteUser({ variables: { id: u.id } })}
                        >
                          {deleting ? 'Eliminando...' : 'Eliminar'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </>
  );
}
