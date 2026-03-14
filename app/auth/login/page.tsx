import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils/metadata";
import Heading from "@/components/typography/Heading";
import LoginForm from "@/src/features/auth/components/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
      <LoginForm />

      <nav className="mt-12 flex justify-between">
        <Link href="/auth/create-account">¿No tienes cuenta? Regístrate</Link>
        <Link href="/auth/forgot-password">¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  );
}
