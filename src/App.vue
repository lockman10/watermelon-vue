<template>
  <div id="app">
    <div id="header">
      <app-header></app-header>
    </div>
    <div id="content">
      <router-view/>
    </div>
    <div id="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#header{
  position: center;
  padding-bottom: 90px;
}
</style>
