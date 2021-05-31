<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
    <div>
    <h2>単体のチェックボックス</h2>

     <input type="checkbox" id="checkbox" v-model="checked">
     <label for="checkbox">{{ checked }}</label>
   </div>
   <div>
    <h2>複数のチェックボックス</h2>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
   </div>

    <div>
    <h2>ラジオボタン</h2>
      <label><input type="radio" v-model="radio" value="a">A</label>
      <label><input type="radio" v-model="radio" value="b">B</label>
      <label><input type="radio" v-model="radio" value="c">C</label>   
    </div>
    <div>
      <h2>テキストエリア</h2>
      <label>テキスト</label>
      <input type="text" v-model="text" value="text">
    </div>

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
          <!-- ラジオボタンを表示します。 -->
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
              <!-- コンボボックスを表示します。 -->
              <v-combobox
                v-model="select"
                :items="items2"
                label="フルーツ">
              </v-combobox>
            </v-col>
          </v-row> 
          <v-row>
            <v-col cols="2">
              <!--
                テキストエリアを表示します。 
                outlined:枠線表示します。
                clearable:クリア機能を追加します。
              -->
              <v-textarea
                v-model="model"
                outlined
                clearable="true">
              </v-textarea>
            </v-col>
          </v-row>                           
          <Tableetc/>
        </v-container>
      </v-main>
    </v-app>
  </div>

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import Tableetc from './Tableetc.vue'
 
export default {
  data () {
    return {
      title: 'Blog',
      checked: false,
      checkedNames: [],
      radio: '',
      text: '',
      isCheck: true,
      radioGroup: 1,   
      items: ['', 'Apple', 'Banana', 'Orange'],
      select: ['未選択'],
      items2: ['リンゴ', 'バナナ', 'オレンジ'],
      model: '',
       }
  },
  components: {
    AppBackgroundHolder,
    Tableetc
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