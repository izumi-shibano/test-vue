<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
    <HomeWork/>
    <HomeService/>
    <HomeBlog/>
    <HomeAccess/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue' 
import HomeWork from './HomeWork.vue'
import HomeService from './HomeService.vue'
import HomeBlog from './HomeBlog.vue'
import HomeAccess from './HomeAccess.vue'

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeWork,
    HomeService,
    HomeBlog,
    HomeAccess
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>