import type { Preview } from '@storybook/react';
import '@/styles/variables.less';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      position: 'bottom',
      expanded: true,
      exclude: ['className', 'style'],
      labels: {
        controls: '属性控制面板',
      },
    },
    viewMode: 'docs',
    layout: 'fullscreen',
    docs: {
      toc: true,
      tocHeadings: ['h2', 'h3'],
      tocOptions: {
        title: '目录',
        depth: 2,
      },
      canvas: { sourceState: 'open' },
      page: {
        title: '文档',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
