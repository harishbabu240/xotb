<template>
  <div class="panel-container">
    <div class="title" @click="collapsePanel()">
      <span>{{ title }}</span>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    title: String,
    // collapsable: Boolean,
  },
  methods: {
    collapsePanel() {
      this.collapsable = !this.collapsable;
    },
  },
};
</script>

<style scoped>
.panel-container {
  border: 1px solid blue;
}
.title {
  color: white;
  background-color: skyblue;
  height: 45px;
  text-align: center;
  border-radius: 5px;
}
.title span {
  position: relative;
  top: 10px;
}
.body {
  padding: 10px;
  line-height: 2.75rem;
}
</style>
