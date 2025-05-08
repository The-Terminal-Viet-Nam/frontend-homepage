"use client";

import { FeedbackDto } from "@/lib/dto";
import { useFeedbackMutation } from "@/lib/queries/feedback";
import { useState } from "react";
import { BottomGradient } from "./form/bottomGradient";
import { FormInput } from "./form/formInput";

export default function FeedbackForm() {
  const { isError, isSuccess, isPending, error, mutate } = useFeedbackMutation();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMap: Record<string, string> = {};

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");

    const parsed = FeedbackDto.safeParse({ email, message });

    if (!parsed.success) {
      const formatted = parsed.error.format();
      if (formatted.email?._errors?.[0]) errorMap.email = formatted.email._errors[0];
      if (formatted.message?._errors?.[0]) errorMap.message = formatted.message._errors[0];
      return setErrors(errorMap);
    }

    setErrors({});
    mutate(parsed.data);
  };

  return (
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
        id="message"
        label="Message"
        name="message"
        placeholder="Hello, I am interested in your services."
        error={errors.message}
      />

      {isError && (
        <p className="mb-4 rounded border border-red-400 bg-red-100 p-2 text-red-700 text-sm">
          {error.response?.data?.message ? error.response.data.message : "An error occurred."}
        </p>
      )}

      {isSuccess && <p className="my-8 rounded border border-green-400 bg-green-100 p-4 text-green-700">Sent.</p>}

      <button
        type="submit"
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        disabled={isPending}
      >
        {isPending ? "Processing..." : "Send →"}
        <BottomGradient />
      </button>
    </form>
  );
}
