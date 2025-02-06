import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      whoWeAre: "Who We Are",
      contact: "Contact",
    },
    hero: {
      title: "Welcome to our site",
      subtitle: "Your solution to IT expertise",
    },
    services: {
      title: "Our Services",
    },
    whoWeAre: {
      title: "Who We Are",
      founder1Title: "Founder: John Doe",
      founder1Description:
        "John brings a wealth of expertise in cloud infrastructure and development.",
      founder2Title: "Founder: Jane Smith",
      founder2Description:
        "Jane leads our innovation and strategy initiatives, ensuring top-notch solutions.",
    },
    contact: {
      title: "Contact",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      whoWeAre: "Quiénes Somos",
      contact: "Contacto",
    },
    hero: {
      title: "Bienvenido a nuestro sitio",
      subtitle: "Tu solución para la experiencia en TI",
    },
    services: {
      title: "Nuestros Servicios",
    },
    whoWeAre: {
      title: "Quiénes Somos",
      founder1Title: "Fundador: John Doe",
      founder1Description:
        "John aporta una amplia experiencia en infraestructura en la nube y desarrollo.",
      founder2Title: "Fundador: Jane Smith",
      founder2Description:
        "Jane lidera nuestras iniciativas de innovación y estrategia, garantizando soluciones de primer nivel.",
    },
    contact: {
      title: "Contacto",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      whoWeAre: "Wer wir sind",
      contact: "Kontakt",
    },
    hero: {
      title: "Willkommen auf unserer Seite",
      subtitle: "Ihre Lösung für IT-Expertise",
    },
    services: {
      title: "Unsere Dienstleistungen",
    },
    whoWeAre: {
      title: "Wer wir sind",
      founder1Title: "Gründer: John Doe",
      founder1Description:
        "John verfügt über umfangreiche Erfahrung in Cloud-Infrastruktur und Entwicklung.",
      founder2Title: "Gründer: Jane Smith",
      founder2Description:
        "Jane leitet unsere Innovations- und Strategieinitiativen und sorgt für erstklassige Lösungen.",
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};

const i18n = createI18n({
  legacy: false, // Use the Composition API mode; set to true if you require the legacy API.
  locale: "en", // set default locale
  fallbackLocale: "en",
  messages,
});

export default i18n;
