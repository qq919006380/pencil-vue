import Vue from 'vue';

import Button from './button';
import Input from './input';
import Card from './card';
import Checkbox from './checkbox';




Vue.component('wired-button',Button)
Vue.component('wired-input',Input)
Vue.component('wired-card',Card)
Vue.component('wired-checkbox',Checkbox)


new Vue({
    el:"#app",
    
})