import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: [],
  args: {
    children: '按钮示例',
    type: 'default',
    nativeType: 'button',
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: { disable: false, canvas: { sourceState: 'closed' } }, // 显示展开源码按钮
    controls: {
      enabled: true,
      position: 'bottom',
      expanded: true,
      exclude: ['className', 'style', 'onClick'],
      table: { columns: ['name', 'description', 'default', 'control'] },
    },
    actions: { disable: true },
    viewMode: 'canvas',
  },
  argTypes: {
    children: { name: '按钮文本', description: '按钮显示的文字内容', control: { type: 'text' } },
    type: {
      name: '按钮属性',
      description: '按钮样式类型（主要/默认/危险）',
      control: { type: 'select', options: ['primary', 'default', 'danger'] },
    },
    nativeType: {
      name: '原生属性',
      description: '原生button标签类型（按钮/提交/重置）',
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    disabled: {
      name: '禁用状态',
      description: '是否禁用按钮（禁用后不可点击）',
      control: { type: 'boolean' },
    },
    loading: {
      name: '加载状态',
      description: '是否显示加载中（自动禁用按钮）',
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 类型子菜单：仅显示按钮文本/按钮属性/原生属性
export const 类型: Story = {
  name: '类型',
  args: { children: '按钮示例', type: 'default', nativeType: 'button' },
  argTypes: { disabled: { table: { disable: true } }, loading: { table: { disable: true } } },
};

// 状态子菜单：仅显示按钮文本/禁用状态/加载状态
export const 状态: Story = {
  name: '状态',
  args: { children: '按钮示例', type: 'primary', disabled: false, loading: false },
  argTypes: { type: { table: { disable: true } }, nativeType: { table: { disable: true } } },
};
