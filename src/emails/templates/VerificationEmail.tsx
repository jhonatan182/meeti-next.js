import { VerificationEmailData } from "../types/email.types";
import { emailConfig } from "../config/config";
import {
  Html,
  Container,
  Heading,
  Text,
  Section,
  Button,
  Body,
  Preview,
} from "@react-email/components";
import { HeadEmail } from "../components/HeadEmail";

export default function VerificationEmail({
  name,
  url,
}: VerificationEmailData) {
  return (
    <Html lang="es">
      <HeadEmail />
      <Preview>Confirma tu cuenta en Meeti</Preview>

      <Body style={{ fontFamily: "'Work Sans', 'Times New Roman', serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Heading as="h1">Bienvenido a Meeti</Heading>

          <Text>
            Hola <strong>{name}</strong>,
          </Text>
          <Text>
            Has creado tu cuenta en Meeti. Ya está casi todo listo, solo debes
            confirmar tu cuenta.
          </Text>

          <Section style={{ margin: "30px 0" }}>
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
          </Section>

          <Text style={{ color: "#666", fontSize: "14px" }}>
            Este enlace es válido por {emailConfig.tokenExpiration}.
          </Text>

          <Text style={{ color: "#999", fontSize: "12px", marginTop: "40px" }}>
            Si no creaste esta cuenta, puedes ignorar este correo.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// export function renderVerificationEmail(data: VerificationEmailData): string {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>Confirma tu Cuenta</title>
//       </head>
//       <body>
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h1>Bienvenido a Meeti</h1>
//           <p>Hola <strong>${data.name}</strong>,</p>
//           <p>Has creado tu cuenta en Meeti. Ya está casi todo listo, solo debes confirmar tu cuenta.</p>

//           <div style="margin: 30px 0;">
//             <a
//               href="${data.url}"
//               style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;"
//             >
//               Confirmar cuenta
//             </a>
//           </div>

//           <p style="color: #666; font-size: 14px;">
//             Este enlace es válido por ${emailConfig.tokenExpiration}.
//           </p>

//           <p style="color: #999; font-size: 12px; margin-top: 40px;">
//             Si no creaste esta cuenta, puedes ignorar este email.
//           </p>
//         </div>
//       </body>
//     </html>
//   `;
// }
