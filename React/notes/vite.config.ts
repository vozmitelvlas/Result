import {defineConfig} from 'vite';
import react, {reactCompilerPreset} from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import {fileURLToPath, URL} from 'node:url';
import {VitePWA} from "vite-plugin-pwa";

;

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({presets: [reactCompilerPreset()]}),
        VitePWA({
            registerType: "autoUpdate",

            workbox: {
                globPatterns: [
                    "**/*.{js,css,html,ico,png,svg,webp,woff,woff2,ttf}"
                ],

                runtimeCaching: [
                    {
                        urlPattern: /\.(?:woff2?|ttf)(?:\?.*)?$/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "fonts",
                            expiration: {
                                maxEntries: 20,
                            },
                        },
                    },
                ],
            },

            manifest: {
                name: "Md Notes",
                short_name: "Md Notes",
                description: "Markdown notes",
                start_url: "/",
                display: "standalone",

                theme_color: "#d0ebff",
                background_color: "#ffffff",

                icons: [
                    {
                        "src": "./icons/icon-48x48.png",
                        "type": "image/png",
                        "sizes": "48x48"
                    },
                    {
                        "src": "./icons/icon-72x72.png",
                        "type": "image/png",
                        "sizes": "72x72"
                    },
                    {
                        "src": "./icons/icon-96x96.png",
                        "type": "image/png",
                        "sizes": "96x96"
                    },
                    {
                        "src": "./icons/icon-144x144.png",
                        "type": "image/png",
                        "sizes": "144x144"
                    },
                    {
                        "src": "./icons/icon-192x192.png",
                        "type": "image/png",
                        "sizes": "192x192",
                        "purpose": "any maskable"
                    },
                    {
                        "src": "./icons/icon-512x512.png",
                        "type": "image/png",
                        "sizes": "512x512"
                    }
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

});
