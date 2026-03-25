export interface Source {
    id: string;
    name: string;
}

export interface Article {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    source: Source;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface LoaderOptions {
    apiKey: string;
}

export interface RequestParams {
    endpoint: string;
    options?: Record<string, string | number | undefined>;
}