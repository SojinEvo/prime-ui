declare module '@vitejs/plugin-react' {
  import type { PluginOption } from 'vite';
  const react: (options?: {}) => PluginOption;
  export default react;
}