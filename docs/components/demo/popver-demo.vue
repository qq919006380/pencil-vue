<template >

 <Popover position="top" >
    <template #content>弹出的内容</template>
    <Button>出现在上边</Button>
  </Popover>
  <Popover position="left">
    <template #content>弹出的内容</template>
    <Button>出现在左边</Button>
  </Popover>

  <Popover position="right" trigger="hover">
    <template #content>弹出的内容</template>
    <Button>hover激活</Button>
  </Popover>

 
</template>