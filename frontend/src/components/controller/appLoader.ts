import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bd107f7506084752a5b5075838ed1df0',
        });
    }
}

export default AppLoader;