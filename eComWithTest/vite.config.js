
import { defineConfig } from 'vitest/config';

// Configuration de Vite et de Vitest
export default defineConfig({
  test: {
    // Utilise jsdom pour simuler le navigateur
    environment: 'jsdom',

    // Charge le fichier de configuration des tests
    setupFiles: './src/setupTests.js',

    // Active les fonctions de test globales
    globals: true,

    // Configuration de la couverture des tests
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
});
