export interface AppFederatedProps {
    apiBaseUrl: string;
    basename: string;
    getUsername: () => Promise<string> | undefined;
    getToken: () => Promise<string> | undefined;
}
declare const AppFederated: (props: AppFederatedProps) => JSX.Element;
export default AppFederated;
