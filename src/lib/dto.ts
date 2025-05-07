import { z } from "zod";

const strongPasswordSchema = z.string().refine(
  (value) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;
    return strongRegex.test(value);
  },
  {
    message:
      "Password must be at least 8 characters, including uppercase, lowercase, numbers and special characters.",
  },
);

const BaseUserInput = z.object({
  email: z.string().email(),
  password: strongPasswordSchema,
});

export const RegisterDto = BaseUserInput.extend({
  displayName: z.string().min(3).max(20),
});

export const LoginDto = BaseUserInput.extend({});

export type LoginDtoType = z.infer<typeof LoginDto>;
export type RegisterDtoType = z.infer<typeof RegisterDto>;
