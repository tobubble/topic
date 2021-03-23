<template>
  <nav id="nav">
    <div class="navWrapper">
      <div class="imgWrapper">
        <!-- <img src="~/assets/img/lo2.jpg" alt=""> -->
        <img src="../../assets/img/lo2.jpg" alt="" />
        <div class="line">|</div>
        <h1 class="titile">专升本报考中心</h1>
      </div>
      <div class="navContent">
        <a href="#" class="navItem" v-for="item in navData" :key="item">
          {{ item }}
          <div class="itemLine" v-if="item != '高职扩列'">|</div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // data: {
  //     navData: ['成人报考', '网络教育', '自学考试', '专本套读', '圆梦计划', '高职扩列']
  // }
  data() {
    return {
      navData: [
        "成人报考",
        "网络教育",
        "自学考试",
        "专本套读",
        "圆梦计划",
        "高职扩列",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#nav {
  display: flex;
  align-items: center;
  height: 100px;
  // background: #bfa;
  width: 100%;

  .navWrapper {
    display: flex;
    margin: 0 auto;
    width: 80%;
    min-width: 850px;

    .imgWrapper {
      display: flex;
      align-items: center;
      margin: 0 100px 0 0;

      .line {
        margin: 0 3px;
      }

      .titile {
        font-size: 16px;
        font-weight: 300;
      }
    }

    .navContent {
      display: flex;
      align-items: center;

      .navItem {
        display: flex;
        align-items: center;

        .itemLine {
          margin: 0 8px;
        }
      }

      .navItem:hover {
        color: #1d9dde;
      }
    }
  }
}
</style>