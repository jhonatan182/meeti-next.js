import * as React from "react";

import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { HeadEmail } from "../components/HeadEmail";
import { VerificationEmailData } from "../types/email.types";
import { emailConfig } from "../config/config";

export default function VerificationEmailText({
  name,
  url,
}: VerificationEmailData) {
  return (
    <Html>
      <HeadEmail />

      <Preview>Bienvenido a Meeti</Preview>

      <Body>
        <Container>
          <Heading as="h1">Hola {name}, </Heading>

          <Text>
            Has creado tu cuenta en Meeti. Para confirmar tu cuenta, visita el
            siguiente enlace:
          </Text>
          <Button
            href={url || "http://localhost:3000"}
            style={{
              backgroundColor: "#4F46E5",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            Confirmar cuenta
          </Button>

          <Text>Este enlace es válido por {emailConfig.tokenExpiration}.</Text>
        </Container>
      </Body>
    </Html>
  );
}

// export function renderVerificationEmailText(
//   data: VerificationEmailData,
// ): string {
//   return `
//     Hola ${data.name},

//     Has creado tu cuenta en Meeti. Para confirmar tu cuenta, visita el siguiente enlace:

//     ${data.url}

//     Este enlace es válido por ${emailConfig.tokenExpiration}.
//   `;
// }
