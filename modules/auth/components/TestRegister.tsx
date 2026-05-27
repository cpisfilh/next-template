// src/modules/auth/components/TestRegister.tsx

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
