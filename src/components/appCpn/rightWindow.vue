<template>
  <div class="rightWindow">
    <div class="dialogShow" v-show="dialogShow">
      <div class="windowHeadWrapper">
        <div class="headerLeft">
          <img src="~assets/img/server.jpg" alt="" />
          <span class="serveTitle">专升本教育老师</span>
        </div>
        <div class="headerRight" @click="closeDialog" title="最小化">
          <div class="closeWrapper">
            <div class="closeContent">
              <div class="closeLine1"></div>
              <div class="closeLine2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="windowBodyWrapper">
        <div class="callWrapper">
          <div class="callImgWrapper">
            <div class="callImg"></div>
          </div>
          <div class="talkContentWrapper">
            <div class="messageTimeAndName">
              <div class="name">周老师</div>
              <div class="time">19:31:03</div>
            </div>
            <div class="messageWrapper">
              <div class="message">
                【快速升学历·211名校专科/本科】
                粤师教育广东成人学历教育一线品牌，专注学历提升，能保障结果的高品质教育机构！
                名校合作直录，收费低，院校多，专业全，详情咨询在线老师！
                或直接加微信咨询：18002566660（周老师）
              </div>
            </div>
          </div>
        </div>

        <div class="callWrapper">
          <div class="callImgWrapper">
            <div class="callImg"></div>
          </div>
          <div class="talkContentWrapper">
            <div class="messageTimeAndName">
              <div class="name">周老师</div>
              <div class="time">19:31:03</div>
            </div>
            <div class="messageWrapper">
              <div class="message">
                【快速升学历·211名校专科/本科】
                粤师教育广东成人学历教育一线品牌，专注学历提升，能保障结果的高品质教育机构！
                名校合作直录，收费低，院校多，专业全，详情咨询在线老师！
                或直接加微信咨询：18002566660（周老师）
              </div>
            </div>
          </div>
        </div>

        <div class="callWrapper">
          <div class="callImgWrapper">
            <div class="callImg"></div>
          </div>
          <div class="talkContentWrapper">
            <div class="messageTimeAndName">
              <div class="name">周老师</div>
              <div class="time">19:31:03</div>
            </div>
            <div class="messageWrapper">
              <div class="message">
                【快速升学历·211名校专科/本科】
                粤师教育广东成人学历教育一线品牌，专注学历提升，能保障结果的高品质教育机构！
                名校合作直录，收费低，院校多，专业全，详情咨询在线老师！
                或直接加微信咨询：18002566660（周老师）
              </div>
            </div>
          </div>
        </div>

        <div class="callWrapper">
          <div class="callImgWrapper">
            <div class="callImg"></div>
          </div>
          <div class="talkContentWrapper">
            <div class="messageTimeAndName">
              <div class="name">周老师</div>
              <div class="time">19:31:03</div>
            </div>
            <div class="messageWrapper">
              <div class="message">
                【快速升学历·211名校专科/本科】
                粤师教育广东成人学历教育一线品牌，专注学历提升，能保障结果的高品质教育机构！
                名校合作直录，收费低，院校多，专业全，详情咨询在线老师！
                或直接加微信咨询：18002566660（周老师）
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div @click="openDialog" class="miniDialog" v-show="!dialogShow">
      <div class="iconfontWrapper">
        <div class="iconfont icon-message_1"></div>
      </div>
      <div class="dialogTitle">和我们在线交谈!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogShow: true,
    };
  },
  methods: {
    closeDialog() {
      this.dialogShow = false;
    },
    openDialog() {
      this.dialogShow = true;
    },
  },
};
</script>

<style lang='less' scoped>
.rightWindow {
  background-color: #fff;
  width: 360px;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 36px;

  .windowHeadWrapper {
    height: 36px;
    width: 100%;
    background-color: #02b547;
    display: flex;
    justify-content: space-between;

    .headerLeft {
      margin-left: 10px;
      text-align: center;
      line-height: 36px;
      display: flex;
      align-items: center;
      // width: 360px;
      img {
        width: 24px;
        height: 24px;
      }

      .serveTitle {
        margin-left: 5px;
        color: blanchedalmond;
      }
    }

    .headerRight {
      width: 72px;
      height: 100%;

      .closeWrapper:hover {
        background-color: #1cbd5a;
      }

      .closeWrapper {
        float: right;
        width: 36px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .closeContent {
          width: 15px;
          height: 15px;
          position: relative;
        }

        .closeLine1,
        .closeLine2 {
          width: 20px;
          border-top: 1px solid black;
          position: absolute;
          left: 0;
          transform-origin: 0 0;
        }

        .closeLine1 {
          top: 0;
          transform: rotateZ(45deg);
        }

        .closeLine2 {
          bottom: 0;
          transform: rotateZ(-45deg);
        }
      }
    }
  }
}

.dialogShow {
  background-color: #fffdfb;
  height: 460px;
}

.windowBodyWrapper {
  overflow-y: scroll;
  background-color: #fffdfb;
  height: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}

.callWrapper {
  display: flex;
  margin-top: 15px;

  .callImgWrapper {
    width: 38px;

    .callImg {
      width: 30px;
      height: 30px;
      background-image: url(~assets/img/server.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
}

.talkContentWrapper {
  width: 237px;

  .messageTimeAndName {
    width: 100%;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #62778c;
    font-size: 12px;

    .time {
      margin-left: 10px;
    }
  }
}

.messageWrapper {
  background-color: #eff3f6;
  margin-top: 10px;
  font-size: 14px;
}

.miniDialog {
  width: 225px;
  height: 42px;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #bfa;
  display: flex;

  .iconfontWrapper {
    width: 42px;
    height: 42px;
    background-color: #029139;

    .icon-message_1 {
      font-size: 28px;
      line-height: 42px;
      text-align: center;
      color: white;
    }
  }
}

.dialogTitle {
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #02b547;
  color: white;
  flex-grow: 1;
  text-align: start;
  line-height: 42px;
  cursor: pointer;
}
</style>