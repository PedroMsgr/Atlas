"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "@/graphql/queries/me.queries";
import { UPDATE_ME } from "@/graphql/mutations/me.mutations";
import {
  Box,
  Heading,
  Text,
  Button,
  TextField,
  Flex,
  Spinner,
} from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import BanishTransition from "@/components/ui/BanishTransition";

export default function ProfileDesktop() {
  const { data, loading: loadingMe, refetch } = useQuery(GET_ME);
  const [updateMe, { loading: updating }] = useMutation(UPDATE_ME);
  const user = data?.me;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // CAMBIO: Referencia para el primer campo editable
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user && !editing) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, [user, editing]);

  // CAMBIO: Cuando cambias a modo edición, enfoca el primer campo
  useEffect(() => {
    if (editing && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [editing]);

  // Cuando cambias a modo edición, limpia los campos de contraseña
  useEffect(() => {
    if (editing) {
      setForm((f) => ({
        ...f,
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    }
  }, [editing]);

  // Validación de contraseñas igual que antes
  const passwordValid =
    !form.newPassword ||
    (/^(?=.*\d).{6,}$/.test(form.newPassword) &&
      form.newPassword === form.confirmNewPassword);

  const passwordError =
    form.newPassword && form.newPassword.length < 6
      ? "La contraseña debe tener al menos 6 caracteres."
      : form.newPassword && !/\d/.test(form.newPassword)
      ? "La contraseña debe contener al menos un número."
      : form.newPassword && form.newPassword !== form.confirmNewPassword
      ? "Las contraseñas no coinciden."
      : "";

  // CAMBIO: Nuevo handler para evitar submit por Enter en campos de texto
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!editing && e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    setMessage("");
    if (form.newPassword && !passwordValid) {
      setError(passwordError);
      return;
    }
    try {
      const { data: result } = await updateMe({
        variables: {
          data: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            oldPassword: form.newPassword ? form.oldPassword : undefined,
            newPassword: form.newPassword || undefined,
          },
        },
      });
      if (result?.updateMe?.status) {
        setSuccess(true);
        setMessage(result.updateMe.message);
        setEditing(false);
        setForm((f) => ({
          ...f,
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }));
        refetch();
        if (form.newPassword) {
          setTimeout(() => signOut({ callbackUrl: "/auth/signin" }), 2000);
        }
      } else {
        setError(result?.updateMe?.message || "Error al actualizar el perfil");
      }
    } catch (err: any) {
      setError(err.message || "Error al actualizar el perfil");
    }
  };

  if (loadingMe) {
    return (
      <Flex align="center" justify="center" className="min-h-[40vh]">
        <Spinner size="3" />
      </Flex>
    );
  }

  return (
    <BanishTransition show={true} key="desktop-profile" duration={0.4}>
      <Box className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
        <Flex direction="column" align="center" gap="4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-500 border mb-4">
            {user?.firstName ? user.firstName[0] : ""}
          </div>
          <Heading size="6">Mi perfil</Heading>
          <Text color="gray" size="3">
            Rol: <b>{user?.role}</b>
          </Text>
          {/* Botón Editar fuera del form para máxima robustez */}
          {!editing && (
            <Flex gap="3" justify="end" className="w-full mb-2">
              <Button onClick={() => setEditing(true)} type="button">
                Editar
              </Button>
            </Flex>
          )}
          <form
            onSubmit={handleSave}
            className="w-full mt-4 space-y-4"
            autoComplete="off"
          >
            {/* CAMBIO: inputRef y onKeyDown */}
            <TextField.Root
              ref={firstInputRef}
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
              onKeyDown={handleKeyDown}
              placeholder="Nombre"
              disabled={!editing}
              className="w-full"
            />
            <TextField.Root
              value={form.lastName}
              onChange={(e) =>
                setForm((f) => ({ ...f, lastName: e.target.value }))
              }
              onKeyDown={handleKeyDown}
              placeholder="Apellidos"
              disabled={!editing}
              className="w-full"
            />
            <TextField.Root
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              onKeyDown={handleKeyDown}
              placeholder="Email"
              disabled={!editing}
              className="w-full"
            />
            {editing && (
              <>
                <TextField.Root
                  value={form.oldPassword}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, oldPassword: e.target.value }))
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Contraseña actual"
                  type="password"
                  className="w-full"
                  autoComplete="current-password"
                  required={!!form.newPassword}
                  disabled={updating}
                />
                <TextField.Root
                  value={form.newPassword}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, newPassword: e.target.value }))
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Nueva contraseña"
                  type="password"
                  className="w-full"
                  autoComplete="new-password"
                  disabled={updating}
                />
                <TextField.Root
                  value={form.confirmNewPassword}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      confirmNewPassword: e.target.value,
                    }))
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Confirmar nueva contraseña"
                  type="password"
                  className="w-full"
                  autoComplete="new-password"
                  disabled={updating}
                />
                {passwordError && (
                  <Text color="red" size="2">
                    {passwordError}
                  </Text>
                )}
              </>
            )}
            {error && (
              <Text color="red" size="2">
                {error}
              </Text>
            )}
            {success && (
              <Text color="green" size="2">
                {message}
              </Text>
            )}
            {editing && (
              <Flex gap="3" justify="end">
                <Button
                  type="submit"
                  disabled={
                    updating || (form.newPassword ? !passwordValid : false)
                  }
                >
                  {updating ? "Guardando..." : "Guardar"}
                </Button>
                <Button
                  type="button"
                  variant="soft"
                  onClick={() => {
                    setEditing(false);
                    setError("");
                    setSuccess(false);
                    setForm((f) => ({
                      ...f,
                      oldPassword: "",
                      newPassword: "",
                      confirmNewPassword: "",
                    }));
                  }}
                >
                  Cancelar
                </Button>
              </Flex>
            )}
            <input type="submit" style={{ display: "none" }} />
          </form>
        </Flex>
      </Box>
    </BanishTransition>
  );
}
