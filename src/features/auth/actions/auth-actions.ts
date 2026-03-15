"use server";

import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUpAction(input: SignUpInput) {
  //validar en el servidor
  const data = SignUpSchema.safeParse(input);

  if (!data.success) {
    return {
      success: "",
      error: "Hubo un error.",
    };
  }

  await authService.register(data.data);
}
