import DefaultTheme from 'vitepress/theme'
import pencil from '../../../packages';
import home from './home.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(pencil)
        app.component('home', home)
    }
}