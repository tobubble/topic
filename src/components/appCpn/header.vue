<template>
  <header id="header">
    <div class="headerWrapper">
      <h2 class="headerTitle">自考·成人高考·网络教育</h2>
      <div class="info">初高中毕业也能修一个正规名校专本科学历</div>

      <div class="info2">武汉专升本专业机构</div>
      <div class="optionsWrapper">
        <div class="optionContent">
          <a href="javascript:;" class="options" v-for="item in optionsData1" :key="item">
            {{ item }}
          </a>
        </div>
        <div class="optionContent">
          <a href="javascript:;" class="options" v-for="item in optionsData2" :key="item">
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      optionsData1: ["学费低服务好", "811轻松升学历", "0基础报读"],
      optionsData2: ["985/211名校", "毕业证 + 学位证", "学信网可查"],
    };
  },
};
</script>

<style lang="less" scoped>
#header {
  height: 800px;
  position: relative;
  background: url(../../assets/img/lo1.jpg) no-repeat center;
  background-size: cover;
  z-index: 1;
}

#header::after {
  content: "";
  display: block;
  width: 100%;
  height: 800px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  z-index: 2;
}

.headerWrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding-top: 100px;
  width: 800px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  z-index: 999;

  .headerTitle,
  .info,
  .info2 {
    color: #ffff00;
    font-size: 24px;
  }

  .info {
    margin-top: 50px;
  }

  .info2 {
    border-radius: 10px;
    margin-top: 60px;
    font-size: 60px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .optionsWrapper {
    margin-top: 150px;
    padding: 0 100px;
    display: flex;
    flex-direction: column;

    .optionContent {
      display: flex;
      justify-content: space-between;

      .options {
        border-radius: 4px;
        display: inline-block;
        width: 180px;
        height: 50px;
        border: 2px solid white;
        margin-top: 20px;
        line-height: 50px;
        background-color: rgba(0, 0, 0, 0.1);
        color: white;
        font-size: 24px;
        transition: 1 ease all;
      }

      .options:hover {
        transform: scale(1.05);
        background: rgb(43, 98, 248);
      }
    }
  }
}
</style>