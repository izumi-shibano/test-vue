<template>
  <section class="Article">
    <AppBackgroundHolder :title="title_a"/>
  <!-- 'app'のタグはVue.jsによって操作されます。 -->
   <div id="app">
    <v-app>
      <v-container>
        <v-card height="480px">
        <v-card-title>{{formTitle}}</v-card-title>
          <v-form ref="formref">
            <v-card-text>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="タイトル"
                counter="10"
                :readonly="mode === 'show'"
                required
              >
              </v-text-field>
              <v-text-field
                v-model="author"
                :rules="authorRules"
                label="投稿者"
                counter="10"
                :readonly="mode === 'show'"
                required
              >
              </v-text-field>
              <v-menu v-model="menu" max-width="290px" min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    slot="activator"
                    v-model="post_date"
                    :rules="post_dateRules"
                    label="日付"
                    v-on="on"
                    :readonly="mode !== 'new'"
                    required
                  >
                  </v-text-field>
                </template>
                <v-date-picker v-model="post_date" />
              </v-menu>
              <v-textarea
                v-model="content"
                :rules="contentRules"
                label="本文"
                counter="100"
                rows='3'
                auto-grow
                :readonly="mode === 'show'"
                required
              >
              </v-textarea>
            </v-card-text>
          </v-form>
          <v-divider></v-divider>
          <div v-if="this.mode !== 'show'">
          <v-card-actions>
            <v-btn text @click="submit">送信する</v-btn>
            <span v-if="success">
              <v-alert 
                class='alart'
                type="success"
                dense
                dismissible
              >
                送信成功！
              </v-alert>
            </span>
            <span v-if="failure">
              <v-alert
                class='alart'
                type="error"
                dense
                dismissible
              >
                送信失敗
              </v-alert>
            </span>
          </v-card-actions>
          </div>
        </v-card>
      </v-container>

      <v-container>
        <v-btn to="/article">一覧へ戻る</v-btn>
      </v-container>

   </v-app>
  </div>

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import axios from 'axios'
//import moment from 'moment'
 
export default {
  components: {
    AppBackgroundHolder,
  },

  data () {
    return {
      formTitle:'',
      menu:'',

      success:false,
      failure:false,

      title_a:'Article',

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
      ],
      contentRules: [
        v => !!v || '本文は必須項目です。',
        v => (v && v.length <= 100) || '本文は100文字以内です。'
      ],
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'タイトル',
          value: 'title',
          filter: this.titleFilter
        },
        {
          text: '投稿者',
          value: 'author',
          filter: this.authorFilter
        },
        {
          text: '投稿日時',
          value: 'post_date',
        },
        {
          text: '本文',
          value: 'content',
        },
      ],

      articleList: [],

      mode:'',
    }
  },
  methods: {
    /*moment: function (date) {
      if (date){
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
      }
    },*/

    displayForm() {
      if (this.$route.query.mode === 'show') {
          this.mode = this.$route.query.mode

          this.formTitle = '投稿詳細'

          this.title = this.$route.query.title
          this.author= this.$route.query.author
          this.post_date= this.$route.query.post_date
          this.content= this.$route.query.content
      
      } else if (this.$route.query.mode === 'new') {
          this.mode = this.$route.query.mode

          this.formTitle = '投稿フォーム'
      }
    },
    async submit() {
      const params = {
        title: this.title, //タイトル
        author: this.author, //投稿者
        post_date: this.post_date, //投稿日時
        content: this.content, // 本文
      }
      if (this.$refs.formref.validate()) {
      // すべてのバリデーションが通過したときのみ
      // if文の中に入る
        try{
          await axios.post(process.env.VUE_APP_API_URL, params)
          this.success = true; // 「送信成功！」表示
          this.failure = false; // 「送信失敗」非表示
        } catch(e) {
          console.log("response error")
          this.failure = true; // 「送信失敗」表示
        }
      } else {
        this.success = false;
      } 

      if (this.success) {
      this.reset() 
      }
    },

    reset(){
      this.$refs.formref.reset();
    },
  },
  mounted(){
    this.displayForm();
  }
}
</script>
<style lang="scss" scoped>
.alart {
  margin: 0px;
  padding: 0px,8px;
}
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