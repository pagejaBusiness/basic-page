import React, { useState } from "react";
import { motion } from "framer-motion";
import mockup from "../assets/mockup.png";

function ClientPresentationLandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const exampleImages = [
    {
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      alt: "Serviço 1",
      desc: "Landing pages personalizadas para o seu negócio.",
    },
    {
      src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      alt: "Serviço 2",
      desc: "Design moderno e responsivo que atrai clientes.",
    },
    {
      src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      alt: "Serviço 3",
      desc: "Implementação rápida com alta performance.",
    },
  ];

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-600 flex-shrink-0">
            PageJá
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#hero" className="hover:text-purple-600 transition">
              Início
            </a>
            <a href="#features" className="hover:text-purple-600 transition">
              Funcionalidades
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-600 transition"
            >
              Depoimentos
            </a>
            <a href="#contact" className="hover:text-purple-600 transition">
              Contato
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-800"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="block hover:text-purple-600 transition"
            >
              Início
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block hover:text-purple-600 transition"
            >
              Funcionalidades
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block hover:text-purple-600 transition"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-purple-600 transition"
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center py-24 md:py-32 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Landing Pages que vendem
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-6"
        >
          Modernas, rápidas e profissionais, feitas para o seu negócio crescer
        </motion.p>

        <motion.a
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          href="https://www.instagram.com/pagej_aa/"
          target="_blank"
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Fale com a gente
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <img
            src={mockup}
            alt="Exemplo de landing page"
            className="mx-auto w-80 md:w-[500px] rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Seção de Portfólio / Serviços do Cliente */}
      <section
        id="portfolio"
        className="py-24 px-4 bg-gradient-to-r from-purple-100 to-indigo-100 text-center relative z-10 shadow-xl rounded-b-3xl -mt-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-700">
          Veja nossos serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {exampleImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-xl shadow-lg bg-white flex flex-col"
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              />
              <div className="p-6 text-gray-700 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2 text-purple-700">
                  {item.alt}
                </h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section
        id="features"
        className="py-20 px-4 bg-gray-50 text-center relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          O que você recebe
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Conversão Garantida",
              desc: "Landing pages otimizadas para transformar visitantes em clientes.",
              icon: "💰",
            },
            {
              title: "Design Moderno",
              desc: "Visual profissional, responsivo e adaptável a todos os dispositivos.",
              icon: "🎨",
            },
            {
              title: "Entrega Rápida",
              desc: "Sua página pronta em poucos dias, com suporte incluso.",
              icon: "⚡",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-left"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Depoimentos Section */}
      {/* Depoimentos Section */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-purple-600 text-white text-center relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "João S.",
              text: "Minha loja aumentou as vendas em 40% depois da landing page.",
              img: "https://randomuser.me/api/portraits/men/32.jpg", // foto do cliente
            },
            {
              name: "Maria A.",
              text: "Design incrível e entrega super rápida. Recomendo!",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Carlos P.",
              text: "Atendimento excelente e resultado real para meu negócio.",
              img: "https://randomuser.me/api/portraits/men/56.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              {/* Foto do cliente */}
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-purple-600"
              />
              {/* Texto do depoimento */}
              <p className="italic mb-4">"{item.text}"</p>
              {/* Nome do cliente */}
              <h4 className="font-bold">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section
        id="contact"
        className="py-24 px-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white relative overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Pronto para aumentar suas vendas?
        </motion.h2>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="https://www.instagram.com/pagej_aa/"
          target="_blank"
          className="bg-white text-red-500 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition"
        >
          Fale com a gente agora
        </motion.a>
      </section>

      {/* Rodapé */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400 mt-12">
        © {new Date().getFullYear()} PageJá. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default ClientPresentationLandingPage;
