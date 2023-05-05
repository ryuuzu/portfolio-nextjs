module.exports = {
  apps: [
    {
      name: "next",
      cwd: "/root/projects/portfolio-nextjs",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
