<template>
  <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">111</div>
          <div class="swiper-slide">222</div>
        </div>
      </div>
      <div class="list">
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </li>
      </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default {
  data() {
    return {
      list:[
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
        {
          img:"http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg",
          name:"成绩奖励"
        },
      ]
    }
  },
created() {
    this.$nextTick(()=>{
      new Swiper(".swiper-container",{
        loop:true
      })
    })
},

}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 150px;
  background: #ccc;
}
.list {
  width: 100%;
  height: 150px;
    display: flex;
    flex-wrap: wrap;
  li {
   width: 20%;
    img {
      width: 80%;
      height: 80%;
    }
  }
}
</style>