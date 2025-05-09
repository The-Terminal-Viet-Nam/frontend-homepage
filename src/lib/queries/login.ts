import type { LoginData } from "@/typings/tanstack";
import { useMutation } from "@tanstack/react-query";
import type { LoginDtoType } from "../dto";
import { api } from "./config";

export function useLoginMutation() {
  return useMutation({
    mutationFn: (data: LoginDtoType) => api.post<{ data: LoginData }>("/auth/login", data),
  });
}
