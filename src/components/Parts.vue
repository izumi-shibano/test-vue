<template>
  <section>
  <div id="app">
    <v-app>
        <v-container style="width: 300px;">
          <v-row>
            <v-col>
              <!-- カード内にフローティングアクションボタンを配置します。 -->
              <v-card>
                <v-card-title>タイトル</v-card-title>
                <!-- テキストを表示するためのv-card-text -->
                <v-card-text style="height: 200px;">本文</v-card-text>
                <!-- フローティングアクションボタンを配置するためのv-card-text -->
                <v-card-text style="height: 50px; position: relative">
                  <!--
                    フローティングアクションボタンを定義します。
                    fab:丸いボタンにします。
                    absolute/top/right:コンポーネントの指定位置に表示します。
                  -->
                  <v-btn
                    fab
                    absolute
                    top
                    right
                    color="primary"
                  >
                    <!-- プラスのアイコンにします。 -->
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container style="width: 300px;">
          <!-- エクスパンションパネルを表示します。 -->
          <v-expansion-panels>
            <!-- 1つ目のパネルを定義します。 -->
            <v-expansion-panel>
              <v-expansion-panel-header>果物</v-expansion-panel-header>
              <v-expansion-panel-content>リンゴ、バナナ、オレンジ</v-expansion-panel-content>
            </v-expansion-panel>
            <!-- 2つ目のパネルを定義します。 -->
            <v-expansion-panel>
              <v-expansion-panel-header>野菜</v-expansion-panel-header>
              <v-expansion-panel-content>大根、人参、ジャガイモ</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>

        <v-card class="mx-auto" max-width="400" tile>
          <!--
            リストを表示します。
            rouned:リスト項目を選択したとき角丸で表示します。
          -->
          <v-list rounded>
            <!-- 選択した時の色を設定します。 -->
            <v-list-item-group color="primary">
              <!-- リスト項目を定義します。 -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>リンゴ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>バナナ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <!-- 区切り線を表示します。 -->
              <v-divider></v-divider>
              
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>オレンジ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>

        <v-container style="width: 600px;">
          <!--
            タイムラインを表示します。
            項目は左右交互に表示されます。
            左側に表示される場合、左寄せになるためタイムライン側に評させる場合、右寄せにします。
          -->
          <v-timeline>
            <v-timeline-item>項目1</v-timeline-item>
            <v-timeline-item class="text-right">項目2</v-timeline-item>
            <v-timeline-item>項目3</v-timeline-item>
            <v-timeline-item class="text-right">項目4</v-timeline-item>
            <v-timeline-item>項目5</v-timeline-item>
          </v-timeline>
        </v-container>

        <v-container style="margin-top: 20px;">
          <v-layout justify-center row wrap>
            <!-- 展開するフローティングアクションボタンを表示します。 -->
            <v-speed-dial
              v-model="fab"
              direction="bottom"
              >
              <template v-slot:activator>
                <v-btn
                  color="blue"
                  dark
                  fab
                >
                  <v-icon v-if="fab">mdi-close</v-icon>
                  <v-icon v-else>mdi-plus</v-icon>
                </v-btn>
              </template>
              <!-- 展開された時に表示されるボタン -->
              <v-btn
                fab
                dark
                small
                color="green"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="indigo"
              >
                <v-icon>mdi-file</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="red"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-layout>
        </v-container>

        <v-container>
          <!-- v-cardをホバー対象とします。 -->
          <v-hover v-slot:default="{ hover }">
            <!-- v-hoverによりv-cardのelevationが2から12に変更されます。 -->
            <v-card
              :elevation="hover ? 12 : 2"
              class="mx-auto"
              height="150"
              width="200">
              <v-card-text
                class="my-4 text-center title">
                Hello world!
              </v-card-text>
            </v-card>
          </v-hover>
        </v-container>

        <v-container style="margin-top: 20px;">
          <!-- カラーピッカーを表示します。 -->
          <v-color-picker v-model="val"></v-color-picker>
          <!-- カラーピッカーで選択した値を表示します。 -->
          <div>{{ val }}</div>
        </v-container>   

        <v-container style="margin-top: 20px; width: 300px;">
          <!--
            レーティングを表示します。
            indeterminate:常にアニメーションします。
          -->
          <v-progress-linear
            indeterminate
            color="primary"
          ></v-progress-linear>
        </v-container>

        <v-container style="margin-top: 20px;">
          <!--
            プログレスバー(円形)を表示します。
            indeterminate:常にアニメーションします。
          -->
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-container>
                     

     </v-app>
  </div>
  </section>
</template>
<script> 
export default {
  data () {
    return {
      fab: false,
      val: "FFFFFF",      
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>