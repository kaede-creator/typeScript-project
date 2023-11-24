<script setup lang="ts">
import { ref } from 'vue'
// const handleChange = (e:Event) => {
//   console.log(console.log((e.target as HTMLInputElement).value))
// }

// スクロール範囲の指定
const scrollArea = document.getElementsByClassName("scroll_area")

const Grayed = ref(true)
const Colored = ref(false)
//　スクロールイベント
const onScroll = (scrollArea:Event) => {
    const illust = document.getElementsByClassName("illust")
    Grayed
    // console.log('ss');
}

</script>
<template>
    <main>
        <!-- テスト -->
        <!-- <input @change="handleChange"> -->
        <!-- テスト ここまで-->
        <div class="scroll_area" @scroll.passive="onScroll">
            <img class="illust" :class="{ gray: Grayed, 'color': Colored }" src="/grayScale/illust_1.jpg" width="150" height="150">
            <img class="illust" :class="{ gray: Grayed, color: Colored }" src="/grayScale/illust_2.jpg" width="150" height="150">
            <img class="illust" :class="{ gray: Grayed, color: Colored }" src="/grayScale/illust_3.jpg" width="150" height="150">
        </div>
    </main>
</template>

<style>
  .scroll_area {
    height: 300px;
    overflow-y: scroll;
    background-color: beige;
    padding:40px 60px;
  }

  .illust{
    width: 150px;
    height: auto;
    margin: 0 auto 30px;
    display: block;
  }

  .illust.gray{
    filter: grayscale(100%);
  }
</style>