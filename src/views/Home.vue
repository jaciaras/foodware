<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import axios from 'axios';


export default {
  name: 'Home',
  components: {
    CategoryMenu,
    ItemsList
  },
  created() {
    axios.get('http://localhost:3000/pizza').then( response => {
      console.log(response);
    })
}}
</script>
<style scoped lang="less">
  .home{
    display: flex;
  }

</style>