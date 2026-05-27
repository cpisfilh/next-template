//Sólo usar este componente para probar la implementación de better-auth
// Renderizarlo en el layout principal para probar el registro de usuarios
// Click en botón
// Verificar la base de datos

// Se recomienda borrar este componente después de probar !!
"use client";

import { authClient } from "@/lib/auth-client";

export default function TestRegister() {
  const handleRegister = async () => {
    const { data, error } = await authClient.signUp.email({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password1234",
    });

    console.log(data);
    console.log(error);
  };

  return (
    <button onClick={handleRegister}>
      Crear usuario
    </button>
  );
}
