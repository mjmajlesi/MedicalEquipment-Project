// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // چون GH Pages image optimizer نداره
  },
  basePath: '/MedicalEquipment-Project', // اسم ریپوی گیت‌هاب
  assetPrefix: '/MedicalEquipment-Project/',
};

module.exports = nextConfig;

