import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils/metadata";
import Heading from "@/components/typography/Heading";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
      <Heading level={2}>Iniciar Sesión</Heading>
      <Heading level={3}>Iniciar Sesión</Heading>
      <Heading level={4}>Iniciar Sesión</Heading>
      <Heading level={5}>Iniciar Sesión</Heading>
      <Heading level={6}>Iniciar Sesión</Heading>
    </>
  );
}
