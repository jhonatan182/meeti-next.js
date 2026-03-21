import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";

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
      },
    });

    return {
      error: "",
      success: "Cuenta creada, revisa tu e-mail",
    };
  }
}

export const authService = new AuthService(authRepository);
