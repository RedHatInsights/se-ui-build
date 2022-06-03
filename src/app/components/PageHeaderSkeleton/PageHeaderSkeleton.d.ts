interface PageHeaderSkeletonProps {
    pageTitle: string;
    hasEditButton?: boolean;
    hasActionDropdown: boolean;
    hasLabel: boolean;
    totalTabs?: number;
}
declare const PageHeaderSkeleton: (props: PageHeaderSkeletonProps) => JSX.Element;
export default PageHeaderSkeleton;
