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
      if (this.$refs.formref.validate()) {
        // すべてのバリデーションが通過したときのみ
        // if文の中に入る
        this.success = true;
        const params = {
          title: this.title,
          author: this.author,
          post_date: this.post_date,
          content: this.content,
            }
        const response = await axios.post('https://directus.minamirnd.work/items/articles', params)
          response
          .catch( error => {
          console.log("response error", error)
          return false 
          })
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