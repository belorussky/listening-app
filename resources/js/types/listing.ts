export interface User {
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

export interface PaginatedListings {
    data: Listing[];
}
