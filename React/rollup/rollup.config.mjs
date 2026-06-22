import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        image(),
        styles(),
        babel(),
        serve()
    ]
};