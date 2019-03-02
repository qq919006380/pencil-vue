import Button from "./button";
import Card from "./card";
import Checkbox from "./checkbox";
import Input from "./input";
import Popover from "./popover";
import Toast from "./toast";
import Tabs from "./tabs";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";

import Plugin from "./plugin";
const components = [Button,Card,Checkbox,Input,Popover,Toast,Tabs,TabsBody,TabsHead,TabsItem,TabsPane]
components.forEach(component => {
    component.install=Vue=>Vue.component(component.name,component)
});
export {Button,Card,Checkbox,Input,Popover,Toast,Tabs,TabsBody,TabsHead,TabsItem,TabsPane,Plugin};