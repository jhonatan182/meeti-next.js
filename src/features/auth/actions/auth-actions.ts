"use server";

import {
  SignInInput,
  SignInSchema,
  SignUpInput,
  SignUpSchema,
} from "../schemas/authSchema";
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

  const response = await authService.register(data.data);

  return response;
}

export async function signInAction(input: SignInInput) {
  //validar en el servidor
  const data = SignInSchema.safeParse(input);

  if (!data.success) {
    return {
      success: "",
      error: "Hubo un error.",
    };
  }

  const response = await authService.login(data.data);

  return response;
}
