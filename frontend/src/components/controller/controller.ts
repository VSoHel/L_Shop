
import { NewsResponse, SourcesResponse } from '../../backend/src/types';
import AppLoader from './appLoader';
class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp<SourcesResponse>(
            { endpoint: 'sources' },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsResponse) => void): void {
        const target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        let current: HTMLElement | null = target;

        while (current && current !== newsContainer) {
            if (current.classList.contains('source__item')) {
                const sourceId = current.getAttribute('data-source-id');

                if (!sourceId) return;

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    super.getResp<NewsResponse>(
                        {
                            endpoint: 'everything',
                            options: { sources: sourceId },
                        },
                        callback
                    );
                }

                break;
            }

            current = current.parentElement;
        }
    }
}

export default AppController;