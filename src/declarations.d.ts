declare module '@/assets/2022/js/jquery-1.11.3.min.js' {
    const jQuery: any;
    export default jQuery;
}

declare module '@/assets/2022/js/bootstrap.js' {
    const bootstrap: any;
    export default bootstrap;
}

declare module '@/assets/2022/js/particles.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/gradient.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/particles_config.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/home.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/jquery.easing.1.3.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/custom.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/assets/2022/js/svg-inject.min.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

/*2017*/

declare module '@/assets/2017/js/custom.js' {
    const value: any; // 或者你可以定義更具體的類型
    export default value;
}

declare module '@/utils/functions' {
    export const switchLanguage: (...args: any[]) => any;
    const functions: any;
    export default functions;
}

declare module '@/assets/**/*.js' {
    const value: any;
    export default value;
}

declare global {
    const SVGInject: any;
}

export {};