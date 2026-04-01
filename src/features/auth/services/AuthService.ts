import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { headers } from "next/headers";
import { APIError } from "better-auth";

class AuthService {
  constructor(private readonly authRepository: IAuthRepository) {}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    //revisar si el usuario existe
    const user = await this.authRepository.userExists(email);
    if (user) {
      return {
        error: "Este e-mail ya está registrado",
        success: "",
      };
    }

    // validacion de negocio

    //manejear el registro
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: "/dashboard",
      },
      headers: await headers(),
    });

    return {
      error: "",
      success: "Cuenta creada, revisa tu e-mail",
    };
  }

  async login(credentials: SignInInput) {
    const { email, password } = credentials;

    //revisar si el usuario existe
    const user = await this.authRepository.userExists(email);
    if (!user) {
      return {
        error: "El usuario no existe",
        success: "",
      };
    }

    //verificar su password y verificar su cuenta

    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard",
        },
        headers: await headers(),
      });

      return {
        error: "",
        success: "Sesión iniciada",
      };
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Password incorrecto",
          403: "Tu cuenta no ha sido verificada, hemos enviado un email",
        };

        const errorMessage = messages[error.statusCode];

        if (errorMessage) {
          return {
            error: errorMessage,
            success: "",
          };
        }
      }
    }

    return {
      error: "",
      success: "",
    };
  }
}

export const authService = new AuthService(authRepository);
