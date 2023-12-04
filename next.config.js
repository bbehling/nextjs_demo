module.exports = {
  output: "standalone",

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/channels",
        permanent: true,
      },
    ];
  },
};
