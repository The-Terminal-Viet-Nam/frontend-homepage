import { motion } from "framer-motion";
import { BottomGradient } from "./bottomGradient";

const SocialButton = ({
  icon,
  label,
  delay = 0,
  disabled = false,
}: {
  icon: React.ReactNode;
  label: string;
  delay: number;
  disabled?: boolean;
}) => (
  <motion.button
    type="button"
    disabled={disabled}
    className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    {icon}
    <span className="text-neutral-700 text-sm dark:text-neutral-300">
      {label}
    </span>
    <BottomGradient />
  </motion.button>
);

export { SocialButton };
