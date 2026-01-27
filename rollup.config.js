import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'rollup-plugin-esbuild';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import visualizer from 'rollup-plugin-visualizer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entry = path.resolve(__dirname, 'src/index.ts');
const outputDir = path.resolve(__dirname, 'dist');
const external = [
    'react',
    'react-dom',
    'prop-types',
    'classnames',
    '@ant-design/cssinjs'
]; // 补充 antd cssinjs 到外部依赖

export default [
    {
        input: entry,
        output: [
            {
                format: 'es',
                file: path.join(outputDir, 'prime-ui.es.js'),
                sourcemap: true,
            },
            {
                format: 'cjs',
                file: path.join(outputDir, 'prime-ui.cjs.js'),
                sourcemap: true,
            },
            {
                format: 'umd',
                file: path.join(outputDir, 'prime-ui.umd.js'),
                name: 'PrimeUI',
                sourcemap: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    classnames: 'classNames',
                    '@ant-design/cssinjs': 'AntDesignCssInJs',
                    'prop-types': 'PropTypes'
                },
            },
        ],
        external,
        cache: true, // 启用 rollup 缓存
        perf: false, // 关闭性能分析，提升构建速度
        plugins: [
            nodeResolve({
                extensions: ['.ts', '.tsx', '.js', '.less'],
                browser: true // 适配浏览器环境，避免打包 node 内置模块
            }),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false // 关闭 TS 生成声明，交给单独的 dts 插件
            }),
            esbuild({
                target: 'es2018',
                jsx: 'automatic',
                minify: false // 关闭 ESBuild 压缩，统一用 Terser
            }),
            postcss({
                plugins: [
                    autoprefixer({ overrideBrowserslist: ['> 0.1%', 'last 2 versions'] }), // 明确浏览器兼容
                    cssnano({ preset: 'default' })
                ],
                extract: path.join(outputDir, 'style.css'),
                minimize: true,
                use: [
                    ['less', {
                        javascriptEnabled: true,
                        globalVars: { // 注入 Less 全局变量，无需手动 import
                            'primary-color': '#165DFF'
                        }
                    }]
                ],
                modules: { // 支持 CSS Module
                    generateScopedName: "[name]__[local]___[hash:6]"
                }
            }),
            terser({ // 仅生产压缩，保留源码可读性
                compress: { drop_console: true },
                format: { comments: false }
            }),
            visualizer({
                open: false, // 关闭自动打开，避免构建中断
                filename: 'dist/stats.html',
                gzipSize: true // 显示 gzip 后体积，更贴近实际使用
            }),
        ],
    },
    {
        input: entry,
        output: {
            file: path.join(outputDir, 'index.d.ts'),
            format: 'es',
        },
        external: [/\.less$/, /\.css$/], // 排除所有样式文件
        cache: true, // 启用 rollup 缓存
        perf: false, // 关闭性能分析，提升构建速度
        plugins: [
            dts({
                tsconfig: './tsconfig.json',
                respectExternal: true // 尊重 external 配置，不包含外部依赖类型
            })
        ],
    },
];