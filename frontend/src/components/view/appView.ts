import { NewsResponse, SourcesResponse } from '../../backend/src/types';

import News from './news/news';
import Sources from './sources/sources';

class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponse): void {
        this.news.draw(data.articles ?? []);
    }

    drawSources(data: SourcesResponse): void {
        this.sources.draw(data.sources ?? []);
    }
}

export default AppView;