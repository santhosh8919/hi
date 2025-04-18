import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss, // Now correctly using the @tailwindcss/postcss package
    autoprefixer,
  ],
};
