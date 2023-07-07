module.exports = {
    apps: [
        {
            name: 'review-service',
            script: './review-service/src/server.ts',
            instances: 'max',
            exec_mode: 'cluster',
        },
    ],
  };
