"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormError,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components/forms";
import { signUpAction } from "../actions/auth-actions";
import { SignUpSchema, SignUpInput } from "../schemas/authSchema";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignUpInput) => {
    const { error, success } = await signUpAction(data);

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      toast.success(success);
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        type="text"
        id="name"
        placeholder="Ingresa tu nombre"
        {...register("name")}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu e-mail"
        {...register("email")}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
        {...register("password")}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="confirmPassword">Confirmar contraseña</FormLabel>
      <FormInput
        type="password"
        id="confirmPassword"
        placeholder="Ingresa tu contraseña nuevamente"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation && (
        <FormError>{errors.passwordConfirmation.message}</FormError>
      )}

      <FormSubmit value="Registrarme" />
    </Form>
  );
}
