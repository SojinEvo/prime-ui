import { addons } from '@storybook/manager-api';
import { create, type ThemeVarsPartial } from '@storybook/theming';

// 8.x 版本支持的主题配置（仅保留有效属性）
const themeConfig: ThemeVarsPartial = {
  base: 'light', // 基础主题：light/dark
  brandTitle: 'PrimeUI', // 左上角显示的名称（8.x 仍支持）
  brandUrl: '#', // 点击名称跳转地址（8.x 仍支持）
  // 可选：自定义 Logo（放入 .storybook/public/logo.svg）
  // brandImage: '/logo.svg',
  // 注意：8.x 已移除 brandDescription，配置会报错！
};

const primeUiTheme = create(themeConfig);
addons.setConfig({
  theme: primeUiTheme,
});
