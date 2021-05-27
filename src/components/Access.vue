<template>
  <section class="access">
    <AppBackgroundHolder :title="title"/>
    <v-app>
      <v-container>
        <div id='app'>
          <v-calendar    
          ref="calendar"
          v-model="focus"
          color="primary"
          type="month" 
          ></v-calendar>  
        </div> 
      </v-container>
    </v-app>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
 
export default {
  data () {
    return {
      title: 'Access',
      focus: '',
        el: '#app',
        attrs: [
          {
            key: 'today',
            highlight: {
              backgroundColor: '#ff8080',
            },
            dates: new Date(),
            popover: {
              label: 'メッセージを表示できます',
            },
          }
        ],
    }
  },
  components: {
    AppBackgroundHolder,
  }
}
</script>
<style lang="scss" scoped>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  text-align: center;
}
</style>