<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
  <!-- 'app'のタグはVue.jsによって操作されます。 -->
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <!-- ボタンを表示します。 -->
          <v-btn>デフォルト</v-btn>
          <v-btn color="primary">プライマリ</v-btn>
          <v-btn color="secondary">セカンダリ</v-btn>
          <v-btn color="error">エラー</v-btn> 

          <v-btn rounded>デフォルト</v-btn>
          <v-btn rounded color="primary">プライマリ</v-btn>
          <v-btn rounded color="secondary">セカンダリ</v-btn>
          <v-btn rounded color="error">エラー</v-btn>

          <v-checkbox v-model="isCheck" :label="`value: ${isCheck}`"></v-checkbox>

          <v-radio-group v-model="radioGroup">
            <v-radio label="Apple" :value="0"></v-radio>
            <v-radio label="Banana" :value="1"></v-radio>
            <v-radio label="Orange" :value="2"></v-radio>
          </v-radio-group>

          <v-text-field label="Name"></v-text-field>

          <v-text-field label="Password" type="password"></v-text-field>

          <v-row>
            <v-col cols="2">
              <!-- リストボックスを表示します。 -->
              <v-select
                :items="items"
                label="フルーツ">
              </v-select>
            </v-col>
          </v-row> 

          <v-row>
            <v-col cols="2">
              <v-combobox
                v-model="select"
                :items="items2"
                label="フルーツ">
              </v-combobox>
            </v-col>
          </v-row> 

          <v-row>
            <v-col cols="2">
              <v-textarea
                v-model="model"
                outlined
                clearable="true">
              </v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="2">
              <!-- スイッチを表示します。 -->
              <v-switch
                v-model="value"
                :label="`Switch: ${value.toString()}`">
              </v-switch>
            </v-col>
          </v-row> 

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">ボタン</v-btn>
            </template>
            <span>ツールチップ</span>
          </v-tooltip> 
          <v-overflow-btn
            label="フルーツ"
            :items="fruits"
          ></v-overflow-btn>

          <v-slider
            label="ボリューム"
            class="align-center"
            v-model="slider"
            :min="min"
            :max="max"
            hide-details
            style="width: 500px">
            <!-- スライダーの現在値を表示します。 -->
            <template v-slot:append>
              <v-text-field
                class="mt-0 pt-0"
                v-model="slider"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>

          <v-container style="width: 300px">
          <!--
            アラートを表示します。
            typeでsuccess/info/warning/errorを指定すると設定された色とアイコンで表示されます。
            dismissibleを指定すると閉じるボタンが表示され、閉じられるようになります。
          -->
            <v-alert type="success" dismissible>Success alert</v-alert>
            <v-alert type="info">Info alert</v-alert>
            <v-alert type="warning">Warning alert</v-alert>
            <v-alert type="error">Error alert</v-alert>
          </v-container>          

          <v-card style="width: 400px">
            <!-- ツールバーを表示します。 -->
            <v-toolbar>
              <!-- ハンバーガーメニューアイコン -->
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <!-- ツールバーのタイトル -->
              <v-toolbar-title>ツールバータイトル</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- 検索アイコン -->
              <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
              <!-- ドットメニューアイコン -->
              <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </v-toolbar>
            <v-card-title>カードタイトル</v-card-title>
            <v-card-text>カード本文</v-card-text>
          </v-card>

          <v-container style="width: 400px">
            <!-- システムバーを表示します。 -->
            Android風<br/>
            <v-system-bar dark color="primary">
              <v-spacer></v-spacer>
              <v-icon>mdi-wifi-strength-4</v-icon>
              <v-icon>mdi-signal-cellular-outline</v-icon>
              <v-icon>mdi-battery</v-icon>
              <span>12:30</span>
            </v-system-bar>
            <br>
            Windows風<br/>
            <v-system-bar window>
              <v-icon>mdi-message</v-icon>
              <span>10 unread messages</span>
              <v-spacer></v-spacer>
              <v-icon>mdi-minus</v-icon>
              <v-icon>mdi-checkbox-blank-outline</v-icon>
              <v-icon>mdi-close</v-icon>
            </v-system-bar>
          </v-container>

          <v-breadcrumbs :items="items3"></v-breadcrumbs>
          <!-- チップを表示します。 -->
          <v-chip
            color="primary"
            v-if="isOpend"
            close
            @click:close="closeHandler">チップ</v-chip>
            
          <Tableetc/>
          <Parts/>
        </v-container>
      </v-main>
    </v-app>
  </div>

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import Tableetc from './Tableetc.vue'
import Parts from './Parts.vue'
 
export default {
  data () {
    return {
      title: 'Blog',
      isCheck: true,
      radioGroup: 1,   
      items: ['', 'Apple', 'Banana', 'Orange'],
      select: ['未選択'],
      items2: ['リンゴ', 'バナナ', 'オレンジ'],
      model: '',
      value: true,
      fruits: ['リンゴ', 'バナナ', 'オレンジ'],  
      min: 0,
      max: 100,
      slider: 50, 
      items3: [
         {
          text: "root",
          disabled: false,
          href: 'http://localhost:8080/#/about',
        },
        {
          text: "subdir1",
          disabled: false,
          href: 'http://localhost:8080/#/work#work-1',
        },
        {
          text: "subdir2",
          disabled: true,
          href: 'vuetify_v-breadcrumbs2.html',
        },
      ],
      isOpend: true,
        }
  },
  methods: {
    // チップのクローズボタンが押下された時に呼出されます。
    closeHandler: function() {
    // チップのオープンフラグをクリアします。
      this.isOpend = false;
    }
  }, 
  components: {
    AppBackgroundHolder,
    Tableetc,
    Parts
  }
}
</script>
<style lang="scss" scoped>
#direction {
  height: 1000px;
}
 
#coding {
  height: 1000px;
}
 
#design {
  height: 1000px;
}
</style>