// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

export const BASE = "/svelte-sankey-docs";

// https://astro.build/config
export default defineConfig({
  site: "https://jonasdutzi.github.io",
  base: BASE,
  integrations: [
    starlight({
      title: "Svelte Sankey",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/JonasDutzi/svelte-sankey",
        },
      ],
      plugins: [
        catppuccin({
          dark: {
            flavor: "mocha",
            accent: "flamingo",
          },
          light: {
            flavor: "latte",
            accent: "teal",
          },
        }),
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
