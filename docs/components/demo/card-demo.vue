<template >
  <Card>
    <template #header>
        <a>卡片名称</a>
        <Button>配置</Button>
    </template>
    <div v-for="item in 3">列表内容{{ item }}</div>
  </Card>
</template>