export declare function useDeleteProcessorApi(): {
    deleteProcessor: (bridgeId: string, processorId: string) => void;
    isLoading: boolean;
    success: boolean | undefined;
    error: unknown;
};
