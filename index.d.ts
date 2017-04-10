declare var $$config$$: {
    [index: string]: {
        config: {
            name: string;
            description: string;
        };
        files: string[];
    };
};
declare var tabBoxleft: HTMLDivElement[];
declare var tabBoxtitle: HTMLDivElement;
declare var tabTitle: HTMLAnchorElement[];
declare var ifrm: HTMLIFrameElement;
declare let config: {
    [index: string]: {
        config: {
            name: string;
            description: string;
        };
        files: string[];
    };
};
declare let oldIndex: number;
declare function show(ele: HTMLElement, id: string): void;
declare function showPage(ele: HTMLAnchorElement, idx: number): void;
declare var html: string;
declare var htmlTitle: string;
declare var index: number;
