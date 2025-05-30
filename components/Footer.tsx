import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Send,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { label: 'Metodología', href: '/metodologia' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contáctanos', href: '/contactanos' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'AV. Brasil julio 208',
      href: 'https://maps.google.com/?q=AV.+Brasil+julio+208'
    },
    {
      icon: Mail,
      text: 'Hola_nishi@gmail.com',
      href: 'mailto:Hola_nishi@gmail.com'
    },
    {
      icon: Send,
      text: '982 564 254',
      href: 'tel:+51982564254'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-mewtwo-accent via-mewtwo-dark to-mewtwo-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-mewtwo-primary/5 to-mewtwo-secondary/5" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-mewtwo-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Company Info */}
          <div className="space-y-2 lg:space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-mewtwo-primary rounded-lg flex items-center justify-center group-hover:bg-mewtwo-secondary transition-all duration-300 group-hover:scale-110">
                <div className="w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-md flex items-center justify-center">
                  <span className="text-mewtwo-primary font-bold text-sm lg:text-base">N</span>
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-base lg:text-xl tracking-tight">NISHI</h2>
                <p className="text-mewtwo-secondary text-xs">Digital Solutions EIRL</p>
              </div>
            </Link>
            <p className="text-mewtwo-light text-xs lg:text-sm leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras que impulsan tu negocio.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 lg:space-y-4">
            <h3 className="text-white font-semibold text-sm lg:text-base">Navegación</h3>
            <div className="space-y-1 lg:space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-mewtwo-light hover:text-mewtwo-secondary transition-colors duration-300 text-xs lg:text-sm group"
                >
                  <span className="border-b border-transparent group-hover:border-mewtwo-secondary pb-0.5">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 lg:space-y-4">
            <h3 className="text-white font-semibold text-sm lg:text-base">Contacto</h3>
            <div className="space-y-1.5 lg:space-y-2">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-2 text-mewtwo-light hover:text-mewtwo-secondary transition-colors duration-300 group"
                  >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-mewtwo-primary/20 rounded-md flex items-center justify-center group-hover:bg-mewtwo-primary/30 transition-colors flex-shrink-0">
                      <IconComponent size={10} className="text-mewtwo-secondary lg:w-3.5 lg:h-3.5" />
                    </div>
                    <span className="text-xs lg:text-sm">{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links - Column layout like others */}
          <div className="space-y-2 lg:space-y-4">
            <h4 className="text-white font-semibold text-sm lg:text-base">Síguenos</h4>
            <div className="space-y-1.5 lg:space-y-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center space-x-2 text-mewtwo-light hover:text-mewtwo-secondary transition-colors duration-300 group"
                  >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-mewtwo-primary/20 rounded-md flex items-center justify-center group-hover:bg-mewtwo-primary hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <IconComponent size={10} className="text-mewtwo-secondary group-hover:text-white lg:w-3.5 lg:h-3.5" />
                    </div>
                    <span className="text-xs lg:text-sm">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-mewtwo-primary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0 text-center sm:text-left">
            <p className="text-mewtwo-light text-xs lg:text-sm">
              © {new Date().getFullYear()} NISHI Digital Solutions EIRL. Todos los derechos reservados.
            </p>
            <div className="flex space-x-3 lg:space-x-4 text-xs lg:text-sm">
              <Link href="/privacidad" className="text-mewtwo-light hover:text-mewtwo-secondary transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-mewtwo-light hover:text-mewtwo-secondary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}