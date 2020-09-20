import panel from './components/Panel.vue';
import buttons from './components/ButtonComponent.vue';
import accordion from './components/AccordionComponent.vue';

export const routes = [
    {path:'/panel', component: panel},
    {path:'/buttons', component: buttons},
    {path:'/accordion', component: accordion},
]