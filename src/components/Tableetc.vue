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
        <v-row justify="center">
          <!-- ボタン押下でダイアログを開きます。 -->
          <v-btn @click.stop="dialog = true">ダイアログを開く</v-btn>
          <!-- ダイアログを定義します。 -->
          <v-dialog
            v-model="dialog"
            max-width="290">
            <v-card>
              <v-card-title>タイトル</v-card-title>
              <v-card-text>本文</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false">閉じる</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <v-row justify="center">
          <v-btn @click.stop="dialog = true">ダイアログを開く</v-btn>
          <!--
            モーダルダイアログを定義します。
            persistentを指定するとモーダルになります。
          -->
           <v-dialog
              v-model="dialog2"
              max-width="290"
              persistent>
              <v-card>
                <v-card-title>タイトル</v-card-title>
                <v-card-text>本文</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialog = false">閉じる</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </v-row> 
        <v-container class="text-center">
          <v-bottom-sheet v-model="sheet" persistent>
            <!-- ボトムシートを表示するボタンを定義します。 -->
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on">
                ボトムシートを開く
              </v-btn>
            </template>
            <!-- ボトムシートの内容を定義します。 -->
            <v-sheet class="text-center" height="100px">
              <v-btn
                text
                color="error"
                @click="sheet = !sheet">
                閉じる
              </v-btn>
              <div class="py-3">
                ボトムシートの内容
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </v-container>
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
      ],
      dialog: false,
      dialog2: false,
      sheet: false,      
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>