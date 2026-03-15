import { SignUpInput } from "../schemas/authSchema";

class AuthService {
  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    //revisar si el usuario existe

    // validacion de negocio

    //manejear el registro
  }
}

export const authService = new AuthService();
