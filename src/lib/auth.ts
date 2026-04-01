import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "../db";
import { AuthEmailService } from "../emails/services/AuthEmailService";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    // Auto iniciar sesion despues de verificar el correo
    autoSignInAfterVerification: true,

    // envia correo cuando el usuario inicia sesion y no esta verificado
    sendOnSignIn: true,

    //Aca se captura el usuario que se registrando
    sendVerificationEmail: async ({ user, url }) => {
      await AuthEmailService.sendVerificationEmail({
        name: user.name,
        email: user.email,
        url,
      });
    },
  },
  plugins: [nextCookies()],
});
