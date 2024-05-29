import { App, Directive } from 'vue';

export declare type VisualizeAnimateValue = {
    ani: string;
    duration?: number;
    hook?: string;
    delay?: number;
};
export declare type VisualizeAnimate = Directive<HTMLElement, VisualizeAnimateValue>;
declare const _default: {
    isInstalled: boolean;
    install(app: App): void;
};
export default _default;
export declare const useVisualizeAnimate: () => void;
