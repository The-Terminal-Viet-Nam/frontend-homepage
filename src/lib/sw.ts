import { defaultCache } from "@serwist/next/worker";
// public/serwist-worker.js
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { CacheFirst, Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}
declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    ...defaultCache,
    {
      handler: new CacheFirst({
        cacheName: "manifest-cache",
      }),
      matcher: /\/manifest\.webmanifest$/,
      method: "GET",
    },
  ],
});

serwist.addEventListeners();
