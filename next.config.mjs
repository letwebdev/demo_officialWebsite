import AutoImport from "unplugin-auto-import/webpack"
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/demo_officialwebsite",
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
            "react-material-ui-carousel": ["Carousel"],

            "@mui/material": [
              "Tab",
              "Tabs",
              "Button",
              "List",
              "ListItemText",
              "ListItemButton",
            ],
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
