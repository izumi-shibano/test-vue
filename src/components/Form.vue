<template>
  <section class="form">
    <AppBackgroundHolder :title="title_f"/>
  <!-- 'app'のタグはVue.jsによって操作されます。 -->
   <div id="app">
    <v-app>
      <v-container>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
          <v-data-table
            :headers="headers"
            :items="articleList"
            :items-per-page="5"
            :search="search"
            @click:row="clickRow"
            >
            <!--v-data-tabelのitemsをslotに設定-->
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.id }}</td>
              <td class="text-xs-center">{{ props.item.title }}</td>
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.post_date }}</td>
              <td class="text-xs-center">{{ props.item.content }}</td>
              <td class="justify-center layout px-0">
              </td>
            </template>
          </v-data-table>
      </v-container> 
      <v-container>
        <v-card>
          <v-card-text>タイトル：{{detailTitle}}</v-card-text>
          <v-card-text>投稿者：{{detailAuthor}}</v-card-text>
          <v-card-text>投稿日：{{moment(detailDate)}}</v-card-text>
          <v-card-text>本文：{{detailContent}}</v-card-text>
        </v-card>
      </v-container>
      <v-container style="margin-bottom: 50px;">
        <v-card>
        <v-card-title>投稿フォーム</v-card-title>
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
              <v-menu v-model="menu" max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      slot="activator"
                      v-model="post_date"
                      :rules="post_dateRules"
                      label="日付"
                      v-on="on"
                      readonly
                      required
                    >
                    </v-text-field>
                  </template>
                <v-date-picker v-model="post_date" />
              </v-menu>
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
      </v-container>
   </v-app>
  </div>

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import moment from "moment"
import axios from 'axios'

 
export default {
  components: {
    AppBackgroundHolder,
  },

  data () {
    return {
      search: '',
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
      ],
      contentRules: [
        v => !!v || '本文は必須項目です。',
        v => (v && v.length <= 10) || '本文は10文字以内です。'
      ],
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'タイトル',
          value: 'title',
        },
        {
          text: '投稿者',
          value: 'author',
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
      detailTitle:'',
      detailAuthor:'',
      detailDate:'',
      detailContent:''
    }
  },
  methods: {
    moment: function (date) {
      if (date){
      return moment(date).format('YYYY-MM-DD HH:mm:SS')
      }
    },
    async indexArticles () {
      this.articleList = [];
      try{
        const response = await axios.get(process.env.VUE_APP_API_URL)
        this.articleList = response.data.data;
      } catch(e) {
        console.log("articleList error" + e )
      }
    },
    async clickRow (row) {
      try{
        //const getid = await axios.get(process.env.VUE_APP_API_URL+"/"+row.id)
        //this.detailTitle = getid.data.data.title;
        this.detailTitle = row.title;
        this.detailAuthor = row.author;
        this.detailDate = row.post_date;
        this.detailContent = row.content;
      } catch(e) {
        console.log("clickRow error" + e )
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
      }
  },
  mounted() {
    this.indexArticles();
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