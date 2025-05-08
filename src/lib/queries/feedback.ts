import { useMutation } from "@tanstack/react-query";
import type { FeedbackDtoType } from "../dto";
import { api } from "./config";

export function useFeedbackMutation() {
  return useMutation({
    mutationFn: (data: FeedbackDtoType) => api.post("/customers/feedback", data),
  });
}
