import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Eductn: Course",
      social: {
        github: "https://github.com/eductn/course",
      },
      sidebar: [
        {
          label: "Course",
          autogenerate: { directory: "lessons" },
        },
      ],
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
