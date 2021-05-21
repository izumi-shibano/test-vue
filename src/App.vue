<template>
  <v-app>
    <AppHeader/>
    <!-- ここから追加 -->
    <AppFooter/>
    <!-- ここまで追加 -->
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue' // 今回追加
 
export default {
  components: {
    AppHeader,
    AppFooter // 今回追加
  }
}
</script>
 