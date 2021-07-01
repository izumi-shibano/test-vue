import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList:[]
  },
  mutations: {
    getArticles(state,article_data){
      state.articleList = article_data
    }
  },
  actions: {
    async getArticlesAction(context){
      const response = await axios.get(process.env.VUE_APP_API_URL)
        .catch(error => {
          console.log(error);
      })
      context.commit("getArticles",response.data.data)
    }
  },
  modules: {
  }
})