<template>
  <div class="home">
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="$target + item.imgPath" :alt="item.describes" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-box">
      <div class="main">
      <div class="phone">
        <div class="box-hd">
          <h3 class="title">手机</h3>
        </div>
        <div class="box-bd">
          <div class="promo-list">
            <router-link to="">
              <img :src="$target + 'public/imgs/phone/phone.png'" alt>
            </router-link>
          </div>
          <div class="list">
            <my-list :list="phoneList" :is-more="true"></my-list>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import MyList from '@/components/MyList'

export default {
  name: 'Home',
  components: { MyList },
  data () {
    return {
      carousel: '', // 轮播图数据
      phoneList: '', // 手机商品列表
      miTvList: '', // 小米电视商品列表
      applianceList: '', // 家电商品列表
      applianceHotList: '', // 热门家电商品列表
      accessoryList: '', // 配件商品列表
      accessoryHotList: '', // 热门配件商品列表
      protectingShellList: '', // 保护套商品列表
      chargerList: '', // 充电器商品列表
      applianceActive: 1, // 家电当前选中的商品分类
      accessoryActive: 1 // 配件当前选中的商品分类
    }
  },
  created () {
    // 获取轮播图数据
    this.axios
      .post('/api/resources/carousel', {})
      .then(res => {
        this.carousel = res.data.carousel
      })
      .catch(err => {
        return Promise.reject(err)
      })
    // 获取各类商品数据
    this.getPromo('手机', 'phoneList')
    this.getPromo('电视机', 'miTvList')
    this.getPromo('保护套', 'protectingShellList')
    this.getPromo('充电器', 'chargerList')
    this.getPromo(
      ['电视机', '空调', '洗衣机'],
      'applianceList',
      '/api/product/getHotProduct'
    )
    this.getPromo(
      ['保护套', '保护膜', '充电器', '充电宝'],
      'accessoryList',
      '/api/product/getHotProduct'
    )
  },
  methods: {
    getPromo (categoryName, val, api = '/api/product/getPromoProduct') {
      // api = api !== undefined ? api : '/api/product/getPromoProduct'
      this.axios
        .post(api, {
          categoryName
        })
        .then(res => {
          this[val] = res.data.Product
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">

.main-box {
  background-color: #f5f5f5;
  padding-bottom: 20px;
  .main {
    margin: 0 auto;
    max-width: 1300px;
  }
}

.block {
  margin: 0 auto;
  max-width: 1225px;
}

.box-hd {
  height: 58px;
  margin: 20px 0 0 0;

  .title {
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
}

.box-bd {
  height: 615px;

  .promo-list {
    float: left;
    height: 615px;
    width: 234px;

    li {
      z-index: 1;
      width: 234px;
      height: 300px;
      margin-bottom: 14.5px;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;

      &:hover {
        z-index: 2;
        -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
        box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
        -webkit-transform: translate3d(0, -2px, 0);
        transform: translate3d(0, -2px, 0);
      }

      img {
        width: 234px;
        height: 300px;
      }
    }
    img {
      width: 234px;
    }
  }

  .list {
    float: left;
    height: 615px;
    width: 991px;
  }
}
</style>
