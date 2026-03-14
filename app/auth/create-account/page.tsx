import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils/metadata";
import Heading from "@/components/typography/Heading";
import RegisterForm from "@/src/features/auth/components/RegisterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),
};

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>
      <RegisterForm />

      <nav className="mt-12 flex justify-between">
        <Link href="/auth/login">Iniciar sesión</Link>
        <Link href="/auth/forgot-password">¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  );
}
