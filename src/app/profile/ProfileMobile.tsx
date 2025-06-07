"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "@/graphql/queries/me.queries";
import { UPDATE_ME } from "@/graphql/mutations/me.mutations";
import { Box, Heading, Text, Button, TextField, Flex, Spinner } from "@radix-ui/themes";
import { signOut } from "next-auth/react";

export default function ProfileMobile() {
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

  useEffect(() => {
    if (editing && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [editing]);

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

  const passwordValid =
    !form.newPassword ||
    (/^(?=.*\d).{6,}$/.test(form.newPassword) && form.newPassword === form.confirmNewPassword);

  const passwordError =
    form.newPassword && form.newPassword.length < 6
      ? "La contraseña debe tener al menos 6 caracteres."
      : form.newPassword && !/\d/.test(form.newPassword)
      ? "La contraseña debe contener al menos un número."
      : form.newPassword && form.newPassword !== form.confirmNewPassword
      ? "Las contraseñas no coinciden."
      : "";

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
        setForm((f) => ({ ...f, oldPassword: "", newPassword: "", confirmNewPassword: "" }));
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
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-start pt-6 px-3 bg-gradient-to-b from-blue-200 to-blue-100">
      {/* Avatar y encabezado */}
      <div className="flex flex-col items-center w-full mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl text-blue-600 border border-blue-200 shadow-sm mb-3">
          {user?.firstName ? user.firstName[0] : ""}
        </div>
        <Heading size="6" className="mb-0 text-center w-full font-bold">Mi perfil</Heading>
        <Text color="gray" size="2" className="mb-3 w-full text-center">
          Rol: <b className="uppercase">{user?.role}</b>
        </Text>
      </div>

      {/* Botón Editar visible solo en modo visualización */}
      {!editing && (
        <div className="w-full flex justify-end mb-2">
          <Button
            onClick={() => setEditing(true)}
            type="button"
            size="3"
            className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-2"
          >
            Editar
          </Button>
        </div>
      )}

      {/* Formulario o vista solo lectura */}
      <form
        onSubmit={handleSave}
        className={`w-full max-w-sm mx-auto flex flex-col ${editing ? "gap-4" : "gap-3"} mb-8`}
        autoComplete="off"
      >
        <TextField.Root
          ref={firstInputRef}
          value={form.firstName}
          onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
          onKeyDown={handleKeyDown}
          placeholder="Nombre"
          disabled={!editing}
          className="w-full text-base"
          size="3"
        />
        <TextField.Root
          value={form.lastName}
          onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
          onKeyDown={handleKeyDown}
          placeholder="Apellidos"
          disabled={!editing}
          className="w-full text-base"
          size="3"
        />
        <TextField.Root
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          onKeyDown={handleKeyDown}
          placeholder="Email"
          disabled={!editing}
          className="w-full text-base"
          size="3"
        />

        {editing && (
          <>
            <TextField.Root
              value={form.oldPassword}
              onChange={(e) => setForm((f) => ({ ...f, oldPassword: e.target.value }))}
              onKeyDown={handleKeyDown}
              placeholder="Contraseña actual"
              type="password"
              className="w-full text-base"
              autoComplete="current-password"
              required={!!form.newPassword}
              disabled={updating}
              size="3"
            />
            <TextField.Root
              value={form.newPassword}
              onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))}
              onKeyDown={handleKeyDown}
              placeholder="Nueva contraseña"
              type="password"
              className="w-full text-base"
              autoComplete="new-password"
              disabled={updating}
              size="3"
            />
            <TextField.Root
              value={form.confirmNewPassword}
              onChange={(e) => setForm((f) => ({ ...f, confirmNewPassword: e.target.value }))}
              onKeyDown={handleKeyDown}
              placeholder="Confirmar nueva contraseña"
              type="password"
              className="w-full text-base"
              autoComplete="new-password"
              disabled={updating}
              size="3"
            />
          </>
        )}
        {passwordError && <Text color="red" size="1">{passwordError}</Text>}
        {error && <Text color="red" size="1">{error}</Text>}
        {success && <Text color="green" size="1">{message}</Text>}

        {editing && (
          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              size="3"
              className="flex-1 bg-blue-600 text-white font-semibold rounded-lg"
              disabled={updating || (form.newPassword ? !passwordValid : false)}
            >
              {updating ? "Guardando..." : "Guardar"}
            </Button>
            <Button
              type="button"
              variant="soft"
              size="3"
              className="flex-1 rounded-lg"
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
          </div>
        )}
        <input type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
}
