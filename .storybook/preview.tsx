import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: { light: { name: 'Light', value: '#fff' }, dark: { name: 'Dark', value: '#333' } },
    },
    actions: { argTypesRegex: /^on[A-Z].*/ },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { title: 'PrimeUI - 组件文档', inlineStories: true },
    i18n: {
      locales: { zh: '中文' },
      locale: 'zh',
      messages: {
        zh: {
          'controls.table.head.name': '属性名',
          'controls.table.head.description': '中文描述',
          'controls.table.head.default': '中文默认值',
          'controls.table.head.control': '属性值',
          sourceCode: '源码',
          canvas: '效果图',
          docs: '文档',
        },
      },
    },
  },
  decorators: [
    Story => <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>{Story()}</div>,
  ],
};

export default preview;
