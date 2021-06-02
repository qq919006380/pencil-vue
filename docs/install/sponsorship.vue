<template>
  <Popover position="bottom" trigger="hover">
    <template #content>
      <div class="box">
        <img :src="$withBase('wx.jpg')" />
      </div>
    </template>
    <a style="cursor: pointer">
      <slot></slot>
    </a>
  </Popover>
</template>

<style>
.pencil_Toast {
  width: 300px;
}
.box {
  width: 300px;
  height: 420px;
}
</style>