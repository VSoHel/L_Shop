import { LoaderOptions, RequestParams } from '../../types';
class Loader {
    baseLink: string;
    options: LoaderOptions;

    constructor(baseLink: string, options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(params: RequestParams, callback: (data: T) => void): void {
        this.load<T>('GET', params.endpoint, callback, params.options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: Record<string, unknown>, endpoint: string): string {
    const urlOptions: Record<string, unknown> = {
        ...this.options,
        ...options,
    };

    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
        const value = urlOptions[key];
        url += `${key}=${String(value)}&`;
    });

    return url.slice(0, -1);
}

    private load<T>(
        method: string,
        endpoint: string,
        callback: (data: T) => void,
        options: Record<string, unknown> = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;