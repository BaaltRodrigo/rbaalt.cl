import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("daisyui")],
  // prefix: "tw-", // Adds a custom prefix to the generated classes

  daisyui: {
    themes: ["forest", "coffee"],
  },

  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
};
