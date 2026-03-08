import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils/metadata";
import Heading from "@/components/typography/Heading";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),
};

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>
    </>
  );
}
