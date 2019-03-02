import {Button,Card,Checkbox,Input,Popover,Toast,Tabs,TabsBody,TabsHead,TabsItem,TabsPane,Plugin} from './src/components';
const components = [Button,Card,Checkbox,Input,Popover,Toast,Tabs,TabsBody,TabsHead,TabsItem,TabsPane]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
  Vue.use(Plugin)
}
export {
  Button,Card,Checkbox,Input,Popover,Toast,Tabs,TabsBody,TabsHead,TabsItem,TabsPane,Plugin
};
export default { install,Plugin }