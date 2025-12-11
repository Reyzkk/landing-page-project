import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

function Button({
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base = "px-5 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95"; 

    const variants = {
        primary: "bg-blue-400 text-white hover:bg-blue-500 shadow-md",
        secondary: "bg-blue-700 text-white hover:bg-blue-900 shadow", 
    };
    return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
    );
}

export default Button