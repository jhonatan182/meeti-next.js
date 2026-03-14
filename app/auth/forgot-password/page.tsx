import { type Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils/metadata";
import Heading from "@/src/shared/components/typography/Heading";
import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Recuperar Contraseña"),
};

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a Meeti</Heading>

      <ForgotPasswordForm />

      <nav className="mt-12 flex justify-between">
        <Link href="/auth/login">Iniciar sesión</Link>
        <Link href="/auth/create-account">¿No tienes cuenta? Regístrate</Link>
      </nav>
    </>
  );
}
