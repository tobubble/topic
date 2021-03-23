<template>
  <div id="home">
    <nav-cpn />
    <header-cpn />
    <card-cpn />
    <footer-cpn />
    <left-window />
    <right-window />
  </div>
</template>

<script>
import NavCpn from './components/appCpn/nav'
import HeaderCpn from './components/appCpn/header'
import CardCpn from './components/appCpn/card'
import FooterCpn from './components/appCpn/footer'
import LeftWindow from './components/appCpn/leftWindow'
import RightWindow from './components/appCpn/rightWindow'

export default {
  name: 'App',
  components: {
    NavCpn,
    HeaderCpn,
    CardCpn,
    FooterCpn,
    LeftWindow,
    RightWindow
  }
}
</script>

<style>
#home {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
</style>
