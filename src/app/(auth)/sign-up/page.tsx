import { GenAuthForm } from "@/components/general";
import React from "react";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <GenAuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
