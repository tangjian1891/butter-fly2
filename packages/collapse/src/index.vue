<template>
  <div>
    <div class="ddd_title">看看样式能生效吗</div>
    <Collapse v-model="activeNames">
      <CollapseItem title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行。
      </CollapseItem>
      <CollapseItem title="标题2" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </CollapseItem>
      <CollapseItem title="标题3" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script lang='ts' setup>
import { defineComponent, ref } from 'vue';
import { Collapse, CollapseItem } from 'vant';
const activeNames = ref([]);
// export default defineComponent({
//   components: {
//     [Collapse.name]: Collapse,
//     [CollapseItem.name]: CollapseItem,
//   },
//   setup() {
    
//     return {
//       activeNames
//     }
//   }
// })
</script>
<style scoped>
.ddd_title {
  color: red;
}
</style>