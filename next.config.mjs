import AutoImport from "unplugin-auto-import/webpack"
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/demo_officialWebsite",
  output: "export",
  images: { unoptimized: true },
  webpack: (config, options) => {
    config.plugins.push(
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],

        imports: [
          // presets
          "react",
          // custom
          {
            react: [["default", "React"]],
            "react-material-ui-carousel": [["default", "Carousel"]],
            "next/link": [["default", "Link"]],

            "@mui/material": [
              "Container",
              "Button",
              "Paper",
              "IconButton",
              "Card",
              "Tab",
              "Tabs",
              "Tooltip",
              "List",
              "InputBase",
              "ListItemText",
              "ListItemButton",
              "Divider",
              "Box",
              "Stack",
              "Typography",
              "Grid",
            ],
          },
          {
            from: "react",
            imports: ["ReactElement"],
            type: true,
          },
        ],

        // Array of strings of regexes that contains imports meant to be filtered out.
        ignore: ["useMouse", "useFetch"],
        // Auto import for module exports under directories
        dirs: [
          // './hooks',
          // './composables' // only root modules
          // './composables/**', // all nested modules
          // ...
        ],

        ignoreDts: ["ignoredFunction", /^ignore_/],

        eslintrc: {
          enabled: true,
        },
        // dirs: [
        //   ...require("fast-glob").sync(["./src/**"], { onlyDirectories: true }),
        // ],
      })
    )

    return config
  },
}

export default nextConfig
