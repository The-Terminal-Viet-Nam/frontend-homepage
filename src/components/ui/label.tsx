"use client";

import { cn } from "@/lib/utils";
import { Root } from "@radix-ui/react-label";
import { forwardRef } from "react";

const Label = forwardRef<React.ComponentRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        "font-medium text-black text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white",
        className,
      )}
      {...props}
    />
  ),
);

Label.displayName = Root.displayName;

export { Label };
