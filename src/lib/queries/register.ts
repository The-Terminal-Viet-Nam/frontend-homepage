import type { RegisterData } from "@/typings/tanstack";
import { useMutation } from "@tanstack/react-query";
import type { RegisterDtoType } from "../dto";
import { api } from "./config";

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (data: RegisterDtoType) => {
      return api.post<{ data: RegisterData }>("/auth/register", data);
    },
  });
}
