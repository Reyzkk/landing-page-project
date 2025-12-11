interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void; // 🔹 adicionar onClick opcional
}

export default function Links({
  href,
  children,
  variant = "primary",
  className = "",
  
}: LinkButtonProps) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary: "text-shadow-black hover:text-blue-500",
    secondary: "bg-stone-700 text-white hover:bg-stone-800",
    ghost: "text-indigo-200 hover:text-white hover:underline",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
