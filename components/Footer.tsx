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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mewtwo-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-mewtwo-primary rounded-xl flex items-center justify-center group-hover:bg-mewtwo-secondary transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-mewtwo-primary font-bold text-lg">N</span>
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl tracking-tight">NISHI</h2>
                <p className="text-mewtwo-secondary text-sm">Digital Solutions EIRL</p>
              </div>
            </Link>

            <p className="text-mewtwo-light text-sm leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Especializados en desarrollo web,
              aplicaciones móviles y estrategias digitales que impulsan el crecimiento de tu negocio.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Navegación</h3>
            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-mewtwo-light hover:text-mewtwo-secondary transition-colors duration-300 text-sm group"
                >
                  <span className="border-b border-transparent group-hover:border-mewtwo-secondary pb-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-mewtwo-light hover:text-mewtwo-secondary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-mewtwo-primary/20 rounded-lg flex items-center justify-center group-hover:bg-mewtwo-primary/30 transition-colors">
                      <IconComponent size={18} className="text-mewtwo-secondary" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-medium text-sm mb-4">Síguenos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-mewtwo-primary/20 rounded-lg flex items-center justify-center hover:bg-mewtwo-primary hover:scale-110 transition-all duration-300 group"
                    >
                      <IconComponent size={18} className="text-mewtwo-secondary group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-mewtwo-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-mewtwo-light text-sm">
              © {new Date().getFullYear()} NISHI Digital Solutions EIRL. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidad" className="text-mewtwo-light hover:text-mewtwo-secondary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-mewtwo-light hover:text-mewtwo-secondary transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}