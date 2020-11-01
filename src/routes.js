import panel from './components/Panel.vue';
import buttons from './components/ButtonComponent.vue';
import accordion from './components/AccordionComponent.vue';
import checkbox from './components/CheckBoxComponent.vue';
import modal from './components/ModalComponent.vue';

export const routes = [
    {path:'/panel', component: panel},
    {path:'/buttons', component: buttons},
    {path:'/accordion', component: accordion},
    {path:'/checkbox', component: checkbox},
    {path:'/modals', component: modal},
]