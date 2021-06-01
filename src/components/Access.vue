<template>
  <section class="access">
    <AppBackgroundHolder :title="title"/>
    <v-app>
      <v-container style="width: 600px;">
        <div id='app'>
          <v-calendar
            type="month"
            color="primary"
            :events="events"
          ></v-calendar>
        </div> 
      </v-container>

      <v-container style="width: 600px;">
        <v-calendar
          type="week"
          color="primary"
          :events="events2"
        ></v-calendar>
      </v-container>  

      <v-container style="width: 600px; height: 800px;">
        <v-calendar
          type="day"
          color="primary"
          :events="events3"
        ></v-calendar>
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
        events: [
          {
            name: '打合せ',
            start: '2021-06-03 09:00',
            end: '2021-06-03 12:00',
          },
        ],
        events2: [
          {
            name: '打合せ',
            start: '2021-06-05 09:00',
            end: '2021-06-05 12:00',
          }
      ],
        events3: [
          {
            name: '打合せ',
            start: '2021-06-01 09:00',
            end: '2021-06-01 12:00',
          },
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