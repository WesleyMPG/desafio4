
interface PathItem {
    name: string,
    link: string,
};

interface BreadcrumbData {
    path: PathItem[],
};

export { PathItem, BreadcrumbData }
