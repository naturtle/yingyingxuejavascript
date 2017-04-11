interface IPathConfig {
    [index: string]: {
        config: {
            name: string;
            description: string;
        };
        files: string[];
    };
}
declare let $$config$$: {
    dom: IPathConfig;
    js: IPathConfig;
};
declare let tabBoxleftJS: HTMLDivElement[];
declare let tabBoxleftDOM: HTMLDivElement[];
declare let tabBoxtitle: HTMLDivElement[];
declare let tabTitleJS: HTMLAnchorElement[];
declare let tabTitleDOM: HTMLAnchorElement[];
declare let ifrm: HTMLIFrameElement;
declare const tabBox: HTMLDivElement;
declare let config: {
    dom: IPathConfig;
    js: IPathConfig;
};
declare function show(ele: HTMLElement, id: string): void;
declare const btnPanel: HTMLAnchorElement[];
declare let oldIndexPanel: number;
declare function showPanel(ele: HTMLAnchorElement, idx: number): void;
declare let oldIndexJS: number;
declare function showJSPage(ele: HTMLAnchorElement, idx: number): void;
declare let oldIndexDOM: number;
declare function showDOMPage(ele: HTMLAnchorElement, idx: number): void;
declare function setjs(): void;
declare function setdom(): void;
