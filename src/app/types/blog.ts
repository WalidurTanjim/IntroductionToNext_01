export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    author: string;
    category: string;
    tags: string[];
    published_date: string;
    read_time: string;
    summary: string;
    views: number;
    image: string;
}