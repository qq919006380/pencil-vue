<template>
  <div class="container">
    <a href="/install/">
      <Button elevation="5" class="btn"> 快速上手 →</Button>
    </a>
  </div>

  <div class="card-container">
    <Card class="card">
      <template #header>
        <h3>简明优先</h3>
      </template>
      <p>用法简单,可开箱即用,构建声明式UI框架</p>
    </Card>
    <Card class="card">
      <template #header>
        <h3>Vue3 驱动</h3>
      </template>
      <p>享用最新 Vue3 + webpack 开发环境</p>
    </Card>
    <Card class="card">
      <template #header>
        <h3>源码易读</h3>
      </template>
      <p>源码简单通俗，容易理解看懂</p>
    </Card>
  </div>
</template>

<script>
export default {
  methods: {
    go({ link = "" }) {
      if (/^http/.test(this.link)) {
        window.open(this.link);
      } else {
        this.$router.push(this.link);
      }
    },
  },
};
</script>

<style scoped lang='less'>
.container {
  text-align: center;
}
.btn {
  margin: 0px 0 45px 0;
  padding: 20px 35px;
  font-weight: bold;
    color: #4e6e8e;
}

.btn:hover {
  background: rgba(197, 236, 190, 0.2);
}

.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card {
    color: rgba(72, 110, 142, 1);
    width: 30%;
  }
}

@media (max-width: 970px) {
  .card-container{
    display: block;
    .card{
      margin: 0 auto;
      margin-bottom: 40px;
      width: 80%;
    }
  }
}
.footer {
  margin-top: 1rem;
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
</style>
