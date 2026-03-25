import { Article, Source, NewsResponse } from '../../../backend/src/types';
import './sources.css';
class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const template = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!template) return;

        data.forEach((item) => {
            const clone = template.content.cloneNode(true) as DocumentFragment;

            (clone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;

            (clone.querySelector('.source__item') as HTMLElement)
                .setAttribute('data-source-id', item.id);

            fragment.append(clone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;