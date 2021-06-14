<template>
  <section class="form">
    <AppBackgroundHolder :title="title_f"/>
  <!-- 'app'のタグはVue.jsによって操作されます。 -->
   <div id="app">
    <v-app>
    <v-card>
      <v-card-title>STEP:0 フォーム</v-card-title>
        <v-form ref="formref">
          <v-card-text>
           <v-text-field
              v-model="title"
              :rules="titleRules"
              label="タイトル"
              counter="10"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="author"
              :rules="authorRules"
              label="投稿者"
              counter="10"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="post_date"
              :rules="post_dateRules"
              label="日付"
              counter="10"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="content"
              :rules="contentRules"
              label="本文"
              counter="10"
              required
            >
            </v-text-field>
          </v-card-text>
        </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="submit">送信する</v-btn>
        <span v-if="success">送信成功！</span>
        <span v-if="failure">送信失敗</span>
      </v-card-actions>
    </v-card> 
   </v-app>
  </div>

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import axios from 'axios'
 
export default {
  components: {
    AppBackgroundHolder,
  },

  data () {
    return {
      success:false,
      failure:false,
      title_f:'Form',
      title: '',
      author: '',
      post_date: '',
      content: '',
      titleRules: [
        v => !!v || 'タイトルは必須項目です。',
        v => (v && v.length <= 10) || 'タイトルは10文字以内です。'
      ],
      authorRules: [
        v => !!v || '投稿者は必須項目です。',
        v => (v && v.length <= 10) || '投稿者は10文字以内です。'
      ],
      post_dateRules: [
        v => !!v || '日付は必須項目です。',
        v => (v && v.length <= 10) || '日付は10文字以内です。'
      ],
      contentRules: [
        v => !!v || '本文は必須項目です。',
        v => (v && v.length <= 10) || '本文は10文字以内です。'
      ],
    }
  },
  methods: {
     async submit() {
        const params = {
          title: this.title, //タイトル
          author: this.author, //投稿者
          post_date: this.post_date, //投稿日時
          content: this.content, // 本文
        }
        const post_url = 'https://directus.minamirnd.work/items/articles';
        if (this.$refs.formref.validate()) {
        // すべてのバリデーションが通過したときのみ
        // if文の中に入る
          try{
            await axios.post(post_url, params)
            this.success = true; // 「送信成功！」表示
            this.failure = false; // 「送信失敗」非表示
          } catch(e) {
            console.log("response error")
            this.failure = true; // 「送信失敗」表示
          }
        } else {
          this.success = false;
        }        
      }
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