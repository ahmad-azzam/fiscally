"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import GenInput from "../input";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { GenPlaidLink } from "..";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const GenAuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const router = useRouter();

  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      address1: "",
      city: "",
      dob: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      ssn: "",
      state: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) router.push("/");
      }

      if (type === "sign-up") {
        const userData = {
          email: data.email,
          password: data.password,
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dob: data.dob!,
          ssn: data.ssn!,
        };

        const newUser = await signUp(userData);
        setUser(newUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image
            src="/icons/logo.svg"
            height={34}
            width={34}
            alt="Fiscally Logo"
          />

          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Fiscally
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link yout account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          <GenPlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <GenInput
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="Enter your first name"
                    />
                    <GenInput
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <GenInput
                    control={form.control}
                    label="Address"
                    name="address1"
                    placeholder="Enter your specific address"
                  />
                  <GenInput
                    control={form.control}
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                  />

                  <div className="flex gap-4">
                    <GenInput
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="Example: NY"
                    />
                    <GenInput
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="Example: 11101"
                    />
                  </div>

                  <div className="flex gap-4">
                    <GenInput
                      control={form.control}
                      label="Date of Birth"
                      name="dob"
                      placeholder="YYYY-MM-DD"
                    />
                    <GenInput
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="Example: 1234"
                    />
                  </div>
                </>
              )}

              <GenInput
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <GenInput
                control={form.control}
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />

              <div className="flex flex-col gap-4">
                <Button disabled={isLoading} type="submit" className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign in"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default GenAuthForm;
