import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
    resolve: {
        alias: {
            context: "/src/context",
            assets: "/src/assets",
            api: "/src/api",
            pages: "/src/pages",
            components: "/src/components",
            hooks: "/src/hooks",
            store: "/src/store",
            utils: "/src/utils",
            styles: "/src/styles",
        },
    },
});
