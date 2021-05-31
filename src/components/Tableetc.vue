<template>
  <section>
  <div id="app">
    <v-app>
     <v-container>
        <v-data-table
            :headers="headers"
            :items="items">
        </v-data-table>
        <!-- グリッドを表示します。 -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-text class="text-center">1-1</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text class="text-center">1-2</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text class="text-center">1-3</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text class="text-center">2-1</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text class="text-center">2-2</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text class="text-center">2-3</v-card-text>
            </v-card>
          </v-col>
        </v-row>
     </v-container>
   </v-app>
  </div>
  </section>
</template>
<script> 
export default {
  data () {
    return {
      headers: [
        {
          text: 'No',
          value: 'no',
        },
        {
          text: '名前',
          value: 'name',
        },
        {
          text: '価格',
          value: 'price',
        },
      ],
      // テーブルのデータ行を定義します。
      items: [
        {
          no: 1,
          name: "リンゴ",
          price: 100,
        },
        {
          no: 2,
          name: "バナナ",
          price: 110,
        },
        {
          no: 3,
          name: "オレンジ",
          price: 120,
        },
      ]
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>