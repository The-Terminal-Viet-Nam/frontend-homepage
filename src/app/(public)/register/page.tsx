"use client";
import { BottomGradient } from "@/components/form/bottomGradient";
import { FormInput } from "@/components/form/formInput";
import { SocialButton } from "@/components/form/socialButton";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RegisterDto } from "@/lib/dto";
import { useRegisterMutation } from "@/lib/queries/register";
import { useUserStore } from "@/stores/user-store";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { AxiosError } from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterForm() {
  const mutation = useRegisterMutation();
  const { setUser } = useUserStore();
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMap: Record<string, string> = {};

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const displayName = formData.get("displayName") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      errorMap.confirmPassword = "Passwords do not match";
      return setErrors(errorMap);
    }

    const parsed = RegisterDto.safeParse({ email, displayName, password });

    if (!parsed.success) {
      const formatted = parsed.error.format();
      if (formatted.email?._errors?.[0])
        errorMap.email = formatted.email._errors[0];
      if (formatted.password?._errors?.[0])
        errorMap.password = formatted.password._errors[0];
      if (formatted.displayName?._errors?.[0])
        errorMap.displayName = formatted.displayName._errors[0];
      return setErrors(errorMap);
    }

    setErrors({});
    mutation.mutate(parsed.data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setUser(mutation.data.data.data);
      router.push("/verify-email");
    }
  }, [mutation.isSuccess, mutation.data, router, setUser]);

  return (
    <AuroraBackground className="flex min-h-screen items-center justify-center">
      <motion.div
        className="relative z-100 mx-auto w-full max-w-md rounded-none p-4 shadow-input md:rounded-2xl md:p-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-neutral-200 text-xl">
          Welcome to The Terminal
        </h2>
        <p className="text-neutral-300">
          Register to The Terminal to start your journey
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <FormInput
            id="displayName"
            label="Full name"
            name="displayName"
            placeholder="Sunaookami Shiroko"
            error={errors.displayName}
          />

          <FormInput
            id="email"
            label="Email Address"
            name="email"
            placeholder="shiroko@terminal.com"
            type="email"
            error={errors.email}
          />

          <FormInput
            id="password"
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
            error={errors.password}
          />

          <FormInput
            id="confirmPassword"
            label="Repeat password"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            error={errors.confirmPassword}
          />

          {mutation.isError && (
            <p className="mb-4 rounded border border-red-400 bg-red-100 p-2 text-red-700 text-sm">
              {mutation.error instanceof AxiosError
                ? mutation.error.response?.data?.message
                : "An error occurred."}
              red-700sm
            </p>
          )}

          {mutation.isSuccess && (
            <p className="my-8 rounded border border-green-400 bg-green-100 p-4 text-green-700">
              Register successfully.
            </p>
          )}

          <button
            type="submit"
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Processing..." : "Sign up →"}
            <BottomGradient />
          </button>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <SocialButton
              icon={<IconBrandGithub className="text-white" />}
              label="GitHub"
              delay={0.2}
            />
            <SocialButton
              icon={<IconBrandGoogle className="text-white" />}
              label="Google"
              delay={0.3}
              disabled={mutation.isPending}
            />
          </div>
        </form>
      </motion.div>
    </AuroraBackground>
  );
}
