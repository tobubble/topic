<template>
  <div class="cardCpn">
    <div class="cardWrapper">
      <div class="cardItem" :style="{background: cardColor[index1]}" v-for="(item, index1) in cardData" :key="item.title">
        <div class="title">
          {{item.title}}
        </div>
        <div class="dotLine">

        </div>
        <div class="optionsWrapper">
          <div class="options" v-for="(item2, index) in item.options" :key="index">
            {{item2}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          title: "自学考试",
          options: ['学历含金量高', '院校专业齐全', '考试科目多', '适合基础好的学员']
        },
        {
          title: '成人高考',
          options: ['考试零压力', '报考费用低', '通过指数高', '学历含金量高']
        },
        {
          title: '网络教育',
          options: ['时间地域无限制', '学习足不出户', '名校文凭', '学费偏高', '院校专业齐全']
        },
        {
          title: '电视大学',
          options: ['门槛低', '开放式教育', '时间地域无限制', '含金量偏低']
        }
      ],
      cardColor: ['#FEB901', '#2DC1FF', '#F36F7B', '#34CDA0']
    };
  },
};
</script>

<style lang='less' scoped>
.cardCpn {
  width: 100%;
  height: 350px;
  background: #e9eaeb;

  .cardWrapper {
    width: 70%;
    height: 350px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-width: 1000px;
    display: flex;

    .cardItem {
      width: 240px;
      height: 90%;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        color: #fff;
        font-size: 24px;
        margin-top: 40px;
      }

      .options {
        margin-top: 15px;
        text-align: center;
      }

      .dotLine {
        margin-top: 15px;
        border-top: 1px dashed #fff;
        width: 80%;
      }
    }
  }
  
}
</style>