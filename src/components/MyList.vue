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

<style scoped lang="scss">
.myList{
  ul {
    li {
      z-index: 1;
      float: left;
      width: 234px;
      height: 280px;
      padding: 10px 0;
      margin: 0 0 14.5px 13.7px;
      background-color: white;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      position: relative;

      &:hover {
        z-index: 2;
        -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        -webkit-transform: translate3d(0, -2px, 0);
        transform: translate3d(0, -2px, 0);
      }

      img {
        display: block;
        width: 160px;
        height: 160px;
        background: url(../assets/imgs/placeholder.png) no-repeat 50%; //占位技巧
        margin: 0 auto;
      }

      h2 {
        margin: 25px 10px 0;
        font-size: 14px;
        font-weight: 400;
        color: #333;
        text-align: center;
        text-overflow: ellipsis;  // 显示省略符号来代表被修剪的文本。
        white-space: nowrap;  // 规定段落中的文本不进行换行
        overflow: hidden;
      }

      h3 {
        margin: 5px 10px;
        height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #b0b0b0;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      p {
        margin: 10px 10px 10px;
        text-align: center;
        color: #ff6700;

        .del {
          margin-left: 0.5em;
          color: #b0b0b0;
          text-decoration: line-through;
        }
      }
    }
  }
  #more {
    // 居中
    text-align: center;
    line-height: 280px;
    a {
      font-size: 18px;
      color: #333;

      &:hover {
        color: #ff6700;
      }
    }
  }
}
</style>
