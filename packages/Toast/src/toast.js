import ToastConstructor from './index.vue';
import { createVNode, render } from 'vue'
let seed = 0
export default function (message = '', opts) {
    seed++
    let id = "pencil_toast_id_" + seed
    let options = {
        message: message,
        id,
        ...opts
    }
    Object.assign(options, opts)
    var vm = createVNode(
        ToastConstructor,
        options,
        null
    );

    var container = document.createElement("div");
    container.id = id
    render(vm, container);
    document.body.appendChild(container)
};
