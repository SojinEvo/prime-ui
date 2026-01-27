// 适配 Vite 的 ?url 后缀，解析为字符串路径
declare module '*.svg?url' {
  const src: string;
  export default src;
}

// 若有需要将 SVG 作为组件导入的场景
declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}