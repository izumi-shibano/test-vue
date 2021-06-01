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
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>オレンジ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>

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