import Links from "../../components/ui/links"; // seu componente de link

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-stone-900 bg-opacity-90 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl">
        <Links href="#home" variant="primary" onClick={onClose}>
          Home
        </Links>
        <Links href="#projects" variant="primary" onClick={onClose}>
          Projects
        </Links>
        <Links href="#contact" variant="primary" onClick={onClose}>
          Contact
        </Links>
      </nav>
    </div>
  );
}
