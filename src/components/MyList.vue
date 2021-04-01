<template>
  <div class="myList">
    <ul>
      <li v-for="item in list" :key="item.product_id">
        <router-link :to="{ path: 'goods/details', query: {productID: item.product_id}}">
          <img :src="$target + item.product_picture" alt/>
          <h2>{{ item.product_name }}</h2>
          <h3>{{ item.product_title }}</h3>
          <p>
            <span>{{ item.product_selling_price }}元</span>
            <span
              v-show="item.product_price !== item.product_selling_price"
              class="del"
            >{{ item.product_price }}元</span>
          </p>
        </router-link>
      </li>
      <li v-show="isMore && list.length" id="more">
        <router-link :to="{path: './goods', query: {categoryID: categoryID}}">
          浏览更多
          <i class="el-icon-d-arrow-right"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-list',
  props: ['list', 'isMore', 'isDelete'],
  data () {
    return {}
  },
  computed: {
    // 通过list获取当前显示的商品的分类ID，用于“浏览更多”链接的参数
    categoryID: function () {
      const categoryID = []
      if (this.list !== '') {
        for (let i = 0; i < this.list.length; i++) {
          const id = this.list[i].category_id
          if (!categoryID.includes(id)) {
            categoryID.push(id)
          }
        }
      }
      return categoryID
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
