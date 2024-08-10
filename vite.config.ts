import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/static/main.ts",
            name: "script",
            fileName: "script",
            formats: ["es"],
        },
        outDir: "assets",
    },
});
