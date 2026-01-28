import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Controls, Canvas } from '@storybook/blocks';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: '组件/Button（按钮）',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '按钮示例',
    type: 'default',
    nativeType: 'button',
    disabled: false,
    loading: false,
  },
  parameters: {
    story: { inline: true },
    actions: { disable: true },
    docs: {
      page: () => (
        <>
          <Title>Button 按钮</Title>
          <Subtitle>PrimeUI 通用组件</Subtitle>
          <div id="type-section">
            <h2 id="type-heading">类型 (Type)</h2>
            <p>
              定义按钮的视觉风格和原生行为。通过 <code>type</code> 控制视觉权重， 通过{' '}
              <code>nativeType</code> 适配表单场景。
            </p>
            <Canvas of={TypeDisplay} sourceState="shown" />
            <Controls of={TypeDisplay} include={['type', 'nativeType']} />
          </div>
          <div id="status-section" style={{ marginTop: '40px' }}>
            <h2 id="status-heading">状态 (Status)</h2>
            <p>
              定义按钮的交互可用性。包括 <code>disabled</code> (禁用) 和 <code>loading</code>{' '}
              (加载中)。
            </p>

            <Canvas of={StatusDisplay} sourceState="shown" />
            <Controls of={StatusDisplay} include={['disabled', 'loading']} />
          </div>
        </>
      ),
    },
  },
  argTypes: {
    type: {
      name: 'type',
      description: '**样式类型** - 按钮视觉风格，区分操作优先级',
      table: {
        category: '类型',
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
      control: { type: 'select' },
      options: ['primary', 'default', 'danger'],
    },
    nativeType: {
      name: 'nativeType',
      description: '**原生类型** - 原生 button 标签类型，适配表单场景',
      table: {
        category: '类型',
        defaultValue: { summary: 'button' },
        type: { summary: 'string' },
      },
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },

    disabled: {
      name: 'disabled',
      description: '**禁用状态** - 是否禁用按钮，禁用后不可点击',
      table: {
        category: '状态',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    loading: {
      name: 'loading',
      description: '**加载状态** - 是否显示加载动画，自动禁用按钮',
      table: {
        category: '状态',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },

    children: {
      name: 'children',
      description: '按钮内容',
      control: { type: 'text' },
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TypeDisplay: Story = {
  tags: ['!dev'],
  render: args => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button {...args} type="primary">
        Primary (主要)
      </Button>
      <Button {...args} type="default">
        Default (默认)
      </Button>
      <Button {...args} type="danger">
        Danger (危险)
      </Button>
    </div>
  ),
  args: {
    nativeType: 'button',
  },
  parameters: {
    controls: { include: ['type', 'nativeType'] },
  },
};

/**
 * 展示所有交互状态的集合
 * 使用 tags: ['!dev'] 隐藏在侧边栏
 */
export const StatusDisplay: Story = {
  tags: ['!dev'],
  render: args => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button {...args} type="primary">
        正常状态
      </Button>
      <Button {...args} type="primary" disabled>
        Disabled (禁用)
      </Button>
      <Button {...args} type="primary" loading>
        Loading (加载中)
      </Button>
    </div>
  ),
  args: {
    disabled: false,
    loading: false,
  },
  parameters: {
    controls: { include: ['disabled', 'loading'] },
  },
};

export const Playground: Story = {
  args: {
    children: '试一试',
    type: 'primary',
  },
  parameters: {
    docs: { disable: true },
  },
};
