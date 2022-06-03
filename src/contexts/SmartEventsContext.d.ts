import React from "react";
declare type AppContextType = {
    getToken: () => Promise<string>;
    getUsername: () => Promise<string>;
    apiBaseUrl: string;
};
declare type AppContextProviderProps = AppContextType & {
    children: React.ReactNode;
};
export declare const SmartEventsContextProvider: ({ getToken, getUsername, apiBaseUrl, children, }: AppContextProviderProps) => JSX.Element;
export declare const useSmartEvents: () => AppContextType;
export {};
