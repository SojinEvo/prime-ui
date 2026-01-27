import path from 'path';

const config = {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  managerHead: (head: string) => `
    ${head}
    <style>
      .sb-header-logo:hover::after {
        content: '实用稳定 React 组件库';
        position: absolute;
        top: 100%;
        left: 0;
        margin: 8px 0 0;
        padding: 4px 8px;
        background: #333;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        white-space: nowrap;
        z-index: 999;
      }
      .dark .sb-header-logo:hover::after { background: #fff; color: #333; }
    </style>
  `,
  viteFinal: async (config: any) => {
    config.resolve ||= {};
    config.resolve.alias = { ...config.resolve.alias, '@': path.resolve(__dirname, '../src') };
    config.css ||= {};
    config.css.preprocessorOptions = {
      less: { javascriptEnabled: true, additionalData: `@import "@/styles/variables.less";` },
    };
    return config;
  },
  core: { disableTelemetry: true },
};

export default config;
