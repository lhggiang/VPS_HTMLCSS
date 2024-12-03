module.exports = {
  apps: [
    {
      name: "hg",
      script: "serve",
      env: {
        PM2_SERVE_PATH: ".",
        PM2_SERVE_PORT: 3000,
      },
    },
  ],
};
