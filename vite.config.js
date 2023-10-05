import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/rick-and-morty/",
      publicDir: "public",
    };
  }

  return {
    base: "/",
    publicDir: "public",
  };
});
