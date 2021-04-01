<template>
  <div id="app">
    <!--最顶部topbar-->
    <div class="topbar">
      <ul>
        <li><a href="#">登陆</a>|<a href="#">注册</a></li>
        <li><a href="#">我的收藏</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">购物车（0）</a></li>
      </ul>
    </div>
    <!--下方容器-->
    <el-container class="container">
      <!--导航栏-->
      <el-header>
        <el-menu :default-active="activeIndex" router class="el-menu" mode="horizontal" @select="handleSelect">
          <div class="menu"></div>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/goods">全部商品</el-menu-item>

          <div class="search">
            <el-input placeholder="请输入搜索内容" v-model="search">
              <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
            </el-input>
          </div>
        </el-menu>
      </el-header>
      <!--主体部分-->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>

      <!--底栏-->
      <el-footer>
        <div class="foot-container">
          <p>EB非常棒！版权所有 2021</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/',
      search: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    searchClick () {
      if (this.search !== '') {
        console.log(this.search)
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base";
@import "assets/scss/mixin";

.topbar {
  @include flex(flex-end, center);
  height: 40px;
  background-color: #333;

  ul {
    @include flex();

    a {
      display: inline-block;
      padding: 0 20px;
      color: #999;

      &:hover {
        color: #fff;
      }
    }
  }
}

.container {
  min-height: 1080px;
  .el-header {
    .el-menu {
      @include flex(flex-start);
      width: 1225px;
      height: 60px;
      .search {
        width: 300px;
        padding-left: 100px;
      }
    }
  }
  .el-footer{
    padding: 0;
    .foot-container{
      height: 100%;
      line-height: 40px;
      background-color: #333333;
      color: #999999;
      font-size: 12px;
      text-align: center;
    }
  }
}

</style>
