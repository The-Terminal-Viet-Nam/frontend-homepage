"use client";

import { cn } from "@/lib/utils";
import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

const Accordion = Root;

const AccordionItem = forwardRef<React.ComponentRef<typeof Item>, React.ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => <Item ref={ref} className={cn("border-b", className)} {...props} />,
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<React.ComponentRef<typeof Trigger>, React.ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Header className="flex">
      <Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left font-medium text-sm transition-all [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </Trigger>
    </Header>
  ),
);

AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<React.ComponentRef<typeof Content>, React.ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, ...props }, ref) => (
    <Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </Content>
  ),
);

AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
