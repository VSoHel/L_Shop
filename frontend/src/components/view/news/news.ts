import { Article, Source, NewsResponse } from '../../../backend/src/types';
import './news.css';

class News {
    draw(data: Article[]): void {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const template = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!template) return;

        news.forEach((item, idx) => {
            const clone = template.content.cloneNode(true) as DocumentFragment;

            const el = clone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) el.classList.add('alt');

            const photo = clone.querySelector('.news__meta-photo') as HTMLElement;
            photo.style.backgroundImage = `url(${item.urlToImage ?? 'img/news_placeholder.jpg'})`;

            (clone.querySelector('.news__meta-author') as HTMLElement).textContent =
                item.author ?? item.source.name;

            (clone.querySelector('.news__meta-date') as HTMLElement).textContent =
                item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            fragment.append(clone);
        });

        document.querySelector('.news')?.append(fragment);
    }
}

export default News;