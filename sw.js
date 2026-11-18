// Service worker mínimo: permite instalar la app en el celular.
// No guarda copias de la página, así que siempre se ve la versión más reciente.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
