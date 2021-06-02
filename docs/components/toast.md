<script setup>
  import toastHtml from './demo/toast-html.vue'
  import toastClose from './demo/toast-close.vue'
</script>

## 基本用法

<Button @click="$toast('点击弹出提示',{ position:'top'})">顶部弹出</Button>
<Button @click="$toast('点击弹出提示',{ position:'middle'})">中间弹出</Button>
<Button @click="$toast('点击弹出提示',{ position:'bottom'})">下面弹出</Button>

```html
<Button @click="$toast('点击弹出提示',{ position:'top'})">顶部弹出</Button>
<Button @click="$toast('点击弹出提示',{ position:'middle'})">中间弹出</Button>
<Button @click="$toast('点击弹出提示',{ position:'bottom'})">下面弹出</Button>

```

## 使用 HTML 片段
<toastHtml></toastHtml>

<<< @/components/demo/toast-html.vue


## 设置关闭事件
<toastClose></toastClose>

<<< @/components/demo/toast-html.vue

## Options
<table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>position</td>
        <td>弹出位置</td>
        <td>String</td>
        <td>top | middle | bottom</td>
        <td>top</td>
      </tr>
      <tr>
        <td>autoClose</td>
        <td>设置消息关闭时间，秒，设置为false则不关闭</td>
        <td>Boolean | Number</td>
        <td>—</td>
        <td>3</td>
      </tr>
      <tr>
        <td>onClose</td>
        <td>关闭事件</td>
        <td>Function</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>showClose</td>
        <td>是否显示关闭按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>enableHtml</td>
        <td>是否将 message 属性作为 HTML 片段处理</td>
        <td>Boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
    </tbody>
  </table>