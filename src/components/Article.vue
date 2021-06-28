<template>
  <section class="form">
    <AppBackgroundHolder :title="title_f"/>
  <!-- 'app'のタグはVue.jsによって操作されます。 -->
   <div id="app">
    <v-app>
      <v-container>
        <v-btn to="/articledetail">新規登録</v-btn>
        <v-row>
          <v-col>
            <v-text-field
              v-model="titleValue"
              append-icon="mdi-magnify"
              label="title"
              single-line
              hide-details
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="authorValue"
              append-icon="mdi-magnify"
              label="author"
              single-line
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
          <v-data-table
            :headers="headers"
            :items="articleList"
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
      titleValue: '',
      authorValue:'',

      success:false,
      failure:false,

      title_f:'Article',

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
        this.detailTitle = row.title;
        this.detailAuthor = row.author;
        this.detailDate = row.post_date;
        this.detailContent = row.content;
      } catch(e) {
        console.log("clickRow error" + e )
      }
    },
    titleFilter(value){
      if (!this.titleValue) {
        return true
      }
      return value === this.titleValue
    },
    authorFilter(value){
      if (!this.authorValue) {
        return true
      }
      return value === this.authorValue
    },
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