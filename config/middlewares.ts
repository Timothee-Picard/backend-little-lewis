export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      csp: {
        policies: {
          'default-src': ["'self'"],
          'img-src': ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
