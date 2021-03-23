<template>
  <footer class="footer">
    <div class="footerWrapper">
      <h1 class="footerTitle">
        我们专升本机构有哪些<span class="key">考前咨询</span>
      </h1>
      <div class="searchOptionsWrapper">
        <ul class="option1Wrapper">
          <li class="searchOption1" v-for="item1 in searchData1" :key="item1">
            <a class="search" href="javascript:;"
              >{{ item1 }} <span>>></span></a
            >
          </li>
        </ul>
        <ul class="option1Wrapper">
          <li class="searchOption2" v-for="item2 in searchData2" :key="item2">
            <a class="search" href="javascript:;"
              >{{ item2 }} <span>>></span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="askForHelpWrapper">
      <a href="javascript:;" class="askForHelp">点击咨询在线老师吧 >></a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      searchData1: ["报考事件", "报考条件", "报考流程", "报考费用", "考试科目"],
      searchData2: [
        "免考条件",
        "招生院校",
        "热门专业",
        "考证时长",
        "学历形式",
        "其他答疑",
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.footer {
  height: 500px;
}

.footerWrapper {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  height: 280px;
  min-width: 1000px;
  text-overflow: hidden;
  .footerTitle {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 50px;
  }

  .key {
    color: #ff5151;
  }

  .searchOptionsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    // flex-wrap: wrap;
    .option1Wrapper {
      display: flex;
    }

    .searchOption1:hover,
    .searchOption2:hover {
      text-decoration: underline;
      background-color: #ef3737;
    }

    .searchOption1,
    .searchOption2 {
      width: 105px;
      height: 30px;
      background: #272636;
      border-radius: 15px;
      color: white;
      line-height: 30px;
      margin-left: 10px;
      transition: 0.5s ease all;

      .search {
        width: 105px;
        height: 30px;
        display: block;
        color: white;
      }
    }
  }
}

.askForHelp {
  display: block;
  width: 400px;
  height: 60px;
  background: #fbd22c;
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

.askForHelp:hover {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
}
</style>
