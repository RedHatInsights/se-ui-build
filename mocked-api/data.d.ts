export declare const instancesData: {
    kind: string;
    id: string;
    name: string;
    href: string;
    owner: string;
    status: string;
    submitted_at: string;
    published_at: string;
    endpoint: string;
}[];
export declare const processorData: ({
    kind: string;
    id: string;
    name: string;
    type: string;
    href: string;
    submitted_at: string;
    published_at: string;
    transformationTemplate: string;
    status: string;
    action: {
        type: string;
        parameters: string;
    };
    filters?: undefined;
    source?: undefined;
} | {
    kind: string;
    id: string;
    name: string;
    type: string;
    href: string;
    submitted_at: string;
    published_at: string;
    filters: {
        type: string;
        key: string;
        value: string;
    }[];
    status: string;
    action: {
        type: string;
        parameters: string;
    };
    transformationTemplate?: undefined;
    source?: undefined;
} | {
    kind: string;
    id: string;
    name: string;
    type: string;
    href: string;
    submitted_at: string;
    published_at: string;
    filters: {
        type: string;
        key: string;
        value: string;
    }[];
    status: string;
    source: {
        type: string;
        parameters: string;
    };
    transformationTemplate?: undefined;
    action?: undefined;
})[];
