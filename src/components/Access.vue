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

      <v-container style="margin-top: 20px;">
        <!--
          デートピッカーを表示します。
          type="date":日選択とします。
          locale=ja-jp":日本語とします。
        -->
        <v-date-picker v-model="picker" type="date" locale="ja-jp"></v-date-picker>
        <p>{{ picker }}</p>
      </v-container> 

      <v-container style="margin-top: 20px;">
        <!--
          マンスピッカーを表示します。
          type="month":月選択とします。
          locale=ja-jp":日本語とします。
        -->
        <v-date-picker
          v-model="picker2"
          type="month"
          locale="ja-jp"
          elevation="15"
        ></v-date-picker>
        <!-- マンスピッカーで選択した値を表示します。 -->
        <p>{{ picker2 }}</p>
      </v-container>   

      <v-container style="margin-top: 20px;">
        <!--
          タイムピッカーを表示します。
          format="ampm" : 12時間で表示します。
          use-seconds="true" : 秒も表示します。
        -->
        <v-time-picker
          v-model="picker3"
          elevation="15"
          format="ampm"
          use-seconds="true"
        ></v-time-picker>
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
        // デートピッカーで選択した値
        picker: new Date().toISOString().substr(0, 10),  
        // マンスピッカーで選択した値
        picker2: new Date().toISOString().substr(0, 7),
        // タイムピッカーで選択した値
        picker3: "16:23:51",    }
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