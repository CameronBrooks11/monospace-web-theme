// postcss.config.js
module.exports = {
  plugins: [
    require("cssnano")({
      preset: [
        "default",
        {
          // Disable postcss-calc so complex calc() expressions aren’t broken
          calc: false,
        },
      ],
    }),
  ],
};
