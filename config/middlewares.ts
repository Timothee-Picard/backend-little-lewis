import securityConfig from "./security";

export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: securityConfig,
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
