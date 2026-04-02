import { createAuthClient } from "better-auth/react";
import { redirect } from "next/navigation";

export const { signOut } = createAuthClient({
  fetchOptions: {
    onError: (error) => {
      console.error("Error signing out:", error);
    },

    onSuccess: () => {
      redirect("/auth/login");
    },
  },
});
