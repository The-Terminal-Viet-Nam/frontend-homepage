"use client";
import { BottomGradient } from "@/components/form/bottomGradient";
import { FormInput } from "@/components/form/formInput";
import { SocialButton } from "@/components/form/socialButton";
import { LoginDto } from "@/lib/dto";
import { useLoginMutation } from "@/lib/queries/login";
import { useUserQuery } from "@/lib/queries/me";
import { useUserStore } from "@/stores/user-store";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuroraBackground = dynamic(
  () => import("@/components/ui/aurora-background").then((mod) => mod.AuroraBackground),
  { ssr: false },
);

export default function LoginForm() {
  const { isError, isPending, isSuccess, data, error, mutate } = useLoginMutation();
  const { refetch } = useUserQuery();
  const { setUser } = useUserStore();
  const { push } = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMap: Record<string, string> = {};

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const parsed = LoginDto.safeParse({ email, password });

    if (!parsed.success) {
      const formatted = parsed.error.format();
      if (formatted.email?._errors?.[0]) errorMap.email = formatted.email._errors[0];
      if (formatted.password?._errors?.[0]) errorMap.password = formatted.password._errors[0];
      return setErrors(errorMap);
    }

    setErrors({});
    mutate(parsed.data);
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(data.data.data);
      refetch();
      push("/");
    }

    if (isError && error.response?.status === 409) {
      push("/verify-email");
    }
  }, [isSuccess, isError, data, error, push, setUser, refetch]);

  return (
    <AuroraBackground className="flex min-h-screen items-center justify-center">
      <motion.div
        className="relative z-100 mx-auto w-full max-w-md rounded-none p-4 shadow-input md:rounded-2xl md:p-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-neutral-200 text-xl">Welcome to The Terminal</h2>
        <p className="text-neutral-300">Login to The Terminal to continue your journey</p>

        <form className="my-8" onSubmit={handleSubmit}>
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

          {isError && (
            <p className="mb-4 rounded border border-red-400 bg-red-100 p-2 text-red-700 text-sm">
              {error.response?.data?.message ? error.response.data.message : "An error occurred."}
            </p>
          )}

          {isSuccess && (
            <p className="my-8 rounded border border-green-400 bg-green-100 p-4 text-green-700">Login successfully.</p>
          )}

          <button
            type="submit"
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            disabled={isPending}
          >
            {isPending ? "Processing..." : "Sign up →"}
            <BottomGradient />
          </button>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <SocialButton icon={<IconBrandGithub className="text-white" />} label="GitHub" delay={0.2} />
            <SocialButton
              icon={<IconBrandGoogle className="text-white" />}
              label="Google"
              delay={0.3}
              disabled={isPending}
            />
          </div>
        </form>
      </motion.div>
    </AuroraBackground>
  );
}
