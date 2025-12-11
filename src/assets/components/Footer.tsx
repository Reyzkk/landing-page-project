function Footer() {
  return (
    <footer className="w-full bg-blue-500 text-white py-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">

        {/* Logo / Título */}
        <div className="flex flex-col gap-2">
          <h2 className="poppins text-2xl font-bold">TravelSite</h2>
          <p className="text-sm text-gray-300">
            Descubra experiências incríveis em todo o mundo.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Links</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contato / redes */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Contato</h3>
          <p className="text-gray-300">email@exemplo.com</p>
          <p className="text-gray-300">+55 00 0000-0000</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Horizon Trips. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;