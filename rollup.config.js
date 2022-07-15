import resolver from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const pkgJson = require('./package.json');

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkgJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: pkgJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolver(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser()
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/]
    }
]