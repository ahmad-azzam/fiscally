import { GenAuthForm } from "@/components/general";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <GenAuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
