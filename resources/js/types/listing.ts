export interface User {
    id: number;
    name: string;
}

export interface Listing {
    id: number;
    title: string;
    desc: string;
    tags: string;
    email: string;
    link: string;
    image: string | null;
    approved: boolean;
    created_at: string;
    user: User;
}

export interface PaginatorLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginator {
    links: PaginatorLink[];
    from: number;
    to: number;
    total: number;
}

export interface PaginatedListings extends Paginator {
    data: Listing[];
}

export interface RouteParams {
    user_id?: string;
    tag?: string;
    search?: string;
    page?: string;
}
