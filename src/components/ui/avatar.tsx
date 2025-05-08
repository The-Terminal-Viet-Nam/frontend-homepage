"use client";

import { cn } from "@/lib/utils";
import { Fallback, Image, Root } from "@radix-ui/react-avatar";

function Avatar({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof Image>) {
  return <Image data-slot="avatar-image" className={cn("aspect-square size-full", className)} {...props} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof Fallback>) {
  return (
    <Fallback
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center rounded-full bg-muted", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
