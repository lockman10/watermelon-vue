<template lang="html">
  <footer class="df-footer">
    <span>&copy; 寻伴空间 {{ date }}. All Rights Reserved.</span>
    <div class="beian">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33030202000623">
        <span>浙公网安备 33030202000623号</span>
      </a>
      <a href="http://www.miitbeian.gov.cn/" target="_blank">浙ICP备17006153号-1</a>
    </div>
  </footer>

</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
    }
  },
  computed: {
    date() {
      return new Date().getFullYear()
    }
  },
  methods: {
  }
}
</script>

<style>
.df-footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid;
  text-align: center;
}
.beian{
  margin-top: 10px;
  text-decoration: none;
}
</style>
