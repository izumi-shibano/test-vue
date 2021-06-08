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
        <v-container style="width: 500px;">
          <v-data-table
          :headers="headers2"
          :items="items2"
        >
          <!-- website列だけをカスタマイズ。 -->
          <template v-slot:[`item.website`]="{ item }">
            <!-- リンクを別タブで開く・item.websiteの値でリンク設定 -->
            <a target="_blank" :href="item.website">
              {{ item.website }}
            </a>
          </template>
        </v-data-table>
        </v-container>  

        <v-container style="width: 600px;">
          <!-- テーブルを表示します。 -->
          <v-data-table
            :headers="headers3"
            :items="items3">
            <!-- テーブルのname項目で改行を表示するようにします。 -->
            <template v-slot:[`item.name`]="{ item }">
              <div style="white-space: pre;">{{ item.name }}</div>
            </template>
          </v-data-table>
        </v-container>

        <v-container style="margin-top: 20px; width: 300px;">
          <!--
            スパークラインを表示します。
            value: 表示するスパークラインの値
            gradient: グラデーション表示
            smooth: 角丸め
            line-width: ラインの太さ
          -->
          <v-sparkline
            :value="value"
            :gradient="gradient"
            smooth="10"
            line-width="2"
          ></v-sparkline>
        </v-container>                

      </v-container>
   </v-app>
  </div>
  </section>
</template>
<script>

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]


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
      headers2: [
        { text: "番号", value: "no" },
        { text: "名前", value: "name" },
        { text: "ウェブサイト", value: "website" },
      ],
      items2: [
        { no: 1, name: "ニューラル", website: "http://newral.info" },
        { no: 2, name: "プログラムを書こう", website: "https://www.paveway.info/" },
        { no: 3, name: "PWEditor(iOSアプリ)", website: "https://apps.apple.com/jp/app/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF-pweditor/id1088572314" },
      ], 
      headers3: [
        { text: "番号", value: "no" },
        { text: "名前", value: "name" },
      ],
      items3: [
        { no: 1, name: "ニューラル" },
        { no: 2, name: "プログラムを書こう" },
        { no: 3, name: "PWEditor\r\n(iOSアプリ)" },
      ],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradient: gradients[5],                    
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>