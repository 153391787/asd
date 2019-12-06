<template>
  <div class="home-page">
      <header></header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/shouye">首页</router-link>
            <router-link to="/home/my">我的</router-link>
        </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
        width: 100%;
        height: 50px;
        background: skyblue;
    }
    main {
        flex: 1
    }
      footer {
        width: 100%;
        height: 50px;
        background: skyblue;
    }
}
</style>