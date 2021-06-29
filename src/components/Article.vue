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
    }
  },
  methods: {
    async indexArticles () {
      this.articleList = [];
      try{
        const response = await axios.get(process.env.VUE_APP_API_URL)
        this.articleList = response.data.data;
      } catch(e) {
        console.log("articleList error" + e )
      }
    },
    /*clickRow (row) {
      try{
        this.detailTitle = row.title;
        //this.detailAuthor = row.author;
        //this.detailDate = row.post_date;
        //this.detailContent = row.content;
        console.log(row)
      } catch(e) {
        console.log("clickRow error" + e )
      }
    },*/

    clickRow (row) {
      this.$router.push({
        path: '/articledetail',
        query :{
          title: row.title,
          author: row.author,
          post_date: row.post_date,
          content: row.content
        }
      })
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