// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

export const BASE = "/svelte-sankey-docs";

const ALL_COMPONENTS = [
  "Sankey",
  "ColumnContent",
  "Item",
  "Anchor",
  "AnchorContent",
];

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
          items: [{ label: "Getting Started", slug: "guides/getting-started" }],
        },
        {
          label: "Components",
          items: ALL_COMPONENTS.map((component) => ({
            label: component,
            slug: `components/${component.toLowerCase()}`,
          })),
        },
        {
          label: "References",
          autogenerate: { directory: "references" },
        },
      ],
    }),
  ],
});
