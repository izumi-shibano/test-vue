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

  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
 
export default {
  data () {
    return {
      title: 'Blog',
      checked: false,
      checkedNames: [],
      radio: '',
      text: '',
    }
  },
  components: {
    AppBackgroundHolder
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