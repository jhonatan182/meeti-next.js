"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {
  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput type="text" id="name" placeholder="Ingresa tu nombre" />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa tu e-mail" />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña "
      />

      <FormLabel htmlFor="confirmPassword">Confirmar contraseña</FormLabel>
      <FormInput
        type="password"
        id="confirmPassword"
        placeholder="Ingresa tu contraseña nuevamente"
      />

      <FormSubmit value="Registrarme" />
    </Form>
  );
}
