module.exports = {
  apps: [
    {
      // eslint-disable-next-line
      env_development: {
        NODE_ENV: 'development',
      },
      // eslint-disable-next-line
      env_production: {
        NODE_ENV: 'production',
      },
      // eslint-disable-next-line
      exec_mode: 'cluster',
      instances: 2,
      name: 'app-to-do--backend',
      script: 'dist/index.js',
      watch: '.',
      // eslint-disable-next-line
      watch_delay: 2000,
    },
  ],
};
