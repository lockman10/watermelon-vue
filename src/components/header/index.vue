<template lang="html">
  <div>

    <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-row justify="space-around" type="flex">
        <img src="./../../assets/youyuan.jpeg">
        <el-menu-item index="1" :route="{ name:'hello' }">首页</el-menu-item>
        <el-menu-item index="2" :route="{ name:'match' }">寻伴</el-menu-item>
        <el-menu-item index="3" :route="{ name:'apprec' }">梦门</el-menu-item>
      </el-row>
    </el-menu>
  </div>

</template>

<script>

export default {
  name: 'header',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
img{
  height: 45px;
  position: absolute;
  left: 10px;
}
</style>
