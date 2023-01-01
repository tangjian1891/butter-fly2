<template>
  <div>
    <van-button>这是按钮</van-button>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { Button } from 'vant';
export default defineComponent({
  name: 'BFButton',
  components: {
    [Button.name]: Button,
  },
  setup() {

  }
})
</script>
<style lang='scss' scoped>
</style>