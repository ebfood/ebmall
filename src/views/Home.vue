<template>
  <div class="home">
    <div class="main">
      <div class="phone">
        <div class="box-hd">
          <h3>手机</h3>
        </div>
        <div class="box-bd">
          <div class="promo-list">
            <router-link to="javascript:">
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
