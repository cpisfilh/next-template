//Sólo usar este componente para probar la implementación de better-auth
// Renderizarlo en el layout principal para probar el registro de usuarios
// Click en botón
// Verificar la base de datos

// Se recomienda borrar este componente después de probar !!
"use client";

import { authClient } from "@/lib/auth-client";

export default function TestRegister() {
  const handleRegister = async () => {
    Array.from({length:20}, (_,i) => i+1).forEach(async (i) => {
      const { data, error } = await authClient.signUp.email({
        name: `John Doe ${i}`,
        email: `john.doe${i}@example.com`,
        password: "password1234",
      });
      console.log(data);
      console.log(error);
    });
  };

  return (
    <button onClick={handleRegister}>
      Crear usuario
    </button>
  );
}
