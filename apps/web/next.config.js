const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "s.gravatar.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
});
