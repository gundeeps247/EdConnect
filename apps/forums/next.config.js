module.exports = {
  images: {
    domains: ['1000logos.net', 'img.favpng.com', 'www.pngwing.com', 'dashboard.stepzen.com'],
  },
  

  webpack(config) {
    config.resolve.fallback = {

      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};
