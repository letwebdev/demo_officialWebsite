import AutoImport from "unplugin-auto-import/webpack"
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],

        // global imports to register
        imports: [
          // presets
          "react",
          "vue",
          "vue-router",
          // custom
          {
            "@mui/material": ["Tab", "Tabs", "Button"],
            "react-material-ui-carousel": ["Carousel"],
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
