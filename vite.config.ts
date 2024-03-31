import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';

/**
 * Generates the Vite configuration.
 * @param pwaOptions - The PWA options.
 * @param replaceOptions - The replacement options.
 * @returns The Vite configuration.
 */
const generateConfig = (
  pwaOptions: Partial<VitePWAOptions>,
  replaceOptions: Record<string, string | boolean>
): ReturnType<typeof defineConfig> => {
  const claims = process.env.CLAIMS === 'true';
  const reload = process.env.RELOAD_SW === 'true';
  const selfDestroying = process.env.SW_DESTROY === 'true';

  if (process.env.SW === 'true') {
    pwaOptions.srcDir = 'src';
    pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts';
    pwaOptions.strategies = 'injectManifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).name =
      'PWA Inject Manifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';
  }

  if (claims) pwaOptions.registerType = 'autoUpdate';

  if (reload) {
    // @ts-expect-error just ignore
    replaceOptions.__RELOAD_SW__ = 'true';
  }

  if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;

  return defineConfig({
    build: {
      sourcemap: process.env.SOURCE_MAP === 'true',
    },
    plugins: [
      react({ swc: true }),
      checker({ typescript: true }),
      svgr(),
      VitePWA(pwaOptions),
      replace(replaceOptions),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Ascension_To_Hell',
    short_name: 'Ascension_To_Hell',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'icon/favicon-16x16.png', // <== don't add slash, for testing
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: 'icon/favicon-32x32.png', // <== don't add slash, for testing
        sizes: '32X32',
        type: 'image/png',
      },
      {
        src: 'icon/android-chrome-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon/android-chrome-256x256.png', // <== don't add slash, for testing
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon/android-chrome-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'icon/android-chrome-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW, the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
};

const replaceOptions: Record<string, string | boolean> = {
  __DATE__: new Date().toISOString(),
  preventAssignment: true,
};

const config = generateConfig(pwaOptions, replaceOptions);

export default config;
