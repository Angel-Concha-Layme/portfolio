const nextTranslate = require('next-translate-plugin');


module.exports = nextTranslate({
  i18n: {
    locales: ["en", "es"], // Define los idiomas disponibles
    defaultLocale: "en", // Define el idioma por defecto
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: true,
  },
});

