const STATIC_CACHE = "static-v2";
const DYNAMIC_CACHE = "dynamic-v2";

const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/manifest.json",
    "/favicon.svg",

    "/offline.html",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

self.addEventListener('activate', async (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys
                .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
                .map(key => caches.delete(key)))
        )
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") return;

    if (request.mode === "navigate") {
        event.respondWith(navigationHandler(request));
        return;
    }

    if (request.url.startsWith("https://rickandmortyapi.com/api/")) {
        event.respondWith(networkFirst(request));
        return;
    }

    event.respondWith(cacheFirst(request));
});

const navigationHandler = async (request) => {
    try {
        return await fetch(request);
    } catch {
        const cache = await caches.open(STATIC_CACHE);

        return (
            await cache.match("/index.html") ??
            await cache.match("/offline.html")
        );
    }
};
const networkFirst = async (request) => {
    const cache = await caches.open(DYNAMIC_CACHE);

    try {
        const response = await fetch(request);

        if (response.ok)
            await cache.put(request, response.clone());

        return response;
    } catch {
        const cached = await cache.match(request);

        if (cached) {
            return cached;
        }

        return new Response("Offline", {
            status: 503,
            statusText: "Offline",
            data: {
                error: 'Offline'
            }
        });
    }
};


const cacheFirst = async (request) => {
    const cached = await caches.match(request);

    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(request);

        const cache = await caches.open(DYNAMIC_CACHE);
        await cache.put(request, response.clone());

        return response;
    } catch {
        return new Response("Offline", {
            status: 503,
            statusText: "Offline",
            data: {
                error: 'Offline'
            }
        });
    }
};