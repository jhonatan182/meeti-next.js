"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { SignInSchema, SignInInput } from "../schemas/authSchema";
import { signInAction } from "../actions/auth-actions";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components/forms";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignInInput) => {
    const { success, error } = await signInAction(data);

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      toast.success(success);
      redirect("/dashboard");
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">E-mail</FormLabel>

      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        {...register("email")}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu password"
        {...register("password")}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormSubmit value="Iniciar sesión" />
    </Form>
  );
}
