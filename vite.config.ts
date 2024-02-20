import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { angular } from "@qwikdev/qwik-angular/vite";
export default defineConfig((): UserConfig => {
    return {
        plugins: [qwikCity(), qwikVite(), tsconfigPaths(), angular({
                tsconfig: "tsconfig.json",
                componentsDir: "integrations/angular/components",
                bundleSassFilesInDevMode: {
                    paths: ["src/theme.scss"],
                    compileOptions: { loadPaths: [
                            "node_modules"] },
                }
            })
        ],
        server: {
            headers: {
                "Cache-Control": "public, max-age=0",
            },
        },
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        }
    };
});
