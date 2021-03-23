<template>
  <div class="leftWindow">
    <div class="topImg">
      <a href="javascript:;" class="lineAsk"> 在线咨询 </a>
    </div>
    <form class="phoneForm" action="">
      <div class="telephoneNum">
        <input
          class="numIpt"
          name=""
          placeholder="请输入手机号码"
          type="text"
        />
      </div>
      <div class="putBtn">
        点击免费通话
        <input class="inputSubmit" value="" type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.leftWindow {
  width: 120px;
  height: 300px;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f1f2f9;
  z-index: 999;

  .topImg {
    position: relative;
    width: 120px;
    height: 220px;
    background-image: url(~assets/img/Group_24.png);
    background-repeat: no-repeat;
    background-size: cover;

    .lineAsk {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      width: 88px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      background-color: #1e85eb;
      bottom: 20px;
      border-radius: 5px;
      color: white;
    }
  }
}

.telephoneNum {
  width: 108px;
  height: 28px;
  border: 1px solid rgb(206, 213, 224);

  .numIpt {
    border: none;
    width: 108px;
    height: 28px;
    outline: none;
  }
}

.phoneForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80px;
}

.putBtn {
  width: 108px;
  height: 28px;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 28px;
  background-color: #ff6200;
  position: relative;
  cursor: pointer;

  .inputSubmit {
    outline: none;
    border: none;
    position: absolute;
    background-color: transparent;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0;
  }
}
</style>
