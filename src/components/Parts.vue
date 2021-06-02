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

   </v-app>
  </div>
  </section>
</template>
<script> 
export default {
  data () {
    return {
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>